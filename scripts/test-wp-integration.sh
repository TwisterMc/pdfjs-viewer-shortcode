#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -f "phpunit.integration.xml.dist" ]]; then
  echo "Error: phpunit.integration.xml.dist not found." >&2
  exit 1
fi

if [[ -z "${WP_TESTS_DIR:-}" ]]; then
  export WP_TESTS_DIR="/tmp/wordpress-tests-lib"
fi

if [[ ! -f "$WP_TESTS_DIR/includes/functions.php" ]]; then
  echo "Missing WordPress tests library at $WP_TESTS_DIR." >&2
  echo "Run scripts/install-wp-tests.sh <db-name> <db-user> <db-pass> [db-host] [wp-version]" >&2
  exit 1
fi

echo "Running WordPress integration tests..."
vendor/bin/phpunit --configuration phpunit.integration.xml.dist --testdox --colors=always
