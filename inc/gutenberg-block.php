<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Gutenberg Block
 */
function pdfjs_register_gutenberg_card_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Register our block script with WordPress.
	wp_register_script(
		'gutenberg-pdfjs',
		plugins_url( '../blocks/dist/blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		'2.2.2',
		true
	);

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
	wp_localize_script( 'gutenberg-pdfjs', 'pdfjs_options', $pdfjs_array );

	// Register our block's base CSS.
	wp_register_style(
		'gutenberg-pdfjs',
		plugins_url( '../blocks/dist/style.css', __FILE__ ),
		'',
		'2.2.2'
	);

	register_block_type(
		'blocks/pdfjs-block',
		array(
			'editor_script' => 'gutenberg-pdfjs',
			'editor_style'  => 'gutenberg-pdfjs-edit-style',
			'style'         => 'gutenberg-pdfjs',
		)
	);
}

add_action( 'init', 'pdfjs_register_gutenberg_card_block' );
