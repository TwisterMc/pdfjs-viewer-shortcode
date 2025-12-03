<?php
use PHPUnit\Framework\TestCase;
use Brain\Monkey\Functions;

final class MediaButtonTest extends TestCase {
    protected function setUp(): void {
        Brain\Monkey\setUp();
    }
    protected function tearDown(): void {
        Brain\Monkey\tearDown();
    }

    public function test_enqueue_and_localize_in_classic_editor() {
        // Mock environment
        Functions\when('plugin_dir_url')->alias(function($file){ return 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/'; });
        // Simulate post is NOT using block editor so script should be enqueued
        Functions\when('use_block_editor_for_post')->justReturn(0);
        Functions\when('get_post')->justReturn((object)['ID' => 1]);

        // Mock options helper to avoid DB
        Functions\when('pdfjs_get_options')->alias(function(){
            return [
                'pdfjs_viewer_url' => 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/pdfjs/web/viewer.php',
                'pdfjs_download_button' => 'on',
                'pdfjs_print_button' => 'on',
                'pdfjs_fullscreen_link' => 'on',
                'pdfjs_fullscreen_link_text' => 'View Fullscreen',
                'pdfjs_fullscreen_link_target' => '',
                'pdfjs_embed_height' => 800,
                'pdfjs_embed_width' => 0,
                'pdfjs_viewer_scale' => 0,
            ];
        });

        $enqueued = null;
        $localized = null;
        Functions\when('wp_enqueue_script')->alias(function($handle,$src,$deps,$ver,$in_footer) use (&$enqueued){
            $enqueued = compact('handle','src','deps','ver','in_footer');
            return true;
        });
        Functions\when('wp_localize_script')->alias(function($handle,$object_name,$l10n) use (&$localized){
            $localized = compact('handle','object_name','l10n');
            return true;
        });

        include_pdfjs_media_button_js_file();

        $this->assertNotNull($enqueued, 'Script should be enqueued in Classic editor');
        $this->assertEquals('media_button', $enqueued['handle']);
        $this->assertStringContainsString('pdfjs-media-button.js', $enqueued['src']);
        $this->assertEquals(['jquery'], $enqueued['deps']);
        $this->assertTrue($enqueued['in_footer']);

        $this->assertNotNull($localized, 'Script should be localized with options');
        $this->assertEquals('media_button', $localized['handle']);
        $this->assertEquals('pdfjs_options', $localized['object_name']);
        $this->assertArrayHasKey('pdfjs_viewer_url', $localized['l10n']);
    }

    public function test_no_enqueue_when_block_editor_active() {
        // Simulate block editor in use
        Functions\when('use_block_editor_for_post')->justReturn(1);
        Functions\when('get_post')->justReturn((object)['ID' => 1]);

        $enqueued = null;
        Functions\when('wp_enqueue_script')->alias(function() use (&$enqueued){
            $enqueued = true;
            return true;
        });

        include_pdfjs_media_button_js_file();

        $this->assertNull($enqueued, 'Should not enqueue when block editor is active');
    }
}
