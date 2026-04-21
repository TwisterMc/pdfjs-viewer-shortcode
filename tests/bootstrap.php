<?php

// Define minimal constants / functions used by the plugin during tests.
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/../' );
}
if ( ! defined( 'PDFJS_PLUGIN_VERSION' ) ) {
    define( 'PDFJS_PLUGIN_VERSION', 'test-version' );
}

if ( ! function_exists( 'add_action' ) ) {
    function add_action( $hook, $callback, $priority = 10, $accepted_args = 1 ) {
        return true;
    }
}
if ( ! function_exists( 'add_filter' ) ) {
    function add_filter( $hook, $callback, $priority = 10, $accepted_args = 1 ) {
        return true;
    }
}
if ( ! function_exists( 'add_shortcode' ) ) {
    function add_shortcode( $tag, $callback ) {
        return true;
    }
}
if ( ! function_exists( 'register_setting' ) ) {
    function register_setting( $option_group, $option_name, $args = array() ) {
        return true;
    }
}
if ( ! function_exists( 'wp_cache_get' ) ) {
    function wp_cache_get( $key, $group = '' ) {
        static $cache = array();
        $cache_key = $group . ':' . $key;
        return array_key_exists( $cache_key, $cache ) ? $cache[ $cache_key ] : false;
    }
}
if ( ! function_exists( 'wp_cache_set' ) ) {
    function wp_cache_set( $key, $data, $group = '', $expire = 0 ) {
        static $cache = array();
        $cache[ $group . ':' . $key ] = $data;
        return true;
    }
}
if ( ! function_exists( 'wp_cache_delete' ) ) {
    function wp_cache_delete( $key, $group = '' ) {
        return true;
    }
}
if ( ! function_exists( 'add_query_arg' ) ) {
    function add_query_arg( $key, $value = null, $url = null ) {
        $query = array();
        if ( is_array( $key ) ) {
            $query = $key;
            $url = $value;
        } else {
            $query = array( $key => $value );
        }

        $parts = parse_url( $url );
        $base = '';
        if ( isset( $parts['scheme'] ) ) {
            $base .= $parts['scheme'] . '://';
        }
        if ( isset( $parts['host'] ) ) {
            $base .= $parts['host'];
        }
        if ( isset( $parts['port'] ) ) {
            $base .= ':' . $parts['port'];
        }
        if ( isset( $parts['path'] ) ) {
            $base .= $parts['path'];
        }

        $existing = array();
        if ( isset( $parts['query'] ) ) {
            parse_str( $parts['query'], $existing );
        }
        $merged = array_merge( $existing, $query );
        return $base . '?' . http_build_query( $merged );
    }
}
if ( ! function_exists( 'absint' ) ) {
    function absint( $maybeint ) {
        return abs( intval( $maybeint ) );
    }
}
if ( ! function_exists( '__' ) ) {
    function __( $text, $domain = 'default' ) {
        return translate( $text, $domain );
    }
}
if ( ! function_exists( 'esc_textarea' ) ) {
    function esc_textarea( $text ) {
        return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' );
    }
}
if ( ! function_exists( 'get_admin_url' ) ) {
    function get_admin_url( $blog_id = null, $path = '', $scheme = 'admin' ) {
        return 'https://example.com/wp-admin/';
    }
}
if ( ! function_exists( 'settings_fields' ) ) {
    function settings_fields( $option_group ) {
        return true;
    }
}
if ( ! function_exists( 'submit_button' ) ) {
    function submit_button( $text = null, $type = 'primary', $name = 'submit', $wrap = true ) {
        return true;
    }
}
if ( ! function_exists( 'checked' ) ) {
    function checked( $checked, $current = true, $echo = true ) {
        return (string) $checked === (string) $current ? 'checked="checked"' : '';
    }
}
if ( ! function_exists( 'selected' ) ) {
    function selected( $selected, $current = true, $echo = true ) {
        return (string) $selected === (string) $current ? 'selected="selected"' : '';
    }
}
if ( ! function_exists( 'wp_kses_post' ) ) {
    function wp_kses_post( $data ) {
        return $data;
    }
}
if ( ! function_exists( 'get_post_mime_type' ) ) {
    function get_post_mime_type( $post_id = 0 ) {
        return 'application/pdf';
    }
}
if ( ! function_exists( 'wp_get_attachment_url' ) ) {
    function wp_get_attachment_url( $attachment_id = 0 ) {
        return 'https://example.com/wp-content/uploads/test.pdf';
    }
}
if ( ! function_exists( 'get_the_title' ) ) {
    function get_the_title( $post = 0 ) {
        return 'Test PDF';
    }
}
if ( ! function_exists( 'wp_die' ) ) {
    function wp_die( $message = '' ) {
        throw new RuntimeException( (string) $message );
    }
}
if ( ! function_exists( 'add_options_page' ) ) {
    function add_options_page( $page_title, $menu_title, $capability, $menu_slug, $callback = '' ) {
        return 'settings_page_pdfjs';
    }
}

require __DIR__ . '/../vendor/autoload.php';

// Basic stubs for WordPress functions used in tests.
if ( ! function_exists( 'plugin_dir_url' ) ) {
    function plugin_dir_url( $file ) { return 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/'; }
}
if ( ! function_exists( 'plugin_dir_path' ) ) {
    function plugin_dir_path( $file ) { return __DIR__ . '/../'; }
}
if ( ! function_exists( 'plugins_url' ) ) {
    function plugins_url( $path = '', $plugin = '' ) { return 'https://example.com/wp-content/plugins/pdfjs-viewer-shortcode/' . ltrim($path, '/'); }
}
if ( ! function_exists( 'is_admin' ) ) {
    function is_admin() { return false; }
}
if ( ! function_exists( 'shortcode_atts' ) ) {
    function shortcode_atts( $pairs, $atts ) {
        $atts = (array) $atts;
        $out = array();
        foreach ( $pairs as $name => $default ) {
            if ( array_key_exists( $name, $atts ) ) {
                $out[ $name ] = $atts[ $name ];
            } else {
                $out[ $name ] = $default;
            }
        }
        return $out;
    }
}
if ( ! function_exists( 'wp_parse_args' ) ) {
    function wp_parse_args( $args, $defaults = '' ) {
        if ( is_object( $args ) ) {
            $r = get_object_vars( $args );
        } elseif ( is_array( $args ) ) {
            $r =& $args;
        } else {
            wp_parse_str( $args, $r );
        }
        if ( is_array( $defaults ) ) {
            return array_merge( $defaults, $r );
        }
        return $r;
    }
}
if ( ! function_exists( 'wp_parse_str' ) ) {
    function wp_parse_str( $string, &$array ) {
        parse_str( $string, $array );
    }
}
if ( ! function_exists( 'sanitize_text_field' ) ) {
    function sanitize_text_field( $str ) {
        $filtered = wp_check_invalid_utf8( $str );
        if ( strpos( $filtered, '<' ) !== false ) {
            $filtered = wp_pre_kses_less_than( $filtered );
            $filtered = wp_strip_all_tags( $filtered );
        }
        $filtered = trim( $filtered );
        $found = false;
        while ( preg_match( '/%[a-f0-9]{2}/i', $filtered, $match ) ) {
            $filtered = str_replace( $match[0], '', $filtered );
            $found = true;
        }
        if ( $found ) {
            $filtered = trim( preg_replace( '/ +/', ' ', $filtered ) );
        }
        return $filtered;
    }
}
if ( ! function_exists( 'wp_check_invalid_utf8' ) ) {
    function wp_check_invalid_utf8( $string, $strip = false ) {
        $string = (string) $string;
        if ( 0 === strlen( $string ) ) {
            return '';
        }
        if ( $strip && function_exists( 'iconv' ) ) {
            return iconv( 'UTF-8', 'UTF-8//IGNORE', $string );
        }
        return $string;
    }
}
if ( ! function_exists( 'wp_pre_kses_less_than' ) ) {
    function wp_pre_kses_less_than( $text ) {
        return preg_replace_callback( '/<(.*?)>/', function( $matches ) {
            return '&lt;' . $matches[1] . '&gt;';
        }, $text );
    }
}
if ( ! function_exists( 'wp_strip_all_tags' ) ) {
    function wp_strip_all_tags( $string, $remove_breaks = false ) {
        $string = preg_replace( '@<(script|style)[^>]*?>.*?</\\1>@si', '', $string );
        $string = strip_tags( $string );
        if ( $remove_breaks ) {
            $string = preg_replace( '/[\r\n\t ]+/', ' ', $string );
        }
        return trim( $string );
    }
}
if ( ! function_exists( 'sanitize_url' ) ) {
    function sanitize_url( $url, $protocols = null ) {
        return esc_url_raw( $url, $protocols );
    }
}
if ( ! function_exists( 'esc_url_raw' ) ) {
    function esc_url_raw( $url, $protocols = null ) {
        return esc_url( $url, $protocols );
    }
}
if ( ! function_exists( 'esc_url' ) ) {
    function esc_url( $url, $protocols = null ) {
        $original_url = $url;
        if ( '' == $url ) {
            return $url;
        }
        $url = preg_replace( '|[^a-z0-9-~+_.?#=!&;,/:%@$\|*\'()\\x80-\\xff]|i', '', $url );
        if ( '' === $url ) {
            return $url;
        }
        if ( 0 !== stripos( $url, 'http://' ) && 0 !== stripos( $url, 'https://' ) && 0 !== stripos( $url, '//' ) ) {
            $url = 'http://' . $url;
        }
        return $url;
    }
}
if ( ! function_exists( 'esc_attr__' ) ) {
    function esc_attr__( $text, $domain = 'default' ) {
        return esc_attr( translate( $text, $domain ) );
    }
}
if ( ! function_exists( 'esc_attr' ) ) {
    function esc_attr( $text ) {
        $safe_text = wp_check_invalid_utf8( $text );
        $safe_text = _wp_specialchars( $safe_text, ENT_QUOTES );
        return $safe_text;
    }
}
if ( ! function_exists( '_wp_specialchars' ) ) {
    function _wp_specialchars( $string, $quote_style = ENT_NOQUOTES, $charset = false, $double_encode = false ) {
        $string = (string) $string;
        if ( 0 === strlen( $string ) ) {
            return '';
        }
        if ( ! $charset ) {
            $charset = 'UTF-8';
        }
        $_quote_style = $quote_style;
        if ( 'utf-8' === $charset || 'utf8' === $charset ) {
            $charset = 'UTF-8';
        }
        $string = htmlspecialchars( $string, $_quote_style, $charset, $double_encode );
        return $string;
    }
}
if ( ! function_exists( 'translate' ) ) {
    function translate( $text, $domain = 'default' ) {
        return $text;
    }
}
if ( ! function_exists( 'esc_html__' ) ) {
    function esc_html__( $text, $domain = 'default' ) {
        return esc_html( translate( $text, $domain ) );
    }
}
if ( ! function_exists( 'esc_html' ) ) {
    function esc_html( $text ) {
        $safe_text = wp_check_invalid_utf8( $text );
        $safe_text = _wp_specialchars( $safe_text, ENT_QUOTES );
        return $safe_text;
    }
}
if ( ! function_exists( 'get_option' ) ) {
    function get_option( $option, $default = false ) {
        return $default;
    }
}
if ( ! function_exists( 'get_site_url' ) ) {
    function get_site_url( $blog_id = null, $path = '', $scheme = null ) {
        return 'https://example.com';
    }
}
if ( ! function_exists( 'wp_create_nonce' ) ) {
    function wp_create_nonce( $action = -1 ) {
        return 'nonce_' . md5( $action );
    }
}
if ( ! function_exists( 'set_transient' ) ) {
    function set_transient( $transient, $value, $expiration = 0 ) {
        return true;
    }
}
if ( ! function_exists( 'get_post' ) ) {
    function get_post( $post = null, $output = OBJECT, $filter = 'raw' ) {
        return null;
    }
}
if ( ! function_exists( 'current_user_can' ) ) {
    function current_user_can( $capability, ...$args ) {
        return true;
    }
}
if ( ! function_exists( 'use_block_editor_for_post' ) ) {
    function use_block_editor_for_post( $post ) {
        return false;
    }
}
if ( ! function_exists( 'wp_enqueue_script' ) ) {
    function wp_enqueue_script( $handle, $src = '', $deps = array(), $ver = false, $in_footer = false ) {
        return true;
    }
}
if ( ! function_exists( 'wp_localize_script' ) ) {
    function wp_localize_script( $handle, $object_name, $l10n ) {
        return true;
    }
}
if ( ! function_exists( 'wp_register_script' ) ) {
    function wp_register_script( $handle, $src, $deps = array(), $ver = false, $in_footer = false ) {
        return true;
    }
}
if ( ! function_exists( 'wp_register_style' ) ) {
    function wp_register_style( $handle, $src, $deps = array(), $ver = false, $media = 'all' ) {
        return true;
    }
}
if ( ! function_exists( 'register_block_type' ) ) {
    function register_block_type( $block_name, $args = array() ) {
        return true;
    }
}
if ( ! defined( 'REST_REQUEST' ) ) {
    define( 'REST_REQUEST', false );
}
