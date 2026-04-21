<?php
use PHPUnit\Framework\TestCase;
use Brain\Monkey\Functions;

final class RenderViewerTest extends TestCase {
    protected function setUp(): void {
        Brain\Monkey\setUp();
    }
    protected function tearDown(): void {
        Brain\Monkey\tearDown();
    }

    private function mockCommonFunctions( $getOptionMap = array() ) {
        Functions\when( 'plugin_dir_url' )->justReturn( 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/' );
        Functions\when( 'wp_parse_args' )->alias( function( $args, $defaults ) {
            return array_merge( $defaults, (array) $args );
        } );
        Functions\when( 'sanitize_text_field' )->alias( function( $value ) { return is_string( $value ) ? $value : ''; } );
        Functions\when( 'sanitize_url' )->alias( function( $value ) { return is_string( $value ) ? $value : ''; } );
        Functions\when( 'esc_url' )->alias( function( $value ) { return is_string( $value ) ? $value : ''; } );
        Functions\when( 'esc_attr__' )->alias( function( $value ) { return $value; } );
        Functions\when( 'esc_html' )->alias( function( $value ) { return is_string( $value ) ? $value : ''; } );
        Functions\when( 'esc_html__' )->alias( function( $value ) { return $value; } );
        Functions\when( 'esc_attr' )->alias( function( $value ) { return is_string( $value ) ? $value : ''; } );
        Functions\when( 'get_site_url' )->justReturn( 'https://example.com' );
        Functions\when( 'wp_create_nonce' )->justReturn( 'nonce123' );
        Functions\when( 'get_post' )->justReturn( null );
        Functions\when( 'get_the_title' )->justReturn( 'Test PDF' );

        Functions\when( 'get_option' )->alias( function( $name, $default = null ) use ( $getOptionMap ) {
            $defaults = array(
                'pdfjs_viewer_pagemode' => 'none',
                'pdfjs_search_button' => 'on',
                'pdfjs_editing_buttons' => 'on',
                'pdfjs_allow_external_domains' => '',
                'pdfjs_custom_page' => false,
                'pdfjs_allowed_domains' => '',
            );
            $merged = array_merge( $defaults, $getOptionMap );
            return array_key_exists( $name, $merged ) ? $merged[ $name ] : $default;
        } );
    }

    public function test_render_viewer_sets_transients_and_builds_iframe() {
        $this->mockCommonFunctions();

        $setCalls = array();
        Functions\when( 'set_transient' )->alias( function( $key, $value, $exp ) use ( &$setCalls ) {
            $setCalls[ $key ] = array( $value, $exp );
            return true;
        } );

        $html = pdfjs_render_viewer(
            array(
                'url' => 'https://example.com/wp-content/uploads/file.pdf',
                'viewer_height' => '800px',
                'viewer_width' => '100%',
                'fullscreen' => 'true',
                'fullscreen_text' => 'View Fullscreen',
                'fullscreen_target' => 'false',
                'download' => 'true',
                'print' => 'true',
                'openfile' => 'false',
                'zoom' => 'auto',
                'attachment_id' => '123',
            )
        );

        $this->assertCount( 7, $setCalls );
        foreach ( $setCalls as $call ) {
            $this->assertEquals( 3600, $call[1] );
        }

        $this->assertStringContainsString( 'pdfjs/web/viewer.php', $html );
        $this->assertStringContainsString( 'attachment_id=123', $html );
        $this->assertStringContainsString( 'dButton=true', $html );
        $this->assertStringContainsString( 'pButton=true', $html );
        $this->assertStringContainsString( 'oButton=false', $html );
        $this->assertStringContainsString( 'zoom=auto&pagemode=none', $html );
    }

    public function test_render_viewer_rejects_non_whitelisted_external_domain() {
        $this->mockCommonFunctions(
            array(
                'pdfjs_allow_external_domains' => 'on',
                'pdfjs_allowed_domains' => "cdn.allowed.com\nmedia.allowed.com",
            )
        );
        Functions\when( 'set_transient' )->justReturn( true );

        $html = pdfjs_render_viewer(
            array(
                'url' => 'https://evil.example.com/file.pdf',
                'attachment_id' => '',
            )
        );

        $this->assertStringContainsString( 'Security Error', $html );
        $this->assertStringNotContainsString( '<iframe', $html );
    }

    public function test_render_viewer_routes_whitelisted_external_domain_through_proxy() {
        $this->mockCommonFunctions(
            array(
                'pdfjs_allow_external_domains' => 'on',
                'pdfjs_allowed_domains' => "cdn.allowed.com\nmedia.allowed.com",
            )
        );
        Functions\when( 'set_transient' )->justReturn( true );

        $html = pdfjs_render_viewer(
            array(
                'url' => 'https://cdn.allowed.com/docs/file.pdf',
                'attachment_id' => '',
            )
        );

        $this->assertStringContainsString( 'pdfjs/web/pdf-proxy.php', $html );
        $this->assertStringContainsString( 'url=https%253A%252F%252Fcdn.allowed.com%252Fdocs%252Ffile.pdf', $html );
        $this->assertStringContainsString( '<iframe', $html );
    }
}
