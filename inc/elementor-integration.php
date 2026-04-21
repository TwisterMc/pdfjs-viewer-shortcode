<?php
/**
 * Elementor Integration for PDF.js Viewer
 *
 * Registers widget category. Widget registration is handled in pdfjs-viewer.php
 *
 * @package PDFjs_Viewer_Shortcode
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Add Elementor widget category for better organization.
 * Follows Elementor category registration standards.
 *
 * @param \Elementor\Elements_Manager $elements_manager The elements manager instance.
 */
function pdfjs_add_elementor_widget_category( $elements_manager ) {
	$elements_manager->add_category(
		'pdfjs',
		array(
			'title' => esc_html__( 'PDF.js Viewer', 'pdfjs-viewer-shortcode' ),
			'icon'  => 'fa fa-file-pdf',
		)
	);
}

// Add custom category when Elementor categories are registered
add_action( 'elementor/elements/categories_registered', 'pdfjs_add_elementor_widget_category' );
