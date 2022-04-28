<?php
/**
Plugin Name: PDFjs Viewer - Embed PDFs
Plugin URI: http://byterevel.com/
Description: Embed PDFs with the gorgeous PDF.js viewer
Version: 2.1.7
Author: <a href="http://byterevel.com/">Ben Lawson</a>, <a href="https://www.twistermc.com/">Thomas McMahon</a>
Contributors: FalconerWeb, twistermc
License: GPLv2
 **/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Shortcode
 */
require 'inc/shortcode.php';

/**
 * Generate the PDF embed code.
 */
require 'inc/embed.php';

/**
 * Media Button for Classic Editor
 */
require 'inc/media-button.php';

/**
 * Gutenberg Block
 */
require 'inc/gutenberg-block.php';

/**
 * Options Page
 */
require 'inc/options-page.php';

/**
 * Custom URL - Work in Progress
 */
$pdfjs_custom_page = get_option( 'pdfjs_custom_page', 0 );

if ($pdfjs_custom_page) {
	require 'inc/custom-page.php';
}
