#!/usr/bin/env bash

set -euo pipefail

usage() {
	echo "Usage: npm run update:pdfjs -- /absolute/or/relative/path/to/pdfjs-legacy" >&2
	echo "Expected source layout: <source>/build and <source>/web" >&2
}

if [[ $# -ne 1 ]]; then
	usage
	exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
SOURCE_DIR="$1"

if [[ ! -d "${SOURCE_DIR}" ]]; then
	echo "Source directory not found: ${SOURCE_DIR}" >&2
	exit 1
fi

SOURCE_DIR="$(cd "${SOURCE_DIR}" && pwd)"

if [[ ! -d "${SOURCE_DIR}/build" || ! -d "${SOURCE_DIR}/web" ]]; then
	echo "Invalid source. Expected both directories:" >&2
	echo "  ${SOURCE_DIR}/build" >&2
	echo "  ${SOURCE_DIR}/web" >&2
	exit 1
fi

TARGET_BUILD_DIR="${ROOT_DIR}/pdfjs/build"
TARGET_WEB_DIR="${ROOT_DIR}/pdfjs/web"

echo "Syncing PDF.js files from: ${SOURCE_DIR}"
rsync -a "${SOURCE_DIR}/build/" "${TARGET_BUILD_DIR}/"
rsync -a "${SOURCE_DIR}/web/" "${TARGET_WEB_DIR}/"

mirror_mjs_to_js() {
	local mjs_file="$1"
	local js_file="$2"
	local mjs_map_file="${mjs_file}.map"
	local js_map_file="${js_file}.map"

	if [[ -f "${mjs_file}" ]]; then
		cp "${mjs_file}" "${js_file}"
		echo "Mirrored $(basename "${mjs_file}") -> $(basename "${js_file}")"

		if [[ -f "${mjs_map_file}" ]]; then
			cp "${mjs_map_file}" "${js_map_file}"
			echo "Mirrored $(basename "${mjs_map_file}") -> $(basename "${js_map_file}")"
		elif [[ -f "${js_map_file}" ]]; then
			rm -f "${js_map_file}"
			echo "Removed stale $(basename "${js_map_file}") (no matching $(basename "${mjs_map_file}"))"
		fi
	fi
}

mirror_mjs_to_js "${TARGET_BUILD_DIR}/pdf.mjs" "${TARGET_BUILD_DIR}/pdf.js"
mirror_mjs_to_js "${TARGET_BUILD_DIR}/pdf.worker.mjs" "${TARGET_BUILD_DIR}/pdf.worker.js"
mirror_mjs_to_js "${TARGET_BUILD_DIR}/pdf.sandbox.mjs" "${TARGET_BUILD_DIR}/pdf.sandbox.js"
mirror_mjs_to_js "${TARGET_WEB_DIR}/viewer.mjs" "${TARGET_WEB_DIR}/viewer.js"
mirror_mjs_to_js "${TARGET_WEB_DIR}/debugger.mjs" "${TARGET_WEB_DIR}/debugger.js"

rewrite_js_references() {
	local file_path="$1"
	shift

	if [[ ! -f "${file_path}" ]]; then
		return
	fi

	while [[ $# -gt 0 ]]; do
		local from="$1"
		local to="$2"
		shift 2
		FROM="${from}" TO="${to}" perl -0pi -e 's/\Q$ENV{FROM}\E/$ENV{TO}/g' "${file_path}"
	done
}


rewrite_js_references "${TARGET_BUILD_DIR}/pdf.js" \
	"./pdf.worker.mjs" "./pdf.worker.js" \
	"sourceMappingURL=pdf.mjs.map" "sourceMappingURL=pdf.js.map"

rewrite_js_references "${TARGET_BUILD_DIR}/pdf.worker.js" \
	"sourceMappingURL=pdf.worker.mjs.map" "sourceMappingURL=pdf.worker.js.map"

rewrite_js_references "${TARGET_BUILD_DIR}/pdf.sandbox.js" \
	"sourceMappingURL=pdf.sandbox.mjs.map" "sourceMappingURL=pdf.sandbox.js.map"

rewrite_js_references "${TARGET_WEB_DIR}/viewer.js" \
	"./debugger.mjs" "./debugger.js" \
	"../build/pdf.worker.mjs" "../build/pdf.worker.js" \
	"../build/pdf.sandbox.mjs" "../build/pdf.sandbox.js" \
	"sourceMappingURL=viewer.mjs.map" "sourceMappingURL=viewer.js.map"

echo
echo "Update complete."
