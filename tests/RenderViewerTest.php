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

    public function test_render_viewer_sets_transients_and_builds_iframe() {
        // Mock WP functions used inside pdfjs_render_viewer
        Functions\when('plugin_dir_url')->alias(function($file){ return 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/'; });
        Functions\when('wp_parse_args')->alias(function($args,$defaults){ 
            if (is_array($args) && is_array($defaults)) {
                return array_merge($defaults, $args);
            }
            return $args;
        });
        Functions\when('sanitize_text_field')->alias(function($s){ return $s; });
        Functions\when('sanitize_url')->alias(function($s){ return $s; });
        Functions\when('esc_url')->alias(function($s){ return $s; });
        Functions\when('esc_attr__')->alias(function($s){ return $s; });
        Functions\when('esc_html')->alias(function($s){ return $s; });
        Functions\when('esc_html__')->alias(function($s){ return $s; });
        Functions\when('get_option')->alias(function($name,$default=null){
            $map = [
                'pdfjs_viewer_pagemode' => 'none',
                'pdfjs_search_button' => 'on',
                'pdfjs_editing_buttons' => 'on',
            ];
            return $map[$name] ?? $default;
        });
        Functions\when('get_site_url')->justReturn('https://example.com');
        Functions\when('wp_create_nonce')->justReturn('nonce123');

        $setCalls = [];
        Functions\when('set_transient')->alias(function($key,$value,$exp) use (&$setCalls){ $setCalls[$key] = [$value,$exp]; return true; });

        $html = pdfjs_render_viewer([
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
        ]);

        // Assert transients set with 1-hour expiry
        $this->assertCount(7, $setCalls);
        foreach ($setCalls as $k => $v) {
            $this->assertEquals(3600, $v[1]);
        }
        // Check returned HTML contains iframe with expected src params
        $this->assertStringContainsString('pdfjs/web/viewer.php', $html);
        $this->assertStringContainsString('attachment_id=123', $html);
        $this->assertStringContainsString('dButton=true', $html);
        $this->assertStringContainsString('pButton=true', $html);
        $this->assertStringContainsString('oButton=false', $html);
        $this->assertStringContainsString('pagemode=none', $html);
    }
}
