<?php
use PHPUnit\Framework\TestCase;
use Brain\Monkey\Functions;

final class GutenbergBlockTest extends TestCase {
    protected function setUp(): void {
        Brain\Monkey\setUp();
    }
    protected function tearDown(): void {
        Brain\Monkey\tearDown();
    }

    public function test_registers_script_and_localizes_options() {
        // Mock options and plugin URLs
        Functions\when('get_option')->alias(function($name,$default=null){
            $map = [
                'pdfjs_download_button' => 'on',
                'pdfjs_print_button' => 'on',
                'pdfjs_fullscreen_link' => 'on',
                'pdfjs_fullscreen_link_text' => 'View Fullscreen',
                'pdfjs_fullscreen_link_target' => '',
                'pdfjs_embed_height' => 800,
                'pdfjs_embed_width' => 0,
                'pdfjs_viewer_scale' => 0,
            ];
            return $map[$name] ?? $default;
        });
        Functions\when('plugins_url')->alias(function($path,$file){ return 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/blocks/build/index.js'; });
        Functions\when('plugin_dir_path')->alias(function($file){ return __DIR__ . '/../'; });
        Functions\when('file_exists')->alias(function($path){ return false; });

        $registered = false;
        Functions\when('wp_register_script')->alias(function(){ return true; });
        $localized = null;
        Functions\when('wp_localize_script')->alias(function($handle,$object_name,$l10n) use (&$localized){ $localized = $l10n; return true; });
        Functions\when('register_block_type')->alias(function(){ return true; });
        Functions\when('function_exists')->alias(function($fn){ return $fn === 'register_block_type'; });

        pdfjs_register_gutenberg_card_block();

        $this->assertIsArray($localized, 'wp_localize_script should receive options array');
        $this->assertArrayHasKey('pdfjs_viewer_url', $localized);
        $this->assertEquals('https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/pdfjs/web/viewer.php', $localized['pdfjs_viewer_url']);
    }

    public function test_block_render_maps_attributes_to_render_args() {
        Functions\when( 'is_admin' )->justReturn( false );
        Functions\when( 'get_option' )->alias( function( $name, $default = null ) {
            $map = array(
                'pdfjs_embed_height' => 800,
                'pdfjs_embed_width' => 0,
                'pdfjs_viewer_scale' => 'auto',
                'pdfjs_fullscreen_link' => 'on',
                'pdfjs_fullscreen_link_text' => 'View Fullscreen',
                'pdfjs_fullscreen_link_target' => '',
                'pdfjs_download_button' => 'on',
                'pdfjs_print_button' => 'on',
                'pdfjs_search_button' => 'on',
                'pdfjs_editing_buttons' => 'on',
            );
            return array_key_exists( $name, $map ) ? $map[ $name ] : $default;
        } );

        $captured = null;
        Functions\when( 'pdfjs_render_viewer' )->alias( function( $args ) use ( &$captured ) {
            $captured = $args;
            return '<iframe class="from-block"></iframe>';
        } );

        $result = pdfjs_block_render(
            array(
                'externalURL' => 'https://cdn.example.com/file.pdf',
                'viewerHeight' => 950,
                'viewerWidth' => 1200,
                'viewerScale' => '125',
                'showFullscreen' => true,
                'fullscreenText' => 'Read Fullscreen',
                'openFullscreen' => true,
                'showDownload' => false,
                'showPrint' => false,
            )
        );

        $this->assertEquals( '<iframe class="from-block"></iframe>', $result );
        $this->assertIsArray( $captured );
        $this->assertEquals( 'https://cdn.example.com/file.pdf', $captured['url'] );
        $this->assertEquals( '', $captured['attachment_id'] );
        $this->assertEquals( '950px', $captured['viewer_height'] );
        $this->assertEquals( '1200px', $captured['viewer_width'] );
        $this->assertEquals( '125', $captured['zoom'] );
        $this->assertEquals( 'false', $captured['download'] );
        $this->assertEquals( 'false', $captured['print'] );
        $this->assertEquals( 'true', $captured['fullscreen_target'] );
    }
}
