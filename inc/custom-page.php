<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

add_filter( 'init', function() {
	if ( isset( $_GET['pdfjs_id'] ) ) {

		$attachment_id = isset( $_GET['pdfjs_id'] ) && is_numeric( $_GET['pdfjs_id'] ) ? $_GET['pdfjs_id'] : '0';

		if ( '0' !== $attachment_id ) {
			$pdfjs_url = wp_get_attachment_url( $attachment_id );
		} else {
			$pdfjs_url = plugin_dir_url( __FILE__ ) . 'pdf-loading-error.pdf';
		}

		include plugin_dir_path( __FILE__ ) . '../templates/fullscreen.php';
		die();
	}
} );
