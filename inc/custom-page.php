<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

add_filter( 'init', function() {
	if ( isset( $_GET['pdfjs_id'] ) ) {

		$nonce = sanitize_text_field( $_REQUEST['_wpnonce'] );
		if ( ! wp_verify_nonce( $nonce, 'pdfjs_full_screen' ) ) {
			die( sanitize_text_field( __( 'Security Check Failed', 'pdfjs-viewer' ) ) );
		}

		/**
		 * Custom Template
		 */

		$attachment_pdfjs_id = sanitize_text_field( $_GET['pdfjs_id'] );
		$attachment_id       = isset( $attachment_pdfjs_id ) && is_numeric( $attachment_pdfjs_id ) ? $attachment_pdfjs_id : '0';

		if ( '0' !== $attachment_id ) {
			$pdfjs_url = wp_get_attachment_url( $attachment_id );
		} else {
			$pdfjs_url = plugin_dir_url( __FILE__ ) . '../pdf-loading-error.pdf';
		}

		if ( ! $pdfjs_url ) {
			$pdfjs_url = plugin_dir_url( __FILE__ ) . '../pdf-loading-error.pdf';
		}

		include plugin_dir_path( __FILE__ ) . '../templates/fullscreen.php';
		die();
	}
});
