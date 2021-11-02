<?php

/**
 * Takes a setting and ensures it's a number if it's a number or sanitizing it
 */
function sanatize_number( $input ) {
	if ( is_numeric( $input ) ) {
		return $input;
	} else {
		return sanitize_text_field( $input );
	}
}

/**
 * Takes a setting and ensures it returns as true or false
 */
function set_true_false( $input ) {
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

	// make a function to do what we want

	$viewer_base_url   = plugin_dir_url( __DIR__ ) . 'pdfjs/web/viewer.php';
	$viewer_height     = sanatize_number( $incoming_from_handler['viewer_height'] );
	$viewer_width      = sanatize_number( $incoming_from_handler['viewer_width'] );
	$fullscreen        = $incoming_from_handler['fullscreen'];
	$fullscreen_text   = esc_html( $incoming_from_handler['fullscreen_text'] );
	$fullscreen_target = set_true_false( $incoming_from_handler['fullscreen_target'] );
	$download          = set_true_false( $incoming_from_handler['download'] );
	$print             = set_true_false( $incoming_from_handler['print'] );
	$openfile          = set_true_false( $incoming_from_handler['openfile'] );
	$zoom              = sanatize_number( $incoming_from_handler['zoom'] );
	$pagemode          = get_option( 'pdfjs_viewer_pagemode', 'none' );
	$searchbutton      = get_option( 'pdfjs_search_button', 'on' );
	$attachment_id     = sanatize_number( $incoming_from_handler['attachment_id'] );
	$file_url          = esc_url( $incoming_from_handler['url'] );

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

	$attachment_info = '';
	if ( $attachment_id ) {
		$attachment_info = '?attachment_id=' . $attachment_id;
	} elseif ( $file_url ) {
		$attachment_info = '?file_url=' . $file_url;
	}

	$final_url = $viewer_base_url . $attachment_info . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&sButton=' . $searchbutton . '#zoom=' . $zoom . '&pagemode=' . $pagemode;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . esc_url( $final_url ) . '" ' . $fullscreen_target . '>' . sanitize_text_field( urldecode( $fullscreen_text ) ) . '</a></div>';
	}
	$iframe_code = '<div><iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . esc_url( $final_url ) . '" title="Embedded PDF" class="pdfjs-iframe"></iframe></div>';

	return $fullscreen_link . $iframe_code;
}
