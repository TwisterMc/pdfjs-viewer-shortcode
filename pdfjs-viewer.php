<?php
/**
Plugin Name: PDFjs Viewer
Plugin URI: http://byterevel.com/
Description: Embed PDFs with the gorgeous PDF.js viewer
Version: 1.5.1
Author: <a href="http://byterevel.com/">Ben Lawson</a>, <a href="https://www.twistermc.com/">Thomas McMahon</a>
Contributors: FalconerWeb, twistermc
License: GPLv2
 **/

// ==== Shortcode ====

// tell WordPress to register the pdfjs-viewer shortcode.
add_shortcode( 'pdfjs-viewer', 'pdfjs_handler' );

/**
 * Get the embed info from the shortcode.
 */
function pdfjs_handler( $incoming_from_post ) {
	// set defaults.
	$incoming_from_post = shortcode_atts(
		array(
			'url'             => plugins_url() . '/pdfjs-viewer-shortcode/pdf-loading-error.pdf',
			'viewer_height'   => '800px',
			'viewer_width'    => '100%',
			'fullscreen'      => 'true',
			'fullscreen_text' => 'View Fullscreen',
			'download'        => 'true',
			'print'           => 'true',
			'openfile'        => 'false',
			'zoom'            => 'auto',
		),
		$incoming_from_post
	);

	$pdfjs_output = pdfjs_generator( $incoming_from_post );

	// send back text to replace shortcode in post.
	return $pdfjs_output;
}

/**
 * Generate the PDF embed code.
 */
function pdfjs_generator( $incoming_from_handler ) {

	$plugin_version = '1.5.1';

	$viewer_base_url = plugins_url() . '/pdfjs-viewer-shortcode/pdfjs/web/viewer.php';
	$file_name       = $incoming_from_handler['url'];
	$viewer_height   = $incoming_from_handler['viewer_height'];
	$viewer_width    = $incoming_from_handler['viewer_width'];
	$fullscreen      = $incoming_from_handler['fullscreen'];
	$fullscreen_text = $incoming_from_handler['fullscreen_text'];
	$download        = $incoming_from_handler['download'];
	$print           = $incoming_from_handler['print'];
	$openfile        = $incoming_from_handler['openfile'];
	$zoom            = $incoming_from_handler['zoom'];

	// if the PDF URL is missing the file extension, load error PDF.
	if ( ! strpos( $file_name, '.pdf' ) ) {
		$file_name = plugins_url() . '/pdfjs-viewer-shortcode/pdf-loading-error.pdf';
	}

	// check to see if the current value is in percent.
	if ( false === strpos( $viewer_width, '%' ) ) {
		// check to see if the current value is in pixels.
		if ( false === strpos( $viewer_width, 'px' ) ) {
			// check to see if it's 0.
			if ( '0' === $viewer_width ) {
				$viewer_width = '100%';
			} else {
				// add px extension.
				$viewer_width = $viewer_width . 'px';
			}
		}
	}

	// check to see if the current value is in percent.
	if ( false === strpos( $viewer_height, '%' ) ) {
		// check to see if the current value is in pixels.
		if ( false === strpos( $viewer_height, 'px' ) ) {
			// check to see if it's 0.
			if ( '0' === $viewer_height ) {
				$viewer_height = '800';
			} else {
				// add px extension.
				$viewer_height = $viewer_height . 'px';
			}
		}
	}

	if ( 'true' !== $download ) {
		$download = 'false';
	}

	if ( 'true' !== $print ) {
		$print = 'false';
	}

	if ( 'true' !== $openfile ) {
		$openfile = 'false';
	}

	$final_url = $viewer_base_url . '?file=' . $file_name . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&v=' . $plugin_version . '#zoom=' . $zoom;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . $final_url . '">' . sanitize_text_field( urldecode( $fullscreen_text ) ) . '</a></div>';
	}
	$iframe_code = '<iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . $final_url . '" title="Embedded PDF" class="pdfjs-iframe"></iframe> ';

	return $fullscreen_link . $iframe_code;
}

// ==== Media Button ====

// priority is 12 since default button is 10.
add_action( 'media_buttons', 'pdfjs_media_button', 12 );

/**
 * Include the media button
 */
function pdfjs_media_button() {
	echo '<a href="#" id="insert-pdfjs" class="button">' . __( 'Add PDF', 'pdfjs-viewer-shortcode' ) . '</a>';
}

add_action( 'wp_enqueue_media', 'include_pdfjs_media_button_js_file' );

/**
 * Include the media button JS
 */
function include_pdfjs_media_button_js_file() {
	wp_enqueue_script( 'media_button', plugins_url() . '/pdfjs-viewer-shortcode/pdfjs-media-button.js', array( 'jquery' ), '1.0', true );
}

/**
 * Gutenberg
 */
function my_register_gutenberg_card_block() {

	// Register our block script with WordPress
	wp_register_script(
		'gutenberg-pdfjs',
		plugins_url('/blocks/dist/blocks.build.js', __FILE__),
		array('wp-blocks', 'wp-element', 'wp-editor')
	);

	// Register our block's base CSS
	wp_register_style(
		'gutenberg-pdfjs',
		plugins_url( 'blocks/dist/style.css', __FILE__ ),
		''
	);

	// Enqueue the script in the editor
	register_block_type('blocks/pdfjs-block', array(
		'editor_script' => 'gutenberg-pdfjs',
		'editor_style' => 'gutenberg-pdfjs-edit-style',
		'style' => 'gutenberg-pdfjs'
	));
}

add_action('init', 'my_register_gutenberg_card_block');
