<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Shared PDF viewer rendering logic.
 * Used by both shortcode and Gutenberg block.
 *
 * @param array $args {
 *     PDF viewer configuration arguments.
 *
 *     @type string $url               PDF file URL.
 *     @type string $viewer_height     Height of the iframe.
 *     @type string $viewer_width      Width of the iframe.
 *     @type string $fullscreen        Show fullscreen link ('true'/'false').
 *     @type string $fullscreen_text   Text for fullscreen link.
 *     @type string $fullscreen_target Open fullscreen in new tab ('true'/'false').
 *     @type string $download          Show download button ('true'/'false').
 *     @type string $print             Show print button ('true'/'false').
 *     @type string $openfile          Show open file button ('true'/'false').
 *     @type string $zoom              Initial zoom level.
 *     @type string $attachment_id     WordPress attachment ID.
 * }
 * @return string HTML markup for the PDF viewer.
 */
function pdfjs_render_viewer( $args ) {
	$defaults = array(
		'url'               => plugin_dir_url( dirname( __FILE__ ) ) . 'pdf-loading-error.pdf',
		'viewer_height'     => '800px',
		'viewer_width'      => '100%',
		'fullscreen'        => 'true',
		'fullscreen_text'   => 'View Fullscreen',
		'fullscreen_target' => 'false',
		'download'          => 'true',
		'print'             => 'true',
		'openfile'          => 'false',
		'zoom'              => 'auto',
		'attachment_id'     => '',
		'search'            => 'true',
		'editing'           => 'true',
	);

	$args = wp_parse_args( $args, $defaults );
	
	// Sanitize and validate inputs.
	$viewer_base_url   = plugin_dir_url( dirname( __FILE__ ) ) . 'pdfjs/web/viewer.php';
	$viewer_height     = pdfjs_is_percent_or_pixel( $args['viewer_height'] );
	$viewer_width      = pdfjs_is_percent_or_pixel( $args['viewer_width'] );
	$fullscreen        = pdfjs_set_true_false( $args['fullscreen'] );
	$fullscreen_text   = sanitize_text_field( $args['fullscreen_text'] );
	$fullscreen_target = pdfjs_set_true_false( $args['fullscreen_target'] );
	$download          = pdfjs_set_true_false( $args['download'] );
	$print             = pdfjs_set_true_false( $args['print'] );
	$openfile          = pdfjs_set_true_false( $args['openfile'] );
	$zoom              = pdfjs_validate_zoom( $args['zoom'] );
	$pagemode          = sanitize_text_field( get_option( 'pdfjs_viewer_pagemode', 'none' ) );
	$searchbutton      = pdfjs_set_true_false( $args['search'] );
	$editingbuttons    = pdfjs_set_true_false( $args['editing'] );
	
	// Prioritize attachment_id over url for security
	$attachment_id = pdfjs_sanitize_number( $args['attachment_id'] );
	$file_url = '';
	
	if ( ! empty( $attachment_id ) && $attachment_id > 0 ) {
		// Verify attachment exists and is valid
		$attachment = get_post( $attachment_id );
		if ( $attachment && 'attachment' === $attachment->post_type ) {
			// Check if attachment is accessible (scope permission check to this specific post)
			if ( 'private' !== $attachment->post_status || current_user_can( 'read_post', $attachment_id ) ) {
				// Verify the file is actually a PDF
				$mime_type = get_post_mime_type( $attachment_id );
				if ( 'application/pdf' === $mime_type ) {
					$file_url = wp_get_attachment_url( $attachment_id );
				}
			}
		}
	}
	
	// Fallback to URL parameter if attachment_id not available or invalid
	if ( empty( $file_url ) ) {
		$file_url = sanitize_url( $args['url'] );
		
		// Decode URL if encoded, but validate after decoding
		if ( strpos( $file_url, '%' ) !== false ) {
			$decoded_url = urldecode( $file_url );
			// Re-validate after decoding
			if ( filter_var( $decoded_url, FILTER_VALIDATE_URL ) ) {
				$file_url = sanitize_url( $decoded_url );
			}
		}
		
		// Fix double-encoded http://
		if ( strpos( $file_url, 'http://http' ) !== false ) {
			$file_url = str_replace( 'http://http', 'http', $file_url );
		}
		
		$file_url = esc_url( $file_url );
	} else {
		// Already validated from attachment, just escape
		$file_url = esc_url( $file_url );
	}
	
	$pdfjs_custom_page = get_option( 'pdfjs_custom_page', false );

	// Store settings in transients for viewer.php to access (expires in 1 hour).
	set_transient( 'pdfjs_button_download_' . $attachment_id, $download, 3600 );
	set_transient( 'pdfjs_button_print_' . $attachment_id, $print, 3600 );
	set_transient( 'pdfjs_button_openfile_' . $attachment_id, $openfile, 3600 );
	set_transient( 'pdfjs_button_zoom_' . $attachment_id, $zoom, 3600 );
	set_transient( 'pdfjs_button_pagemode_' . $attachment_id, $pagemode, 3600 );
	set_transient( 'pdfjs_button_searchbutton_' . $attachment_id, $searchbutton, 3600 );
	set_transient( 'pdfjs_button_editingbuttons_' . $attachment_id, $editingbuttons, 3600 );

	// Validate PDF URL matches current site domain for security.
	$site_url = get_site_url();
	$parsed_site = parse_url( $site_url );
	$parsed_file = parse_url( $file_url );

	// Build origins including protocol for clearer messaging.
	$site_origin = $site_url;
	if ( ! empty( $parsed_site['host'] ) ) {
		$site_origin = ( ! empty( $parsed_site['scheme'] ) ? $parsed_site['scheme'] . '://' : '' ) . $parsed_site['host'] . ( ! empty( $parsed_site['port'] ) ? ':' . $parsed_site['port'] : '' );
	}

	$file_origin = $file_url;
	if ( ! empty( $parsed_file['host'] ) ) {
		$file_origin = ( ! empty( $parsed_file['scheme'] ) ? $parsed_file['scheme'] . '://' : '' ) . $parsed_file['host'] . ( ! empty( $parsed_file['port'] ) ? ':' . $parsed_file['port'] : '' );
	}
	
	// Check if PDF URL has a different host than the current site.
	if ( ! empty( $parsed_file['host'] ) && $parsed_file['host'] !== $parsed_site['host'] ) {
		$domain_allowed = false;

		// Check if the external domains feature is enabled and the host is whitelisted.
		if ( 'on' === get_option( 'pdfjs_allow_external_domains', '' ) ) {
			$allowed_domains = get_option( 'pdfjs_allowed_domains', '' );
			$allowed_list    = array_filter( array_map( 'trim', explode( "\n", $allowed_domains ) ) );
			// Exact hostname match only — subdomains are not implicitly trusted.
			if ( in_array( strtolower( $parsed_file['host'] ), $allowed_list, true ) ) {
				$domain_allowed = true;
				// Route external URL through proxy to bypass PDF.js cross-origin restrictions
				$proxy_base = plugin_dir_url( dirname( __FILE__ ) ) . 'pdfjs/web/pdf-proxy.php';
				$file_url = add_query_arg( 'url', rawurlencode( $file_url ), $proxy_base );
			}
		}

		if ( ! $domain_allowed ) {
			return '<div class="pdfjs-error" role="alert" aria-live="assertive" style="padding: 20px; border: 2px solid #dc3232; background: #f8d7da; color: #721c24; margin: 20px 0;">' .
				'<p style="margin: 0 0 10px 0;"><strong>' . esc_html__( 'Security Error:', 'pdfjs-viewer-shortcode' ) . '</strong> ' .
				esc_html__( 'PDF files must be hosted on the same domain as this site.', 'pdfjs-viewer-shortcode' ) . '</p>' .
				'<p style="margin: 0; font-size: 0.9em;">' .
				sprintf(
					/* translators: 1: PDF URL host, 2: Current site host */
					esc_html__( 'PDF is hosted on: %1$s but this site is: %2$s', 'pdfjs-viewer-shortcode' ),
					'<code>' . esc_html( $file_origin ) . '</code>',
					'<code>' . esc_html( $site_origin ) . '</code>'
				) .
				'</p>' .
				'</div>';
		}
	}

	// Normalize dimensions.
	if ( '0' === $viewer_width || 0 === $viewer_width ) {
		$viewer_width = '100%';
	}

	if ( '0' === $viewer_height || 0 === $viewer_height ) {
		$viewer_height = '800px';
	}

	// Handle fullscreen target.
	$fullscreen_target_attr = ( 'true' === $fullscreen_target ) ? 'target="_blank"' : '';

	// Build viewer URL with all parameters.
	// Note: add_query_arg() will handle proper URL encoding of all parameters,
	// so we pass the file URL as-is. It's already been escaped via esc_url() above.
	// Using rawurlencode() here causes double-encoding which can break some PDF URLs.

	// Build base query args in a structured way for consistency and performance
	$query_args = array(
		'file'         => $file_url,
		'attachment_id'=> $attachment_id,
		'dButton'      => $download,
		'pButton'      => $print,
		'oButton'      => $openfile,
		'sButton'      => $searchbutton,
		'editButtons'  => $editingbuttons,
		'v'            => PDFJS_PLUGIN_VERSION,
 	);
	// Create unique nonce per PDF using attachment_id to prevent replay attacks
	// If no attachment_id, use file URL hash for uniqueness
	$nonce_action = 'pdfjs_full_screen_' . ( ! empty( $attachment_id ) ? $attachment_id : md5( $file_url ) );
	$query_args['_wpnonce'] = wp_create_nonce( $nonce_action );
	// Note: pagemode and zoom are applied via URL hash, PDF.js reads them from hash
	// Always include both zoom and pagemode to override any stored preferences
	$zoom_hash = 'zoom=' . rawurlencode( $zoom ) . '&pagemode=' . rawurlencode( $pagemode );
	$final_url = add_query_arg( $query_args, $viewer_base_url ) . '#' . $zoom_hash;

	// Build fullscreen link.
	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_aria = esc_attr__( 'Open PDF in fullscreen mode', 'pdfjs-viewer-shortcode' );
		// Custom page only supports attachment_id > 0; URL-only shortcodes use the direct viewer URL.
		if ( $pdfjs_custom_page && ! empty( $attachment_id ) && $attachment_id > 0 ) {
			$fs_nonce_action = 'pdfjs_full_screen_' . $attachment_id;
			$nonce = wp_create_nonce( $fs_nonce_action );
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="?pdfjs_id=' . $attachment_id . '&_wpnonce=' . $nonce . '" ' . $fullscreen_target_attr . ' aria-label="' . $fullscreen_aria . '">' . esc_html( $fullscreen_text ) . '</a></div>';
		} else {
			// Non-custom page fullscreen link uses the same viewer URL which now includes the nonce.
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . esc_url( $final_url ) . '" ' . $fullscreen_target_attr . ' aria-label="' . $fullscreen_aria . '">' . esc_html( $fullscreen_text ) . '</a></div>';
		}
	}

	// Get file name for accessible title
	$file_name = basename( parse_url( $file_url, PHP_URL_PATH ) );
	// Fallback to attachment title if filename extraction fails
	if ( empty( $file_name ) && ! empty( $attachment_id ) ) {
		$file_name = get_the_title( $attachment_id );
	}
	// Final fallback
	if ( empty( $file_name ) ) {
		$file_name = __( 'PDF Document', 'pdfjs-viewer-shortcode' );
	}
	$iframe_title = sprintf(
		/* translators: %s: PDF file name */
		esc_attr__( 'PDF document: %s', 'pdfjs-viewer-shortcode' ),
		esc_attr( $file_name )
	);

	// Build iframe with accessibility attributes.
	$iframe_code = '<a href="#pdfjs-viewer-skip" class="screen-reader-text">' . esc_html__( 'Skip to PDF content', 'pdfjs-viewer-shortcode' ) . '</a><div role="region" aria-label="' . esc_attr__( 'PDF Viewer', 'pdfjs-viewer-shortcode' ) . '" id="pdfjs-viewer-skip"><iframe width="' . esc_attr( $viewer_width ) . '" height="' . esc_attr( $viewer_height ) . '" src="' . esc_url( $final_url ) . '" title="' . $iframe_title . '" aria-label="' . $iframe_title . '" class="pdfjs-iframe" tabindex="0" loading="lazy" style="max-width: 100%;"></iframe></div>';

	return $fullscreen_link . $iframe_code;
}
