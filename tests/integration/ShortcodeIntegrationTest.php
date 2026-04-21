<?php

/**
 * Integration tests for shortcode rendering in a real WordPress test environment.
 */
class ShortcodeIntegrationTest extends WP_UnitTestCase {

	public function test_shortcode_renders_iframe_for_pdf_attachment() {
		$attachment_id = self::factory()->attachment->create_object(
			'test-integration.pdf',
			0,
			array(
				'post_mime_type' => 'application/pdf',
				'post_title'     => 'Integration PDF',
			)
		);

		$this->assertNotEmpty( $attachment_id );

		$html = do_shortcode(
			sprintf(
				'[pdfjs-viewer attachment_id="%d" download="false" print="true" fullscreen="false" search="false" editing="false"]',
				$attachment_id
			)
		);

		$this->assertStringContainsString( '<iframe', $html );
		$this->assertStringContainsString( 'pdfjs/web/viewer.php', $html );
		$this->assertStringContainsString( 'attachment_id=' . $attachment_id, $html );
		$this->assertStringContainsString( 'dButton=false', $html );
		$this->assertStringContainsString( 'pButton=true', $html );
		$this->assertStringContainsString( 'sButton=false', $html );
		$this->assertStringContainsString( 'editButtons=false', $html );
	}

	public function test_shortcode_blocks_non_whitelisted_external_domain() {
		update_option( 'pdfjs_allow_external_domains', 'off' );
		update_option( 'pdfjs_allowed_domains', '' );

		$html = do_shortcode( '[pdfjs-viewer url="https://untrusted.example.com/file.pdf"]' );

		$this->assertStringContainsString( 'Security Error', $html );
		$this->assertStringNotContainsString( '<iframe', $html );
	}
}
