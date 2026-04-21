<?php
/**
 * PDF Proxy Handler
 * Falls back to root WordPress directory to load WordPress for proper security checks.
 * Proxies external PDF requests through this domain to bypass PDF.js cross-origin restrictions
 * by serving the PDF as if it hosted on the same origin.
 *
 * Security:
 * - Validates external domains are whitelisted in plugin settings
 * - Verifies external domain feature is enabled
 * - Sanitizes all URL parameters
 *
 * Caching:
 * - Sets cache headers for 1 hour
 * - Includes plugin version in cache key
 * - Prevents stale PDF delivery on updates
 */

// Try to load WordPress - search up the directory tree
$wp_load_file = null;
$current_dir = __DIR__;

for ( $i = 0; $i < 10; $i++ ) {
	$current_dir = dirname( $current_dir );
	if ( file_exists( $current_dir . '/wp-load.php' ) ) {
		$wp_load_file = $current_dir . '/wp-load.php';
		break;
	}
}

if ( ! $wp_load_file || ! file_exists( $wp_load_file ) ) {
	http_response_code( 500 );
	header( 'Content-Type: text/plain; charset=utf-8' );
	header( 'Cache-Control: no-cache, no-store, must-revalidate' );
	echo 'Unable to load WordPress.';
	exit;
}

require_once $wp_load_file;

// Exit if not a GET request
if ( 'GET' !== $_SERVER['REQUEST_METHOD'] ) {
	http_response_code( 405 );
	header( 'Allow: GET' );
	exit;
}

// Get plugin version for cache busting
$plugin_version = defined( 'PDFJS_PLUGIN_VERSION' ) ? PDFJS_PLUGIN_VERSION : gmdate( 'Ymd' );

// Get the target PDF URL from query parameter
$pdf_url = isset( $_GET['url'] ) ? sanitize_url( $_GET['url'] ) : '';

if ( empty( $pdf_url ) ) {
	http_response_code( 400 );
	header( 'Content-Type: text/plain; charset=utf-8' );
	header( 'Cache-Control: no-cache, no-store, must-revalidate' );
	echo 'Missing URL parameter.';
	exit;
}

// Validate URL format
if ( ! filter_var( $pdf_url, FILTER_VALIDATE_URL ) ) {
	http_response_code( 400 );
	header( 'Content-Type: text/plain; charset=utf-8' );
	header( 'Cache-Control: no-cache, no-store, must-revalidate' );
	echo 'Invalid URL format.';
	exit;
}

// Parse the URL to validate it
$parsed_pdf = parse_url( $pdf_url );
$parsed_site = parse_url( get_site_url() );

// Verify external domain is whitelisted
if ( ! empty( $parsed_pdf['host'] ) && $parsed_pdf['host'] !== $parsed_site['host'] ) {
	// Check if the external domains feature is enabled
	if ( 'on' !== get_option( 'pdfjs_allow_external_domains', '' ) ) {
		http_response_code( 403 );
		header( 'Content-Type: text/plain; charset=utf-8' );
		header( 'Cache-Control: no-cache, no-store, must-revalidate' );
		echo 'External domain loading is not enabled.';
		exit;
	}

	// Check if domain is whitelisted
	$allowed_domains = get_option( 'pdfjs_allowed_domains', '' );
	$allowed_list    = array_filter( array_map( 'trim', explode( "\n", $allowed_domains ) ) );
	
	if ( ! in_array( strtolower( $parsed_pdf['host'] ), $allowed_list, true ) ) {
		http_response_code( 403 );
		header( 'Content-Type: text/plain; charset=utf-8' );
		header( 'Cache-Control: no-cache, no-store, must-revalidate' );
		echo 'Domain not whitelisted.';
		exit;
	}
}

// Fetch the PDF using WordPress HTTP API with timeout
$response = wp_remote_get(
	$pdf_url,
	array(
		'timeout'   => 30,
		'sslverify' => true,
		'user-agent' => 'PDFjs-Viewer-Shortcode/' . $plugin_version,
	)
);

if ( is_wp_error( $response ) ) {
	http_response_code( 502 );
	header( 'Content-Type: text/plain; charset=utf-8' );
	header( 'Cache-Control: no-cache, no-store, must-revalidate' );
	echo 'Failed to fetch PDF: ' . esc_html( $response->get_error_message() );
	exit;
}

$status_code = wp_remote_retrieve_response_code( $response );
if ( 200 !== $status_code ) {
	http_response_code( $status_code );
	header( 'Content-Type: text/plain; charset=utf-8' );
	header( 'Cache-Control: no-cache, no-store, must-revalidate' );
	echo 'PDF server returned status ' . intval( $status_code );
	exit;
}

// Get content and headers
$body = wp_remote_retrieve_body( $response );
$headers = wp_remote_retrieve_headers( $response );

if ( empty( $body ) ) {
	http_response_code( 502 );
	header( 'Content-Type: text/plain; charset=utf-8' );
	header( 'Cache-Control: no-cache, no-store, must-revalidate' );
	echo 'Empty PDF response.';
	exit;
}

// Set secure response headers
header( 'Content-Type: application/pdf' );
header( 'Content-Length: ' . strlen( $body ) );
// Cache for 1 hour, but revalidate if plugin version changes
header( 'Cache-Control: public, max-age=3600, must-revalidate' );
header( 'X-Content-Type-Options: nosniff' );
header( 'X-Frame-Options: DENY' );
header( 'Content-Security-Policy: default-src \'none\'' );
// Allow viewer's origin to access this resource
header( 'Access-Control-Allow-Origin: ' . esc_url_raw( get_site_url() ) );

// Include version in Etag for cache busting on plugin updates
$etag = '"' . md5( $plugin_version . $pdf_url ) . '"';
header( 'ETag: ' . $etag );

// Pass through Content-Disposition if present
if ( isset( $headers['content-disposition'] ) ) {
	header( 'Content-Disposition: ' . sanitize_text_field( $headers['content-disposition'] ) );
} else {
	// Default: inline display
	header( 'Content-Disposition: inline; filename="document.pdf"' );
}

// Output the PDF
echo $body; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
