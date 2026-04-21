<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Normalize an allowed-domain list into lowercase unique hostnames.
 *
 * @param string $allowed_domains Newline-separated hostnames.
 * @return array<int,string>
 */
function pdfjs_get_allowed_domain_list( $allowed_domains ) {
	if ( ! is_string( $allowed_domains ) || '' === trim( $allowed_domains ) ) {
		return array();
	}

	$domains = array_filter( array_map( 'trim', explode( "\n", $allowed_domains ) ) );
	$domains = array_map( 'strtolower', $domains );
	return array_values( array_unique( $domains ) );
}

/**
 * Check whether a hostname is in the allow-list with exact-match semantics.
 *
 * @param string      $hostname        Hostname from parsed URL.
 * @param string|null $allowed_domains Optional raw allowed domains string.
 * @return bool
 */
function pdfjs_is_domain_whitelisted( $hostname, $allowed_domains = null ) {
	if ( ! is_string( $hostname ) || '' === trim( $hostname ) ) {
		return false;
	}

	if ( null === $allowed_domains ) {
		$allowed_domains = get_option( 'pdfjs_allowed_domains', '' );
	}

	$allowed_list = pdfjs_get_allowed_domain_list( $allowed_domains );
	return in_array( strtolower( $hostname ), $allowed_list, true );
}
