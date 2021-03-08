<?php
/**
Plugin Name: PDFjs Viewer
Plugin URI: http://byterevel.com/
Description: Embed PDFs with the gorgeous PDF.js viewer
Version: 2.0.0
Author: <a href="http://byterevel.com/">Ben Lawson</a>, <a href="https://www.twistermc.com/">Thomas McMahon</a>
Contributors: FalconerWeb, twistermc
License: GPLv2
 **/

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
