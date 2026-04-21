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

	// Get defaults from options page if available
	$default_zoom = get_option( 'pdfjs_viewer_scale', 'auto' );
	$default_height = get_option( 'pdfjs_embed_height', 800 );
	$default_width = get_option( 'pdfjs_embed_width', 0 );
	$default_fullscreen = get_option( 'pdfjs_fullscreen_link', 'on' );
	$default_fullscreen_text = get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' );
	$default_fullscreen_target = get_option( 'pdfjs_fullscreen_link_target', '' );
	$default_download = get_option( 'pdfjs_download_button', 'on' );
	$default_print = get_option( 'pdfjs_print_button', 'on' );
	$default_search = get_option( 'pdfjs_search_button', 'on' );
	$default_editing = get_option( 'pdfjs_editing_buttons', 'on' );
	
	// Convert numeric defaults to strings with units
	$default_height_str = is_numeric( $default_height ) ? $default_height . 'px' : ( $default_height ?: '800px' );
	$default_width_str = ( 0 === $default_width || '0' === $default_width ) ? '100%' : ( is_numeric( $default_width ) ? $default_width . 'px' : ( $default_width ?: '100%' ) );
	
	// set defaults.
	$incoming_from_post = shortcode_atts(
		array(
			'url'               => plugin_dir_url( __DIR__ ) . '/pdf-loading-error.pdf',
			'viewer_height'     => $default_height_str,
			'viewer_width'      => $default_width_str,
			'fullscreen'        => ( 'on' === $default_fullscreen ) ? 'true' : 'false',
			'fullscreen_text'   => $default_fullscreen_text,
			'fullscreen_target' => ( 'on' === $default_fullscreen_target ) ? 'true' : 'false',
			'download'          => ( 'on' === $default_download ) ? 'true' : 'false',
			'print'             => ( 'on' === $default_print ) ? 'true' : 'false',
			'openfile'          => 'false',
			'zoom'              => $default_zoom,
			'attachment_id'     => '',
			'search'            => ( 'on' === $default_search ) ? 'true' : 'false',
			'editing'           => ( 'on' === $default_editing ) ? 'true' : 'false',
		),
		$incoming_from_post
	);

	// Use shared rendering function.
	return pdfjs_render_viewer( $incoming_from_post );
}
