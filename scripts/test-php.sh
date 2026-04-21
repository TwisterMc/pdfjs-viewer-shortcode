#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Running PHPUnit..."

if [[ ! -x "vendor/bin/phpunit" ]]; then
  echo "Error: vendor/bin/phpunit not found. Run: composer install" >&2
  exit 1
fi

if [[ ! -f "phpunit.xml.dist" ]]; then
  echo "Error: phpunit.xml.dist not found." >&2
  exit 1
fi

TEST_FILE_COUNT="$(find tests -maxdepth 1 -type f -name '*Test.php' | wc -l | tr -d ' ')"
echo "Discovered ${TEST_FILE_COUNT} PHPUnit test files."

STDOUT_FILE="$(mktemp)"
STDERR_FILE="$(mktemp)"

set +e
vendor/bin/phpunit --configuration phpunit.xml.dist --testdox --colors=always >"$STDOUT_FILE" 2>"$STDERR_FILE"
STATUS=$?
set -e

if [[ -s "$STDOUT_FILE" ]]; then
  cat "$STDOUT_FILE"
fi

if [[ -s "$STDERR_FILE" ]]; then
  cat "$STDERR_FILE" >&2
fi

rm -f "$STDOUT_FILE" "$STDERR_FILE"

if [[ $STATUS -ne 0 ]]; then
  echo "PHPUnit failed (exit code: $STATUS)." >&2
  exit $STATUS
fi

if [[ $STATUS -eq 0 ]]; then
  echo "PHPUnit passed."
fi
