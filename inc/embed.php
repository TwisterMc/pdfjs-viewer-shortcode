<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Takes a setting and ensures it's a number if it's a number
 */
function pdfjs_sanatize_number( $input ) {
	if ( is_numeric( $input ) ) {
		return $input;
	} else {
		return 0;
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
 * Checks to see if a string ends with another string
 */
function pdfjs_ends_with( $haystack, $needle ) {
	$length = strlen( $needle );
	if( !$length ) {
		return true;
	}
	return substr( $haystack, -$length ) === $needle;
}

/**
 * Validates pixel and % values
 */
function pdfjs_is_percent_or_pixel( $value ) {
	if ( is_numeric( $value ) ) {
		return $value;
	} else if ( pdfjs_ends_with( $value, '%' ) ) {
		$number = str_replace('%', '', $value);
		$validNumber = pdfjs_sanatize_number($number);
		if ($number === $validNumber) {
			return $value;
		} else {
			return '0';
		}
	} else if ( pdfjs_ends_with( $value, 'px' ) ) {
		$number = str_replace('px', '', $value);
		$validNumber = pdfjs_sanatize_number($number);
		if ($number === $validNumber) {
			return $value;
		} else {
			return '0';
		}
	} else {
		return '0';
	}
}

// check to ensure there are no quotes in the zoom setting so people can't sneak bad stuff in
function pdfjs_validate_zoom( $zoom ) {
	if (strpos($zoom, '"') !== FALSE || strpos($zoom, "'") !== FALSE) {
		return 'auto';
	}
	return $zoom;
}

/**
 * Generate the PDF embed code.
 */
function pdfjs_generator( $incoming_from_handler ) {
	$viewer_base_url   = plugin_dir_url( __DIR__ ) . 'pdfjs/web/viewer.php';
	$viewer_height     = pdfjs_is_percent_or_pixel( $incoming_from_handler['viewer_height'] );
	$viewer_width      = pdfjs_is_percent_or_pixel( $incoming_from_handler['viewer_width'] );
	$fullscreen        = pdfjs_set_true_false( $incoming_from_handler['fullscreen'] );
	$fullscreen_text   = sanitize_text_field( $incoming_from_handler['fullscreen_text'] );
	$fullscreen_target = pdfjs_set_true_false( $incoming_from_handler['fullscreen_target'] );
	$download          = pdfjs_set_true_false( $incoming_from_handler['download'] );
	$print             = pdfjs_set_true_false( $incoming_from_handler['print'] );
	$openfile          = pdfjs_set_true_false( $incoming_from_handler['openfile'] );
	$zoom              = pdfjs_validate_zoom( $incoming_from_handler['zoom'] );
	$pagemode          = get_option( 'pdfjs_viewer_pagemode', 'none' );
	$searchbutton      = get_option( 'pdfjs_search_button', 'on' );
	$attachment_id     = pdfjs_sanatize_number( $incoming_from_handler['attachment_id'] );
	$file_url          = sanitize_url( $incoming_from_handler['url'] );
	$pdfjs_custom_page = false; // DISABLED get_option( 'pdfjs_custom_page', '' );

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

	if ( '0' === $viewer_width ) {
		$viewer_width = '100%';
	}

	if ( '0' === $viewer_height ) {
		$viewer_height = '800';
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
	$final_url = $viewer_base_url . $attachment_info . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&sButton=' . $searchbutton . '&pagemode=' . $pagemode . '&_wpnonce=' . $nonce;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		if ( $pdfjs_custom_page ) {
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="?pdfjs_id=' . $attachment_id . '&_wpnonce=' . $nonce . '" ' . $fullscreen_target . '>' .  $fullscreen_text  . '</a></div>';
		} else {
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . esc_url( $final_url ) . '" ' . $fullscreen_target . '>' .  $fullscreen_text  . '</a></div>';
		}
	}
	$iframe_code = '<div><iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . esc_url( $final_url ) . '" title="Embedded PDF" class="pdfjs-iframe"></iframe></div>';

	return $fullscreen_link . $iframe_code;
}
