<?php
/**
 * Generate the PDF embed code.
 */
function pdfjs_generator( $incoming_from_handler ) {

	$viewer_base_url   = plugins_url() . '/pdfjs-viewer-shortcode/pdfjs/web/viewer.php';
	$file_name         = $incoming_from_handler['url'];
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

	if ( 'on' === $searchbutton ) {
		$searchbutton = 'true';
	}

	if ( 'true' === $fullscreen_target ) {
		$fullscreen_target = 'target="_blank"';
	} else {
		$fullscreen_target = '';
	}

	if ( isset( $search_term) && $search_term !== '' ) {
		$searchTerm = '&search=' . $search_term;
	} else {
		$searchTerm = '';
	}

	// Find the domain name and remove it from the URL to make Edge happy.

	// Check to see if a custom site domain is set elsewhere.
	$site_url = apply_filters( 'pdfjs_set_custom_domain', '' );

	if ( ! $site_url ) {
		// Get the URL protocol.
		$is_secure = false;
		if ( isset( $_SERVER['HTTPS'] ) && 'on' === $_SERVER['HTTPS'] ) {
			$is_secure = true;
		} elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && 'https' === $_SERVER['HTTP_X_FORWARDED_PROTO'] || ! empty( $_SERVER['HTTP_X_FORWARDED_SSL'] ) && 'on' === $_SERVER['HTTP_X_FORWARDED_SSL'] ) {
			$is_secure = true;
		}
		// Put it with the slashes.
		$request_protocol = $is_secure ? 'https://' : 'http://';
		// Replace it in the URL.
		$site_url  = $request_protocol . $_SERVER['HTTP_HOST'];
	}

	$file_name = str_replace( $site_url, '', urldecode($file_name) );

	// Any additional changes needed?
	$file_name = apply_filters( 'pdfjs_set_custom_edits', $file_name );

	$final_url = $viewer_base_url . '?file=' . $file_name . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile. '&sButton=' . $searchbutton . '#zoom=' . $zoom . '&pagemode=' . $pagemode . $searchTerm;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . $final_url . '" ' . $fullscreen_target . '>' . sanitize_text_field( urldecode( $fullscreen_text ) ) . '</a></div>';
	}
	$iframe_code = '<div><iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . $final_url . '" title="Embedded PDF" class="pdfjs-iframe"></iframe></div>';

	return $fullscreen_link . $iframe_code;
}
