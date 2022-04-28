<?php
/**
 * Media Button
 */
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

// priority is 12 since default button is 10.
add_action( 'media_buttons', 'pdfjs_media_button', 12 );

/**
 * Include the media button
 */
function pdfjs_media_button() {
	echo '<a href="#" class="button js-insert-pdfjs">' . __( 'Add PDF', 'pdfjs-viewer' ) . '</a>';
}

add_action( 'wp_enqueue_media', 'include_pdfjs_media_button_js_file' );

/**
 * Include the media button JS button in the classic editor.
 */
function include_pdfjs_media_button_js_file() {

	$pdfjs_array = array(
		'pdfjs_download_button'        => get_option( 'pdfjs_download_button', 'on' ),
		'pdfjs_print_button'           => get_option( 'pdfjs_print_button', 'on' ),
		'pdfjs_fullscreen_link'        => get_option( 'pdfjs_fullscreen_link', 'on' ),
		'pdfjs_fullscreen_link_text'   => get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' ),
		'pdfjs_fullscreen_link_target' => get_option( 'pdfjs_fullscreen_link_target', '' ),
		'pdfjs_embed_height'           => get_option( 'pdfjs_embed_height', 800 ),
		'pdfjs_embed_width'            => get_option( 'pdfjs_embed_width', 0 ),
		'pdfjs_viewer_scale'           => get_option( 'pdfjs_viewer_scale', 0 ),
	);

	if ( function_exists( 'use_block_editor_for_post' ) ) {
		if ( use_block_editor_for_post( get_post() ) !== 1 ) {
			wp_enqueue_script( 'media_button', plugin_dir_url( __DIR__ ) . 'pdfjs-media-button.js', array( 'jquery' ), '2.1.6', true );
			wp_localize_script( 'media_button', 'pdfjs_options', $pdfjs_array );
		}
	} else {
		wp_enqueue_script( 'media_button', plugin_dir_url( __DIR__ ) . 'pdfjs-media-button.js', array( 'jquery' ), '2.1.6', true );
		wp_localize_script( 'media_button', 'pdfjs_options', $pdfjs_array );
	}
}
