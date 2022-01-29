<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Takes a setting and ensures it's a number if it's a number or sanitizing it
 */
function pdfjs_sanatize_number( $input ) {
	if ( is_numeric( $input ) ) {
		return $input;
	} else {
		return sanitize_text_field( $input );
	}
}

/**
 * Takes a setting and ensures it returns as true or false
 */
function pdfjs_set_true_false( $input ) {
	if ( 'true' !== $input ) {
		return 'false';
	} else {
		return 'true';
	}
}

/**
 * Generate the PDF embed code.
 */
function pdfjs_generator( $incoming_from_handler ) {
	$viewer_base_url   = plugin_dir_url( __DIR__ ) . 'pdfjs/web/viewer.php';
	$viewer_height     = pdfjs_sanatize_number( $incoming_from_handler['viewer_height'] );
	$viewer_width      = pdfjs_sanatize_number( $incoming_from_handler['viewer_width'] );
	$fullscreen        = $incoming_from_handler['fullscreen'];
	$fullscreen_text   = esc_html( $incoming_from_handler['fullscreen_text'] );
	$fullscreen_target = pdfjs_set_true_false( $incoming_from_handler['fullscreen_target'] );
	$download          = pdfjs_set_true_false( $incoming_from_handler['download'] );
	$print             = pdfjs_set_true_false( $incoming_from_handler['print'] );
	$openfile          = pdfjs_set_true_false( $incoming_from_handler['openfile'] );
	$zoom              = pdfjs_sanatize_number( $incoming_from_handler['zoom'] );
	$pagemode          = get_option( 'pdfjs_viewer_pagemode', 'none' );
	$searchbutton      = get_option( 'pdfjs_search_button', 'on' );
	$attachment_id     = pdfjs_sanatize_number( $incoming_from_handler['attachment_id'] );
	$file_url          = esc_url( $incoming_from_handler['url'] );
	$pdfjs_custom_page = get_option( 'pdfjs_custom_page', '' );

	set_transient( 'pdfjs_button_download_' . $attachment_id, $download );
	set_transient( 'pdfjs_button_print_' . $attachment_id, $print );
	set_transient( 'pdfjs_button_openfile_' . $attachment_id, $openfile );
	set_transient( 'pdfjs_button_zoom_' . $attachment_id, $zoom );
	set_transient( 'pdfjs_button_pagemode_' . $attachment_id, $pagemode );
	set_transient( 'pdfjs_button_searchbutton_' . $attachment_id, $searchbutton );

	// checks to see if the $file_url is encoded, if so, decode it.
	if ( strpos( $file_url, '%2F' ) ) {
		$file_url = urldecode( $file_url );
		// for some reason encoded urls contain an extra http:// so lets remove it.
		$file_url = str_replace( 'http://http', 'http', $file_url );
		// escape it again just in case.
		$file_url = esc_url( $file_url );
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

	if ( 'on' === $searchbutton ) {
		$searchbutton = 'true';
	} else {
		$searchbutton = 'false';
	}

	if ( 'true' === $fullscreen_target ) {
		$fullscreen_target = 'target="_blank"';
	} else {
		$fullscreen_target = '';
	}

	$attachment_info = '?file=' . $file_url . '&attachment_id=' . $attachment_id;

	$nonce     = wp_create_nonce( 'pdfjs_full_screen' );
	$final_url = $viewer_base_url . $attachment_info . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&sButton=' . $searchbutton . '#zoom=' . $zoom . '&pagemode=' . $pagemode . '&_wpnonce=' . $nonce;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		if ( $pdfjs_custom_page ) {
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="?pdfjs_id=' . $attachment_id . '&_wpnonce=' . $nonce . '#zoom=' . $zoom . '" ' . $fullscreen_target . '>' . sanitize_text_field( $fullscreen_text ) . '</a></div>';
		} else {
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . esc_url( $final_url ) . '" ' . $fullscreen_target . '>' . sanitize_text_field( $fullscreen_text ) . '</a></div>';
		}
	}
	$iframe_code = '<div><iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . esc_url( $final_url ) . '" title="Embedded PDF" class="pdfjs-iframe"></iframe></div>';

	return $fullscreen_link . $iframe_code;
}
