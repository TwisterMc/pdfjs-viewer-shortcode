<?php
/** ==== Shortcode ==== */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

// tell WordPress to register the pdfjs-viewer shortcode.
add_shortcode( 'pdfjs-viewer', 'pdfjs_handler' );

/**
 * Get the embed info from the shortcode.
 */
function pdfjs_handler( $incoming_from_post ) {

	// do not run this code on the admin screens.
	if ( is_admin() || defined( 'REST_REQUEST' ) && REST_REQUEST ) {
		return;
	}

	// set defaults.
	$incoming_from_post = shortcode_atts(
		array(
			'url'               => plugin_dir_url( __DIR__ ) . '/pdf-loading-error.pdf',
			'viewer_height'     => '800px',
			'viewer_width'      => '100%',
			'fullscreen'        => 'true',
			'fullscreen_text'   => 'View Fullscreen',
			'fullscreen_target' => 'false',
			'download'          => 'true',
			'print'             => 'true',
			'openfile'          => 'false',
			'zoom'              => 'auto',
			'attachment_id'     => '',
		),
		$incoming_from_post
	);

	// send back text to replace shortcode in post.
	return pdfjs_generator( $incoming_from_post );
}
