<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Cleanup transients when attachment is deleted.
 *
 * @param int $post_id The attachment ID being deleted.
 */
function pdfjs_cleanup_attachment_transients( $post_id ) {
	if ( 'attachment' === get_post_type( $post_id ) ) {
		delete_transient( 'pdfjs_button_download_' . $post_id );
		delete_transient( 'pdfjs_button_print_' . $post_id );
		delete_transient( 'pdfjs_button_openfile_' . $post_id );
		delete_transient( 'pdfjs_button_zoom_' . $post_id );
		delete_transient( 'pdfjs_button_pagemode_' . $post_id );
		delete_transient( 'pdfjs_button_searchbutton_' . $post_id );
		delete_transient( 'pdfjs_button_editingbuttons_' . $post_id );
	}
}
add_action( 'before_delete_post', 'pdfjs_cleanup_attachment_transients' );

/**
 * Cleanup all plugin transients on deactivation.
 */
function pdfjs_cleanup_on_deactivation() {
	global $wpdb;
	
	// Delete all transients with pdfjs_button_ prefix.
	$wpdb->query(
		$wpdb->prepare(
			"DELETE FROM {$wpdb->options} WHERE option_name LIKE %s OR option_name LIKE %s",
			$wpdb->esc_like( '_transient_pdfjs_button_' ) . '%',
			$wpdb->esc_like( '_transient_timeout_pdfjs_button_' ) . '%'
		)
	);
}
register_deactivation_hook( dirname( __DIR__ ) . '/pdfjs-viewer.php', 'pdfjs_cleanup_on_deactivation' );
