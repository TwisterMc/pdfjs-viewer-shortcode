<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

add_action( 'init', function() {
	if ( isset( $_GET['pdfjs_id'] ) ) {
		if ( ! isset( $_REQUEST['_wpnonce'] ) ) {
			wp_die( esc_html__( 'Security Check Failed', 'pdfjs-viewer-shortcode' ) );
		}

		$nonce         = sanitize_text_field( wp_unslash( $_REQUEST['_wpnonce'] ) );
		$attachment_id = absint( wp_unslash( $_GET['pdfjs_id'] ) );

		// Nonce action must match render-viewer.php: unique per attachment or URL hash
		// When pdfjs_id=0, the nonce suffix is md5 of the URL — but we don't have the URL
		// here, so the URL-only path is not supported by the custom-page handler.
		if ( 0 === $attachment_id ) {
			wp_die( esc_html__( 'Security Check Failed', 'pdfjs-viewer-shortcode' ) );
		}
		$nonce_action = 'pdfjs_full_screen_' . $attachment_id;
		if ( '' === $nonce || ! wp_verify_nonce( $nonce, $nonce_action ) ) {
			wp_die( esc_html__( 'Security Check Failed', 'pdfjs-viewer-shortcode' ) );
		}

		if ( 0 !== $attachment_id ) {
			// Verify attachment exists and is valid
			$attachment = get_post( $attachment_id );
			if ( ! $attachment || 'attachment' !== $attachment->post_type ) {
				wp_die( esc_html__( 'Invalid attachment.', 'pdfjs-viewer-shortcode' ) );
			}

			// Check if attachment is accessible (not private unless user has permission for this specific post)
			if ( 'private' === $attachment->post_status && ! current_user_can( 'read_post', $attachment_id ) ) {
				wp_die( esc_html__( 'You do not have permission to view this attachment.', 'pdfjs-viewer-shortcode' ) );
			}
			
			// Verify the file is actually a PDF
			$mime_type = get_post_mime_type( $attachment_id );
			if ( 'application/pdf' !== $mime_type ) {
				wp_die( esc_html__( 'This attachment is not a PDF file.', 'pdfjs-viewer-shortcode' ) );
			}
			
			$pdfjs_url = wp_get_attachment_url( $attachment_id );
		} else {
			$pdfjs_url = plugin_dir_url( __FILE__ ) . '../pdf-loading-error.pdf';
		}

		if ( ! $pdfjs_url ) {
			$pdfjs_url = plugin_dir_url( __FILE__ ) . '../pdf-loading-error.pdf';
		}

		// Read transients set by render-viewer.php so we can pass button state to the viewer.
		$download  = get_transient( 'pdfjs_button_download_' . $attachment_id );
		$print_btn = get_transient( 'pdfjs_button_print_' . $attachment_id );
		$openfile  = get_transient( 'pdfjs_button_openfile_' . $attachment_id );
		$zoom      = get_transient( 'pdfjs_button_zoom_' . $attachment_id );
		$pagemode  = get_transient( 'pdfjs_button_pagemode_' . $attachment_id );
		$searchbtn = get_transient( 'pdfjs_button_searchbutton_' . $attachment_id );
		$editbtns  = get_transient( 'pdfjs_button_editingbuttons_' . $attachment_id );

		delete_transient( 'pdfjs_button_download_' . $attachment_id );
		delete_transient( 'pdfjs_button_print_' . $attachment_id );
		delete_transient( 'pdfjs_button_openfile_' . $attachment_id );
		delete_transient( 'pdfjs_button_zoom_' . $attachment_id );
		delete_transient( 'pdfjs_button_pagemode_' . $attachment_id );
		delete_transient( 'pdfjs_button_searchbutton_' . $attachment_id );
		delete_transient( 'pdfjs_button_editingbuttons_' . $attachment_id );

		// Serve the viewer directly — no redirect, URL stays as /?pdfjs_id=123&_wpnonce=…
		// The file URL and button params are never exposed in the browser address bar.
		//
		// Two things to fix when serving viewer.html from a WordPress URL:
		// 1. Asset paths in viewer.html are relative (../build/pdf.js etc) — fix with <base> tag.
		// 2. viewer.js reads window.location.search for file= and button params — inject them
		//    via a script that wraps URLSearchParams so viewer.js gets them transparently.

		$pdfjs_web_url = plugin_dir_url( __FILE__ ) . '../pdfjs/web/';

		$viewer_params_json = wp_json_encode( array(
			'file'        => $pdfjs_url,
			'dButton'     => false !== $download  ? $download  : 'true',
			'pButton'     => false !== $print_btn ? $print_btn : 'true',
			'oButton'     => false !== $openfile  ? $openfile  : 'false',
			'sButton'     => false !== $searchbtn ? $searchbtn : 'true',
			'editButtons' => false !== $editbtns  ? $editbtns  : 'true',
		) );
		$zoom_val     = false !== $zoom     ? $zoom     : 'auto';
		$pagemode_val = false !== $pagemode ? $pagemode : 'none';
		$hash_json    = wp_json_encode( 'zoom=' . rawurlencode( $zoom_val ) . '&pagemode=' . rawurlencode( $pagemode_val ) );

		// Set $_GET['v'] so viewer.php applies the correct cache-busting version.
		$_GET['v'] = defined( 'PDFJS_PLUGIN_VERSION' ) ? PDFJS_PLUGIN_VERSION : '1.0';

		// This script runs synchronously before any ES modules. It wraps the native
		// URLSearchParams constructor so that whenever viewer.js calls
		// new URLSearchParams(document.location.search.substring(1)), our extra params
		// are silently added — without changing the browser URL.
		$patch_script = <<<HTML
<script>
(function () {
	var extra = {$viewer_params_json};
	var pageSearch = window.location.search.substring(1);
	var NativeUSP = window.URLSearchParams;
	function PatchedUSP(init) {
		var inst = new NativeUSP(init);
		if (init === pageSearch || init === window.location.search) {
			for (var k in extra) {
				if (!inst.has(k)) { inst.set(k, extra[k]); }
			}
		}
		return inst;
	}
	PatchedUSP.prototype = NativeUSP.prototype;
	window.URLSearchParams = PatchedUSP;
	if (!window.location.hash) {
		history.replaceState(null, '', window.location.pathname + window.location.search + '#' + {$hash_json});
	}
})();
</script>
HTML;

		ob_start();
		include plugin_dir_path( __FILE__ ) . '../pdfjs/web/viewer.php';
		$html = ob_get_clean();

		// Inject <base> (fixes relative asset paths) and the param patch right after <head>.
		echo str_replace(
			'<head>',
			'<head><base href="' . esc_url( $pdfjs_web_url ) . '">' . $patch_script,
			$html
		);
		die();
	}
});
