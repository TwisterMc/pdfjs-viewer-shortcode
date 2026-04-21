#!/usr/bin/env bash
# Adapted from WordPress plugin test scaffold installer.
set -euo pipefail

if [[ $# -lt 3 ]]; then
  echo "Usage: $0 <db-name> <db-user> <db-pass> [db-host] [wp-version] [skip-db-create]"
  exit 1
fi

DB_NAME="$1"
DB_USER="$2"
DB_PASS="$3"
DB_HOST="${4:-localhost}"
WP_VERSION="${5:-latest}"
SKIP_DB_CREATE="${6:-false}"

WP_CORE_DIR="/tmp/wordpress/"
WP_TESTS_DIR="/tmp/wordpress-tests-lib"

download() {
  if command -v curl >/dev/null 2>&1; then
    curl -sS "$1" -o "$2"
  elif command -v wget >/dev/null 2>&1; then
    wget -nv -O "$2" "$1"
  else
    echo "Error: neither curl nor wget is available"
    exit 1
  fi
}

if [[ ! -d "$WP_TESTS_DIR" ]]; then
  mkdir -p "$WP_TESTS_DIR"
fi

if [[ ! -d "$WP_CORE_DIR" ]]; then
  mkdir -p "$WP_CORE_DIR"
fi

if [[ ! -f "$WP_TESTS_DIR/includes/functions.php" ]]; then
  echo "Downloading WordPress test library..."
  mkdir -p "$WP_TESTS_DIR/includes"
  download "https://develop.svn.wordpress.org/trunk/tests/phpunit/includes/functions.php" "$WP_TESTS_DIR/includes/functions.php"
  download "https://develop.svn.wordpress.org/trunk/tests/phpunit/includes/bootstrap.php" "$WP_TESTS_DIR/includes/bootstrap.php"
fi

if [[ ! -f "$WP_TESTS_DIR/wp-tests-config.php" ]]; then
  echo "Generating wp-tests-config.php..."
  cat > "$WP_TESTS_DIR/wp-tests-config.php" <<PHP
<?php

define( 'DB_NAME', '${DB_NAME}' );
define( 'DB_USER', '${DB_USER}' );
define( 'DB_PASSWORD', '${DB_PASS}' );
define( 'DB_HOST', '${DB_HOST}' );
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );

define( 'WP_TESTS_DOMAIN', 'example.org' );
define( 'WP_TESTS_EMAIL', 'admin@example.org' );
define( 'WP_TESTS_TITLE', 'Test Blog' );
define( 'WP_PHP_BINARY', 'php' );
define( 'WPLANG', '' );

// Use source checkout if available
if ( file_exists( '/tmp/wordpress/src/' ) ) {
  define( 'ABSPATH', '/tmp/wordpress/src/' );
} else {
  define( 'ABSPATH', '/tmp/wordpress/' );
}

require_once ABSPATH . 'wp-settings.php';
PHP
fi

if [[ ! -f "$WP_CORE_DIR/wp-load.php" && ! -f "$WP_CORE_DIR/src/wp-load.php" ]]; then
  echo "Downloading WordPress core (${WP_VERSION})..."
  if [[ "$WP_VERSION" == "latest" ]]; then
    download "https://wordpress.org/latest.tar.gz" /tmp/wordpress-latest.tar.gz
    tar --strip-components=1 -zxmf /tmp/wordpress-latest.tar.gz -C "$WP_CORE_DIR"
  else
    download "https://wordpress.org/wordpress-${WP_VERSION}.tar.gz" /tmp/wordpress.tar.gz
    tar --strip-components=1 -zxmf /tmp/wordpress.tar.gz -C "$WP_CORE_DIR"
  fi
fi

if [[ "$SKIP_DB_CREATE" != "true" ]]; then
  echo "Creating test database if needed..."
  mysqladmin create "$DB_NAME" --user="$DB_USER" --password="$DB_PASS" --host="$DB_HOST" >/dev/null 2>&1 || true
fi

echo "WordPress test environment is ready."
echo "WP_TESTS_DIR=$WP_TESTS_DIR"
