<?php
namespace Elementor {
    class Widget_Base {
        public function __construct( $data = array(), $args = null ) {}
        protected function start_controls_section( $id, $args = array() ) {}
        protected function add_control( $id, $args = array() ) {}
        protected function end_controls_section() {}
        protected function add_group_control( $group, $args = array() ) {}
        protected function add_responsive_control( $id, $args = array() ) {}
    }

    class Controls_Manager {
        const TAB_CONTENT = 'content';
        const TAB_STYLE = 'style';
        const MEDIA = 'media';
        const TEXT = 'text';
        const SLIDER = 'slider';
        const SELECT = 'select';
        const SWITCHER = 'switcher';
        const COLOR = 'color';
        const DIMENSIONS = 'dimensions';
    }

    class Group_Control_Border {
        public static function get_type() {
            return 'border';
        }
    }

    class Group_Control_Box_Shadow {
        public static function get_type() {
            return 'box-shadow';
        }
    }

    class Editor_Stub {
        public function is_edit_mode() {
            return false;
        }
    }

    class Plugin {
        public static $instance;
        public $editor;

        public function __construct() {
            $this->editor = new Editor_Stub();
        }
    }
}

namespace {
    use Brain\Monkey\Functions;
    use PHPUnit\Framework\TestCase;

    require_once __DIR__ . '/../inc/elementor-widget.php';

    final class Testable_PDFjs_Viewer_Elementor_Widget extends PDFjs_Viewer_Elementor_Widget {
        private $mock_settings = array();

        public function set_mock_settings( $settings ) {
            $this->mock_settings = $settings;
        }

        protected function get_settings_for_display() {
            return $this->mock_settings;
        }

        public function render_for_test() {
            ob_start();
            $this->render();
            return ob_get_clean();
        }
    }

    final class ElementorWidgetTest extends TestCase {
        protected function setUp(): void {
            \Brain\Monkey\setUp();
            \Elementor\Plugin::$instance = new \Elementor\Plugin();
        }

        protected function tearDown(): void {
            \Brain\Monkey\tearDown();
        }

        public function test_render_outputs_viewer_container_and_calls_shared_renderer() {
            Functions\when( 'sanitize_url' )->alias( function( $value ) { return $value; } );
            Functions\when( 'sanitize_text_field' )->alias( function( $value ) { return $value; } );
            Functions\when( 'absint' )->alias( function( $value ) { return abs( (int) $value ); } );
            Functions\when( 'wp_get_attachment_url' )->justReturn( 'https://example.com/wp-content/uploads/widget.pdf' );
            Functions\when( 'get_option' )->alias( function( $name, $default = null ) {
                $map = array(
                    'pdfjs_search_button' => 'on',
                    'pdfjs_editing_buttons' => 'on',
                );
                return array_key_exists( $name, $map ) ? $map[ $name ] : $default;
            } );

            $captured = null;
            Functions\when( 'pdfjs_render_viewer' )->alias( function( $args ) use ( &$captured ) {
                $captured = $args;
                return '<iframe class="widget-render"></iframe>';
            } );

            $widget = new Testable_PDFjs_Viewer_Elementor_Widget();
            $widget->set_mock_settings(
                array(
                    'external_url' => 'https://cdn.example.com/files/widget.pdf',
                    'attachment_id' => array( 'id' => 44 ),
                    'viewer_height' => array( 'size' => 920, 'unit' => 'px' ),
                    'viewer_width' => array( 'size' => 100, 'unit' => '%' ),
                    'show_fullscreen' => 'yes',
                    'fullscreen_text' => 'Open Fullscreen',
                    'fullscreen_target_blank' => 'yes',
                    'show_download' => 'yes',
                    'show_print' => 'no',
                    'zoom_level' => '125',
                )
            );

            $output = $widget->render_for_test();

            $this->assertStringContainsString( 'pdfjs-embed-container', $output );
            $this->assertStringContainsString( 'widget-render', $output );
            $this->assertIsArray( $captured );
            $this->assertEquals( 'https://cdn.example.com/files/widget.pdf', $captured['url'] );
            $this->assertEquals( '920px', $captured['viewer_height'] );
            $this->assertEquals( '100%', $captured['viewer_width'] );
            $this->assertEquals( 'true', $captured['fullscreen'] );
            $this->assertEquals( 'true', $captured['fullscreen_target'] );
            $this->assertEquals( 'true', $captured['download'] );
            $this->assertEquals( 'false', $captured['print'] );
            $this->assertEquals( '125', $captured['zoom'] );
        }
    }
}
