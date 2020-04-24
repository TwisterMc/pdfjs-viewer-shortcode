<?php
/**
Plugin Name: PDFjs Viewer
Plugin URI: http://byterevel.com/
Description: Embed PDFs with the gorgeous PDF.js viewer
Version: 1.4.6
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
			'url'           => plugins_url() . '/pdfjs-viewer-shortcode/pdf-loading-error.pdf',
			'viewer_height' => '1360px',
			'viewer_width'  => '100%',
			'fullscreen'    => 'true',
			'download'      => 'true',
			'print'         => 'true',
			'openfile'      => 'false',
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

	$plugin_version = '1.4.6';

	$viewer_base_url = plugins_url() . '/pdfjs-viewer-shortcode/pdfjs/web/viewer.php';
	$file_name       = $incoming_from_handler['url'];
	$viewer_height   = $incoming_from_handler['viewer_height'];
	$viewer_width    = $incoming_from_handler['viewer_width'];
	$fullscreen      = $incoming_from_handler['fullscreen'];
	$download        = $incoming_from_handler['download'];
	$print           = $incoming_from_handler['print'];
	$openfile        = $incoming_from_handler['openfile'];

	if ( 'true' !== $download ) {
		$download = 'false';
	}

	if ( 'true' !== $print ) {
		$print = 'false';
	}

	if ( 'true' !== $openfile ) {
		$openfile = 'false';
	}

	$final_url = $viewer_base_url . '?file=' . $file_name . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&v=' . $plugin_version;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_link = '<a href="' . $final_url . '">View Fullscreen</a><br>';
	}
	$iframe_code = '<iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . $final_url . '" title="Embedded PDF"></iframe> ';

	return $fullscreen_link . $iframe_code;
}

// ==== Media Button ====

// priority is 12 since default button is 10.
add_action( 'media_buttons', 'pdfjs_media_button', 12 );

/**
 * Include the media button
 */
function pdfjs_media_button() {
	echo '<a href="#" id="insert-pdfjs" class="button">Add PDF</a>';
}

add_action( 'wp_enqueue_media', 'include_pdfjs_media_button_js_file' );

/**
 * Include the media button JS
 */
function include_pdfjs_media_button_js_file() {
	wp_enqueue_script( 'media_button', plugins_url() . '/pdfjs-viewer-shortcode/pdfjs-media-button.js', array( 'jquery' ), '1.0', true );
}
