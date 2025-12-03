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
        // Ensure admin flags are off
        Functions\when('is_admin')->justReturn(false);
        
        // Mock WordPress functions needed by pdfjs_render_viewer
        Functions\when('plugin_dir_url')->alias(function($file){ return 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/'; });
        Functions\when('wp_parse_args')->alias(function($args,$defaults){ return array_merge($defaults,$args); });
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
        Functions\when('set_transient')->justReturn(true);

        $html = pdfjs_handler([
            'url' => 'https://example.com/file.pdf'
        ]);

        $this->assertStringContainsString('<iframe', $html);
        $this->assertStringContainsString('pdfjs/web/viewer.php', $html);
    }
}
