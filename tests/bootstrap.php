<?php

// Patchwork must load before the stubs so Brain Monkey can redefine them.
require_once __DIR__ . '/../vendor/antecedent/patchwork/Patchwork.php';
require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/stubs.php';

foreach ( array( 'embed', 'external-domains', 'render-viewer', 'shortcode', 'gutenberg-block', 'media-button', 'options-page' ) as $pdfjs_inc ) {
    require_once __DIR__ . '/../inc/' . $pdfjs_inc . '.php';
}
