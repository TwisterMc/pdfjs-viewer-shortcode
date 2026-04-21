<?php

/**
 * Integration tests for block rendering, whitelist behavior, and custom-page loading.
 */
class BlockAndSecurityIntegrationTest extends WP_UnitTestCase {

	public function setUp(): void {
		parent::setUp();
		delete_option( 'pdfjs_allow_external_domains' );
		delete_option( 'pdfjs_allowed_domains' );
		delete_option( 'pdfjs_custom_page' );
	}

	public function test_gutenberg_block_renders_iframe_with_toggle_flags() {
		do_action( 'init' );

		$attachment_id = self::factory()->attachment->create_object(
			'block-integration.pdf',
			0,
			array(
				'post_mime_type' => 'application/pdf',
				'post_title'     => 'Block Integration PDF',
			)
		);

		$attachment_url = wp_get_attachment_url( $attachment_id );
		$this->assertNotEmpty( $attachment_url );

		$html = render_block(
			array(
				'blockName'    => 'pdfjsblock/pdfjs-embed',
				'attrs'        => array(
					'imgID'          => $attachment_id,
					'imageURL'       => $attachment_url,
					'viewerHeight'   => 900,
					'viewerWidth'    => 640,
					'showDownload'   => false,
					'showPrint'      => true,
					'showFullscreen' => false,
					'viewerScale'    => '125',
				),
				'innerBlocks'  => array(),
				'innerHTML'    => '',
				'innerContent' => array(),
			)
		);

		$this->assertStringContainsString( '<iframe', $html );
		$this->assertStringContainsString( 'pdfjs/web/viewer.php', $html );
		$this->assertStringContainsString( 'attachment_id=' . $attachment_id, $html );
		$this->assertStringContainsString( 'dButton=false', $html );
		$this->assertStringContainsString( 'pButton=true', $html );
		$this->assertStringContainsString( 'zoom=125', $html );
	}

	public function test_whitelisted_external_domain_routes_block_through_proxy() {
		do_action( 'init' );
		update_option( 'pdfjs_allow_external_domains', 'on' );
		update_option( 'pdfjs_allowed_domains', "cdn.example.com\nassets.example.org" );

		$html = render_block(
			array(
				'blockName'    => 'pdfjsblock/pdfjs-embed',
				'attrs'        => array(
					'externalURL'    => 'https://cdn.example.com/manuals/widget.pdf',
					'showDownload'   => true,
					'showPrint'      => false,
					'showFullscreen' => false,
				),
				'innerBlocks'  => array(),
				'innerHTML'    => '',
				'innerContent' => array(),
			)
		);

		$this->assertStringContainsString( '<iframe', $html );
		$this->assertStringContainsString( 'pdfjs/web/pdf-proxy.php', $html );
		$this->assertStringContainsString( 'cdn.example.com', $html );
		$this->assertStringContainsString( 'pButton=false', $html );
	}

	public function test_subdomain_not_whitelisted_by_parent_domain_entry() {
		update_option( 'pdfjs_allow_external_domains', 'on' );
		update_option( 'pdfjs_allowed_domains', 'example.com' );

		$html = do_shortcode( '[pdfjs-viewer url="https://sub.example.com/file.pdf"]' );

		$this->assertStringContainsString( 'Security Error', $html );
		$this->assertStringNotContainsString( '<iframe', $html );
	}

	public function test_custom_page_fullscreen_link_uses_pdfjs_id_for_attachments() {
		update_option( 'pdfjs_custom_page', 'on' );

		$attachment_id = self::factory()->attachment->create_object(
			'fullscreen-custom-page.pdf',
			0,
			array(
				'post_mime_type' => 'application/pdf',
				'post_title'     => 'Fullscreen Custom Page PDF',
			)
		);

		$html = do_shortcode(
			sprintf(
				'[pdfjs-viewer attachment_id="%d" fullscreen="true" fullscreen_text="Open Fullscreen"]',
				$attachment_id
			)
		);

		$this->assertStringContainsString( '<iframe', $html );
		$this->assertStringContainsString( '?pdfjs_id=' . $attachment_id, $html );
		$this->assertStringContainsString( 'Open Fullscreen', $html );
	}

	public function test_normal_fullscreen_link_uses_viewer_url_when_custom_page_disabled() {
		update_option( 'pdfjs_custom_page', '' );

		$attachment_id = self::factory()->attachment->create_object(
			'fullscreen-normal.pdf',
			0,
			array(
				'post_mime_type' => 'application/pdf',
				'post_title'     => 'Fullscreen Normal PDF',
			)
		);

		$html = do_shortcode(
			sprintf(
				'[pdfjs-viewer attachment_id="%d" fullscreen="true" fullscreen_text="Normal Fullscreen"]',
				$attachment_id
			)
		);

		$this->assertStringContainsString( '<iframe', $html );
		$this->assertStringContainsString( 'pdfjs/web/viewer.php', $html );
		$this->assertStringNotContainsString( '?pdfjs_id=', $html );
		$this->assertStringContainsString( 'Normal Fullscreen', $html );
	}
}
