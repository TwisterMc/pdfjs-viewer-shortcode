#!/usr/bin/env bash
#
# Build a clean, production-only copy of the plugin in ./SVN for
# WordPress.org deployment. The SVN/ folder is git-ignored.
#
# Usage:
#   bash ./scripts/build-svn.sh                # rebuild assets, then copy
#   bash ./scripts/build-svn.sh --skip-build   # copy only (assets must exist)
#
set -euo pipefail

cd "$(dirname "$0")/.."

BUILD_DIR="SVN"

# ---------------------------------------------------------------------------
# 1. Fresh build of block assets + readme.txt unless --skip-build.
# ---------------------------------------------------------------------------
if [[ "${1:-}" == "--skip-build" ]]; then
    echo ">> Skipping build (using existing blocks/build and readme.txt)"
else
    echo ">> Running npm run build ..."
    npm run build
fi

# Guard: required build artifacts must exist before copying.
for required in readme.txt blocks/build/index.js blocks/build/index.asset.php; do
    if [[ ! -f "$required" ]]; then
        echo "ERROR: $required is missing. Run 'npm run build' first." >&2
        exit 1
    fi
done

# ---------------------------------------------------------------------------
# 2. Recreate SVN/ from scratch.
# ---------------------------------------------------------------------------
echo ">> Recreating $BUILD_DIR/ ..."
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR/blocks"

# ---------------------------------------------------------------------------
# 3. Copy runtime files only (whitelist — anything not listed is excluded,
#    so tests/, scripts/, .github/, vendor/, node_modules/, composer.*,
#    package*.json, phpunit configs and dev docs never ship).
# ---------------------------------------------------------------------------
echo ">> Copying runtime files ..."

# Top-level plugin files.
cp index.php pdfjs-viewer.php pdfjs-media-button.js readme.txt LICENSE "$BUILD_DIR"/

# Plugin PHP includes.
rsync -a inc/ "$BUILD_DIR/inc/"

# Compiled Gutenberg block (source in blocks/src stays out).
rsync -a blocks/build/ "$BUILD_DIR/blocks/build/"

# Translations: compiled .mo catalogs + .pot template only
# (.po sources, .po~ backups and the translator README are not needed at runtime).
rsync -a --include='*.mo' --include='*.pot' --exclude='*' \
    languages/ "$BUILD_DIR/languages/"

# PDF.js library + viewer (viewer.php reads viewer.html at runtime).
# Source maps (*.map) are excluded: dev-only and multi-megabyte.
rsync -a --exclude='*.map' pdfjs/ "$BUILD_DIR/pdfjs/"

# ---------------------------------------------------------------------------
# 4. Safety check: fail if any known dev file leaked into SVN/.
# ---------------------------------------------------------------------------
echo ">> Verifying no dev files leaked ..."
for forbidden in \
    tests scripts .github update node_modules vendor \
    composer.json composer.lock patchwork.json \
    package.json package-lock.json \
    phpunit.xml phpunit.xml.dist phpunit.integration.xml.dist \
    DEVELOPER.md RUN_TESTS.md PHP_CONFIG_FOR_PHPUNIT.md \
    readme.md .gitignore .gitattributes .DS_Store; do
    if [[ -e "$BUILD_DIR/$forbidden" ]]; then
        echo "ERROR: $forbidden leaked into $BUILD_DIR/" >&2
        exit 1
    fi
done
if find "$BUILD_DIR" -name '*.map' -o -name '*.po' | grep -q .; then
    echo "ERROR: source maps or .po files leaked into $BUILD_DIR/" >&2
    exit 1
fi

# ---------------------------------------------------------------------------
# 5. Summary.
# ---------------------------------------------------------------------------
FILE_COUNT=$(find "$BUILD_DIR" -type f | wc -l | tr -d ' ')
TOTAL_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
echo ">> Done. $BUILD_DIR/ contains $FILE_COUNT files ($TOTAL_SIZE)."
echo ">> Top-level contents:"
ls -1 "$BUILD_DIR"
