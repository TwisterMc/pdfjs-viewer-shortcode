<?php
/**
 * Generate the PDF embed code.
 */
function pdfjs_generator( $incoming_from_handler ) {

	$viewer_base_url   = plugins_url() . '/pdfjs-viewer-shortcode/pdfjs/web/viewer.php';
	$viewer_height     = $incoming_from_handler['viewer_height'];
	$viewer_width      = $incoming_from_handler['viewer_width'];
	$fullscreen        = $incoming_from_handler['fullscreen'];
	$fullscreen_text   = $incoming_from_handler['fullscreen_text'];
	$fullscreen_target = $incoming_from_handler['fullscreen_target'];
	$download          = $incoming_from_handler['download'];
	$print             = $incoming_from_handler['print'];
	$openfile          = $incoming_from_handler['openfile'];
	$zoom              = $incoming_from_handler['zoom'];
	$pagemode          = get_option( 'pdfjs_viewer_pagemode', 'none' );
	$searchbutton      = get_option( 'pdfjs_search_button', 'on' );
	$search_term       = $incoming_from_handler['search_term'];
	$attachment_id     = $incoming_from_handler['attachment_id'];
	$file_url          = $incoming_from_handler['url'];

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

	if ( 'on' === $searchbutton ) {
		$searchbutton = 'true';
	}

	if ( 'true' === $fullscreen_target ) {
		$fullscreen_target = 'target="_blank"';
	} else {
		$fullscreen_target = '';
	}

	if ( isset( $search_term ) && '' !== $search_term ) {
		$search_term = htmlspecialchars($search_term, ENT_QUOTES);
		$searchTerm  = '&search=' . $search_term;
	} else {
		$searchTerm = '';
	}

	$attachment_info = '';
	if ( $attachment_id ) {
		$attachment_info = '?attachment_id=' . $attachment_id;
	} elseif ( $file_url ) {
		$attachment_info = '?file_url=' . $file_url;
	}

	$final_url = $viewer_base_url . $attachment_info . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&sButton=' . $searchbutton . '#zoom=' . $zoom . '&pagemode=' . $pagemode . $searchTerm;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . $final_url . '" ' . $fullscreen_target . '>' . sanitize_text_field( urldecode( $fullscreen_text ) ) . '</a></div>';
	}
	$iframe_code = '<div><iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . $final_url . '" title="Embedded PDF" class="pdfjs-iframe"></iframe></div>';

	return $fullscreen_link . $iframe_code;
}
