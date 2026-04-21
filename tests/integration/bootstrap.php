<?php
/**
 * WordPress integration test bootstrap.
 */

$_tests_dir = getenv( 'WP_TESTS_DIR' );

if ( ! $_tests_dir ) {
	$_tests_dir = '/tmp/wordpress-tests-lib';
}

if ( ! file_exists( $_tests_dir . '/includes/functions.php' ) ) {
	fwrite( STDERR, "Missing WordPress test library. Set WP_TESTS_DIR or run scripts/install-wp-tests.sh.\n" );
	exit( 1 );
}

require_once $_tests_dir . '/includes/functions.php';

/**
 * Load the plugin under test.
 */
function _manually_load_pdfjs_plugin() {
	require dirname( __DIR__, 2 ) . '/pdfjs-viewer.php';
}

tests_add_filter( 'muplugins_loaded', '_manually_load_pdfjs_plugin' );

require $_tests_dir . '/includes/bootstrap.php';
