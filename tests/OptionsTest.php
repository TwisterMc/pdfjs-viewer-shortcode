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
        $cache = array();

        Functions\when( 'wp_cache_get' )->alias( function( $key, $group = '' ) use ( &$cache ) {
            $cacheKey = $group . ':' . $key;
            return array_key_exists( $cacheKey, $cache ) ? $cache[ $cacheKey ] : false;
        } );
        Functions\when( 'wp_cache_set' )->alias( function( $key, $value, $group = '', $ttl = 0 ) use ( &$cache ) {
            $cache[ $group . ':' . $key ] = $value;
            return true;
        } );

        Functions\when('get_option')->alias(function($name, $default = null) use (&$calls) {
            $calls++;
            $map = [
                'pdfjs_download_button' => 'on',
                'pdfjs_print_button' => 'on',
                'pdfjs_search_button' => 'on',
                'pdfjs_editing_buttons' => 'on',
                'pdfjs_fullscreen_link' => 'on',
                'pdfjs_fullscreen_link_text' => 'View Fullscreen',
                'pdfjs_fullscreen_link_target' => '',
                'pdfjs_embed_height' => 800,
                'pdfjs_embed_width' => 0,
                'pdfjs_viewer_scale' => 'auto',
                'pdfjs_viewer_pagemode' => 'none',
                'pdfjs_allow_external_domains' => '',
            ];
            return $map[$name] ?? $default;
        });
        Functions\when('plugin_dir_url')->justReturn('https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/');

        $opts1 = pdfjs_get_options();
        $opts2 = pdfjs_get_options();

        $this->assertSame($opts1, $opts2, 'Options should be cached and identical on second call');
        $this->assertEquals('https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/pdfjs/web/viewer.php', $opts1['pdfjs_viewer_url']);
        $this->assertArrayHasKey('pdfjs:pdfjs_options', $cache);
        $this->assertLessThanOrEqual(13, $calls, 'get_option should only be called once per option key on warm cache');
    }

    public function test_sanitize_allowed_domains_strips_invalid_entries() {
        $sanitized = pdfjs_sanitize_allowed_domains(
            "https://CDN.Example.com/path\nsub.good.org:443\ninvalid_host\ncdn.example.com\n"
        );

        $this->assertEquals( "cdn.example.com\nsub.good.org", $sanitized );
    }

    public function test_sanitize_option_for_checkbox_url_and_number() {
        $this->assertEquals( 'on', pdfjs_sanitize_option( 'on' ) );
        $this->assertEquals( 1200, pdfjs_sanitize_option( 1200 ) );
        $this->assertEquals( 'https://example.com/file.pdf', pdfjs_sanitize_option( 'https://example.com/file.pdf' ) );
        $this->assertEquals( 'unsafe script', pdfjs_sanitize_option( '<script>unsafe</script> script' ) );
    }
}
