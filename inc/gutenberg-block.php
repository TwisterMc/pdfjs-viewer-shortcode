<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Get all PDF.js plugin options as a normalized array.
 * Cached in static variable to prevent repeated database queries.
 *
 * @return array Plugin options with consistent keys and values.
 */
function pdfjs_get_options() {
	// Try to get from object cache first
	$cached_options = wp_cache_get( 'pdfjs_options', 'pdfjs' );
	if ( false !== $cached_options ) {
		return $cached_options;
	}
	
	// Build options array
	$cached_options = array(
		'pdfjs_viewer_url'             => plugin_dir_url( dirname( __FILE__ ) ) . 'pdfjs/web/viewer.php',
		'pdfjs_plugin_version'         => PDFJS_PLUGIN_VERSION,
		'pdfjs_download_button'        => get_option( 'pdfjs_download_button', 'on' ),
		'pdfjs_print_button'           => get_option( 'pdfjs_print_button', 'on' ),
		'pdfjs_search_button'          => get_option( 'pdfjs_search_button', 'on' ),
		'pdfjs_editing_buttons'        => get_option( 'pdfjs_editing_buttons', 'on' ),
		'pdfjs_fullscreen_link'        => get_option( 'pdfjs_fullscreen_link', 'on' ),
		'pdfjs_fullscreen_link_text'   => get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' ),
		'pdfjs_fullscreen_link_target' => get_option( 'pdfjs_fullscreen_link_target', '' ),
		'pdfjs_embed_height'           => get_option( 'pdfjs_embed_height', 800 ),
		'pdfjs_embed_width'            => get_option( 'pdfjs_embed_width', 0 ),
		'pdfjs_viewer_scale'           => ( function() { $s = get_option( 'pdfjs_viewer_scale', 'auto' ); return ( '' === (string) $s || '0' === (string) $s || 0 === $s ) ? 'auto' : $s; } )(),
		'pdfjs_viewer_pagemode'        => get_option( 'pdfjs_viewer_pagemode', 'none' ),
		'pdfjs_allow_external_domains' => get_option( 'pdfjs_allow_external_domains', '' ),
	);
	
	// Cache for 1 hour
	wp_cache_set( 'pdfjs_options', $cached_options, 'pdfjs', 3600 );
	
	return $cached_options;
}

/**
 * Block render callback
 * Maps block attributes to pdfjs_render_viewer() arguments and returns HTML.
 *
 * @param array $attributes Block attributes from editor or saved post meta.
 * @return string HTML output or empty string.
 */
function pdfjs_block_render( $attributes ) {
	// Don't render in admin or REST requests
	if ( is_admin() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		return '';
	}

	// Map block attributes to pdfjs_render_viewer() expected format
	// Use external URL if provided, otherwise use library URL
	$file_url           = isset( $attributes['externalURL'] ) && ! empty( $attributes['externalURL'] ) ? $attributes['externalURL'] : ( isset( $attributes['imageURL'] ) ? $attributes['imageURL'] : '' );
	$attachment_id      = isset( $attributes['externalURL'] ) && ! empty( $attributes['externalURL'] ) ? '' : ( isset( $attributes['imgID'] ) ? $attributes['imgID'] : '' );

	$opt_height = get_option( 'pdfjs_embed_height', 800 );
	$opt_width  = (int) get_option( 'pdfjs_embed_width', 0 );
	$opt_scale  = get_option( 'pdfjs_viewer_scale', 'auto' );
	$opt_scale  = ( '' === (string) $opt_scale || '0' === (string) $opt_scale ) ? 'auto' : $opt_scale;

	$render_args = array(
		'url'               => $file_url,
		'attachment_id'     => $attachment_id,
		'viewer_height'     => isset( $attributes['viewerHeight'] ) ? $attributes['viewerHeight'] . 'px' : ( $opt_height ? $opt_height . 'px' : '800px' ),
		'viewer_width'      => isset( $attributes['viewerWidth'] ) ? ( 0 !== $attributes['viewerWidth'] ? $attributes['viewerWidth'] . 'px' : '100%' ) : ( $opt_width > 0 ? $opt_width . 'px' : '100%' ),
		'fullscreen'        => isset( $attributes['showFullscreen'] ) ? ( $attributes['showFullscreen'] ? 'true' : 'false' ) : ( get_option( 'pdfjs_fullscreen_link', 'on' ) === 'on' ? 'true' : 'false' ),
		'fullscreen_text'   => isset( $attributes['fullscreenText'] ) ? $attributes['fullscreenText'] : get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' ),
		'fullscreen_target' => isset( $attributes['openFullscreen'] ) ? ( $attributes['openFullscreen'] ? 'true' : 'false' ) : ( get_option( 'pdfjs_fullscreen_link_target', '' ) === 'on' ? 'true' : 'false' ),
		'download'          => isset( $attributes['showDownload'] ) ? ( $attributes['showDownload'] ? 'true' : 'false' ) : ( get_option( 'pdfjs_download_button', 'on' ) === 'on' ? 'true' : 'false' ),
		'print'             => isset( $attributes['showPrint'] ) ? ( $attributes['showPrint'] ? 'true' : 'false' ) : ( get_option( 'pdfjs_print_button', 'on' ) === 'on' ? 'true' : 'false' ),
		'openfile'          => 'false',
		'zoom'              => isset( $attributes['viewerScale'] ) ? $attributes['viewerScale'] : $opt_scale,
		'search'            => get_option( 'pdfjs_search_button', 'on' ) === 'on' ? 'true' : 'false',
		'editing'           => get_option( 'pdfjs_editing_buttons', 'on' ) === 'on' ? 'true' : 'false',
	);

	// Use shared rendering function
	return pdfjs_render_viewer( $render_args );
}

/**
 * Gutenberg Block
 * Registers the PDF.js viewer block with proper script and style handling
 */
function pdfjs_register_gutenberg_card_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$base_dir      = plugin_dir_path( __FILE__ ) . '../blocks/build/';
	$script_handle = 'gutenberg-pdfjs';
	$style_handle  = null;
	$editor_style_handle = null;
	$asset_file    = $base_dir . 'index.asset.php';
	$script_file   = $base_dir . 'index.js';
	$style_file    = $base_dir . 'style-index.css';
	$editor_style_file = $base_dir . 'index.css';

	$asset_data = array(
		'dependencies' => array( 'wp-blocks', 'wp-element', 'wp-block-editor' ),
		'version'      => file_exists( $script_file ) ? filemtime( $script_file ) : gmdate( 'U' ),
	);

	if ( file_exists( $asset_file ) ) {
		$asset_data = include $asset_file;
	}

	wp_register_script(
		$script_handle,
		plugins_url( '../blocks/build/index.js', __FILE__ ),
		isset( $asset_data['dependencies'] ) ? $asset_data['dependencies'] : array(),
		isset( $asset_data['version'] ) ? $asset_data['version'] : ( file_exists( $script_file ) ? filemtime( $script_file ) : PDFJS_PLUGIN_VERSION ),
		true
	);

	wp_localize_script( $script_handle, 'pdfjs_options', pdfjs_get_options() );

	if ( file_exists( $style_file ) ) {
		$style_handle = 'gutenberg-pdfjs-style';
		wp_register_style(
			$style_handle,
			plugins_url( '../blocks/build/style-index.css', __FILE__ ),
			array(),
			file_exists( $style_file ) ? filemtime( $style_file ) : PDFJS_PLUGIN_VERSION
		);
	}

	if ( file_exists( $editor_style_file ) ) {
		$editor_style_handle = 'gutenberg-pdfjs-editor-style';
		wp_register_style(
			$editor_style_handle,
			plugins_url( '../blocks/build/index.css', __FILE__ ),
			array(),
			file_exists( $editor_style_file ) ? filemtime( $editor_style_file ) : PDFJS_PLUGIN_VERSION
		);
	}

	$block_args = array(
		'editor_script'    => $script_handle,
		'render_callback'  => 'pdfjs_block_render',
	);

	if ( $editor_style_handle ) {
		$block_args['editor_style'] = $editor_style_handle;
	}

	if ( $style_handle ) {
		$block_args['style'] = $style_handle;
	}

	register_block_type(
		'pdfjsblock/pdfjs-embed',
		$block_args
	);
}

add_action( 'init', 'pdfjs_register_gutenberg_card_block' );
