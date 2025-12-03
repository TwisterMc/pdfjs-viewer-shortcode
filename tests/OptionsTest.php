<?php
use PHPUnit\Framework\TestCase;
use Brain\Monkey\Functions;

final class OptionsTest extends TestCase {
    protected function setUp(): void {
        Brain\Monkey\setUp();
    }
    protected function tearDown(): void {
        Brain\Monkey\tearDown();
    }

    public function test_get_options_caches_values() {
        $calls = 0;
        Functions\when('get_option')->alias(function($name, $default = null) use (&$calls) {
            $calls++;
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
        Functions\when('plugin_dir_url')->justReturn('https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/');
        $opts1 = pdfjs_get_options();
        $opts2 = pdfjs_get_options();

        $this->assertSame($opts1, $opts2, 'Options should be cached and identical on second call');
        $this->assertEquals('https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/pdfjs/web/viewer.php', $opts1['pdfjs_viewer_url']);
        $this->assertLessThanOrEqual(8, $calls, 'get_option should not be called again after caching');
    }
}
