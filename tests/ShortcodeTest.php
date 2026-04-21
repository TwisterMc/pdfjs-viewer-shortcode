<?php
use PHPUnit\Framework\TestCase;
use Brain\Monkey\Functions;

final class ShortcodeTest extends TestCase {
    protected function setUp(): void {
        Brain\Monkey\setUp();
    }
    protected function tearDown(): void {
        Brain\Monkey\tearDown();
    }

    public function test_pdfjs_handler_calls_render_viewer() {
        Functions\when( 'is_admin' )->justReturn( false );
        Functions\when( 'get_option' )->alias( function( $name, $default = null ) {
            $map = array(
                'pdfjs_viewer_scale' => 'auto',
                'pdfjs_embed_height' => 800,
                'pdfjs_embed_width' => 0,
                'pdfjs_fullscreen_link' => 'on',
                'pdfjs_fullscreen_link_text' => 'View Fullscreen',
                'pdfjs_fullscreen_link_target' => '',
                'pdfjs_download_button' => 'on',
                'pdfjs_print_button' => 'on',
                'pdfjs_search_button' => 'on',
                'pdfjs_editing_buttons' => 'on',
                'pdfjs_viewer_pagemode' => 'none',
                'pdfjs_custom_page' => false,
            );
            return array_key_exists( $name, $map ) ? $map[ $name ] : $default;
        } );

        Functions\when( 'plugin_dir_url' )->justReturn( 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/' );
        Functions\when( 'wp_parse_args' )->alias( function( $args, $defaults ) { return array_merge( $defaults, (array) $args ); } );
        Functions\when( 'sanitize_text_field' )->alias( function( $s ) { return $s; } );
        Functions\when( 'sanitize_url' )->alias( function( $s ) { return $s; } );
        Functions\when( 'esc_url' )->alias( function( $s ) { return $s; } );
        Functions\when( 'esc_attr__' )->alias( function( $s ) { return $s; } );
        Functions\when( 'esc_attr' )->alias( function( $s ) { return $s; } );
        Functions\when( 'esc_html' )->alias( function( $s ) { return $s; } );
        Functions\when( 'esc_html__' )->alias( function( $s ) { return $s; } );
        Functions\when( 'get_site_url' )->justReturn( 'https://example.com' );
        Functions\when( 'wp_create_nonce' )->justReturn( 'nonce123' );
        Functions\when( 'set_transient' )->justReturn( true );
        Functions\when( 'get_post' )->justReturn( null );
        Functions\when( 'get_the_title' )->justReturn( 'Test PDF' );

        $html = pdfjs_handler( array( 'url' => 'https://example.com/file.pdf' ) );

        $this->assertStringContainsString( '<iframe', $html );
        $this->assertStringContainsString( 'pdfjs/web/viewer.php', $html );
        $this->assertStringContainsString( 'dButton=true', $html );
        $this->assertStringContainsString( 'pButton=true', $html );
        $this->assertStringContainsString( 'sButton=true', $html );
    }

    public function test_pdfjs_handler_uses_option_defaults_for_dimensions() {
        Functions\when( 'is_admin' )->justReturn( false );
        Functions\when( 'pdfjs_render_viewer' )->alias( function( $args ) {
            return json_encode( $args );
        } );
        Functions\when( 'get_option' )->alias( function( $name, $default = null ) {
            $map = array(
                'pdfjs_viewer_scale' => 'page-fit',
                'pdfjs_embed_height' => 900,
                'pdfjs_embed_width' => 640,
                'pdfjs_fullscreen_link' => 'on',
                'pdfjs_fullscreen_link_text' => 'Open Fullscreen',
                'pdfjs_fullscreen_link_target' => 'on',
                'pdfjs_download_button' => 'off',
                'pdfjs_print_button' => 'on',
                'pdfjs_search_button' => 'off',
                'pdfjs_editing_buttons' => 'off',
            );
            return array_key_exists( $name, $map ) ? $map[ $name ] : $default;
        } );
        Functions\when( 'plugin_dir_url' )->justReturn( 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/' );

        $argsJson = pdfjs_handler( array( 'url' => 'https://example.com/hello.pdf' ) );
        $args = json_decode( $argsJson, true );

        $this->assertEquals( '900px', $args['viewer_height'] );
        $this->assertEquals( '640px', $args['viewer_width'] );
        $this->assertEquals( 'page-fit', $args['zoom'] );
        $this->assertEquals( 'false', $args['download'] );
        $this->assertEquals( 'false', $args['search'] );
        $this->assertEquals( 'false', $args['editing'] );
    }
}
