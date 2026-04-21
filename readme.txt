# PDF.js Viewer

- Contributors: twistermc, FalconerWeb
- Tags: pdf, pdfjs, viewer, embed, mozilla
- Requires at least: 5.0
- Tested up to: 7.0
- Stable tag: 3.1.1
- License: GPLv2 or later
- License URI: http://www.gnu.org/licenses/gpl-2.0.html
- Requires PHP: 7.4

Embed a beautiful PDF viewer into pages.

## Description

Incorporate [Mozilla's PDF.js](https://github.com/mozilla/pdf.js/) viewer into your pages and posts via a Gutenberg block or a simple shortcode. PDF.js is a javascript library for displaying pdf pages within browsers.

Features:

- Gutenberg Block and Shortcode
- Elementor Widget (auto-detects when Elementor is active)
- Translation Support (plugin only): Spanish and French included, ready for more languages
- Elegant Theme that adapts to dark and light mode (if browser supports dynamic CSS)
- Customizable buttons
- Page navigation drawer
- Search functionality
- Protected PDF password entry
- Loading bar & displays partially loaded PDF (great for huge PDFs!)
- Document outline
- Classic Editor: Easy to use editor media button that generates the shortcode for you
- Support for mobile devices
- Responsive design with mobile support

Shortcode Syntax:

`[pdfjs-viewer attachment_id=123 viewer_width=600px viewer_height=700px fullscreen=true download=true print=true]`

Or use a direct URL:

`[pdfjs-viewer url=http://www.website.com/test.pdf viewer_width=600px viewer_height=700px fullscreen=true download=true print=true]`

**Shortcode Parameters:**

- `attachment_id` (recommended): ID of the media file in WordPress media library
- `url` (alternative): Direct URL to PDF file. Use `attachment_id` when possible for better security.
- `viewer_width` (optional): Width of the viewer (default: `100%`)
- `viewer_height` (optional): Height of the viewer (default: `800px`)
- `fullscreen` (optional): `true`/`false`, displays fullscreen link above viewer (default: `true`)
- `fullscreen_text` (optional): Text for the fullscreen link (default: `View Fullscreen`)
    - Spaces not allowed. Use `%20` in place of spaces.
- `fullscreen_target` (optional): `true`/`false`, open the fullscreen link in a new tab (default: `false`)
- `download` (optional): `true`/`false`, enables or disables download button (default: `true`)
- `print` (optional): `true`/`false`, enables or disables print button (default: `true`)
- `openfile` (optional): `true`/`false`, show open file button (default: `false`)
- `zoom` (optional): Initial zoom level - `auto`, `page-actual`, `page-fit`, `page-width`, or percentage like `75`, `100`, `150` (default: `auto`)

## Elementor Widget

If you're using [Elementor](https://elementor.com/), the PDF.js Viewer Elementor widget is automatically available in the Page Builder.

### Admin Notice After Updates / Invalid Block

When you update the plugin, editors may see an admin banner explaining that Gutenberg could show an “Attempt Block Recovery” prompt when editing older posts with PDFs. Clicking it updates the block format; it does not affect what visitors see. You can dismiss the banner, and it won’t reappear until a future release enables it again.

## Installation

This plugin can be installed either directly from your WordPress admin panel by searching for **PDF.js Viewer**, or downloading from the Wordpress Plugin Repository and uploading and expanding the archive into your sites `wp-content/plugins` directory.

## License

This WordPress plugin is licensed under GPLv2 or later.

PDF.js (included in this plugin) is developed by Mozilla and licensed under the Apache License 2.0. See the [PDF.js repository](https://github.com/mozilla/pdf.js) for details.

## Changelog

## 3.1.1

- Re-enabled Alternative PDF Loading and fixed a full screen issue with it if it were enabled.
- Fix for widgets not loading default settings from the options page.
- Update how we load the Elementor widget so hopefully it works better.
- Internal code cleaup.
- Translation updates.

## 3.1.0

- Cache busting for the pesky pdf.worker.js file to prevent caching issues after updates
- Added Elementor widget
- Brought Zoom back
- Ability to whitelist other domains (like CDNs) to load PDFs from.

## 3.0.4

- Cache busting for PDF.js files to prevent caching issues after updates

## 3.0.3.1

- URL Encoding fix

## 3.0.3

- PDFjs 5.5.207
- Improved URL encoding for PDF files with special characters in filenames/URLs
- Enhanced security with better sanitization of file parameters

### 3.0.2

- Added cache busing to PDFjs files to prevent caching issues after updates

### 3.0.1

- Fixed an issue with mjs files on servers that don't support the mime type

### 3.0.0

- Now requires WordPress 5.0 and PHP 7.4
- Upgraded PDFjs to PDF.js 5.4.456
- Added PDF preview in Gutenberg block
- Admin notice for block recovery after updates
- Accessibility improvements.
- Reworked the block editor PDF embed code
- Options Page improvements.
- Added message so if the user is trying to load external PDFs, they'll get a warning
- Translation Support: Added internationalization support
    - Included Spanish (es_ES) and French (fr_FR) translations
    - Added translation template (POT file) for additional languages
    - Added `load_plugin_textdomain()` for automatic translation loading
    - Created translation guide in `languages/README.md`
- Fixed `window.pdfjs_options` undefined errors in block editor
- Added safe fallback to prevent JavaScript errors when options not loaded
- Improved attribute default handling in Gutenberg block
- Added PDF preview in Gutenberg block editor
- Consolidated rendering logic with new `pdfjs_render_viewer()` function
- Created `pdfjs_get_options()` helper for consistent option retrieval
- Added proper input sanitization with `pdfjs_sanitize_option()`
- Fixed `pdfjs_viewer_scale` default from `0` to `auto`
- Updated build toolchain (Sass, webpack, Node 18+ requirement)
- Removed unused code and improved code organization
- Added `.nvmrc` for Node version management
- Fixed PHP Warning: Undefined array key "editButtons" thanks to retroflexer
- Fixed issue where iFrames could break the layout on smaller screens

### 2.2.3

- Updated PDFjs to PDF.js 5.3.93
- Merged 'Add toggle to disable editing buttons' PR
- Merged 'Fix PHP Warnings: Undefined array key' PR
- Package security updates / rebuild

### 2.2.2

- PDFjs with legacy browser support

### 2.2.1

- .mjs workaround
- Updated to PDFjs 4.5.136

### 2.2

- Updated to PDFjs 4.3.136
- Renamed 'Download' to 'Save' based on PDFjs change.
- Removed the zoom feature to hopefully fix Edge issues.
- Disabling the Alternative PDF Loading version

### 2.1.8

- Preventing users from adding JS to shortcodes.
- Bumping version numbers

### 2.1.7

- Fixed the fullscreen settings for new PDFs
- Fixing a bug where, on fresh installs, the fullscreen text would be 'on'
- Tested with WordPress 6.0-beta3-53297

### 2.1.6

- Added testing up to WordPress 5.9.
- Added a few more variables into the Alternative PDF Loading version.
- Moved the Alternative PDF Loading to beta.

### 2.1.5

- Detect ACF before running ACF code.
- Beta: Added a feature flag to load the PDF in full screen view differently.

### 2.1.4

- Decoding PDF urls when other plugins encode them in the classic editor.

### 2.1.3

- Adding a version number to some JS files to break caches
- Fixing an issue where the fullscreen text didn't have spaces
- Updating the shortcode in the read me

### 2.1.2

- Reverting to the file in the URL

### 2.1.1

- Updating how we call the WordPress plugin directory.
- Updating function names.
- More sanitization.

### 2.1.0

- Added the file ID to the URL.
- Hooked WordPress into the viewer to pull the URL in. Should fix some possible security concerns.
- Removed the file URL from the URL.
- Removed the `pdfjs_set_custom_edits` filter.
- Removed the `pdfjs_set_custom_domain` filter.
- Sanitizing inputs
- Removing search term.

### 2.0.2

- Preventing XSS with the search term

### 2.0.1

- Now works with ACF fields! Thanks @imj13

### 2.0.0

- Major PDFjs Upgrade to version 2.6.347
- Changing the insert PDF button to fire on a class not ID.
- Updated the minimum version of WordPress supported.
- Maybe Edge is happy now?

### 1.5.9

- Fixing the issue that made Edge unhappy. _fingers crossed_

### 1.5.8

- Starting to hook up options page to the shortcode.
- Fixing a potential code injection problem
- Fix for WordPress 2021 Theme

### 1.5.7

- Fix for those not running WordPress 5+ where a fatal error would show because a function I called didn't exist.

### 1.5.6

- New options page to set the default settings.
- Only showing the 'Add PDF' media button to posts using the classic editor as it only works in the classic editor.
- Added a filter to pass in a custom domain if URLs are proxied. `pdfjs_set_custom_domain`
- Added a filter if you want to edit the PDF URL. `pdfjs_set_custom_edits`
- Ability to hide Search via setting on options page.
- Ability to show Sidebar via setting on options page.
- Ability to highlight a search term on PDF load.

### v1.5.5

- High Five 🖐

### v1.5.4

- Reworking way we make the PDF url relative.

### v1.5.3

- Remove only the first instance of the domain name from the URL. Leave it if it's in a directory or file name.

### v1.5.2

- Making the PDF URL relative so that maybe Microsoft Defender won't complain.
- Allowing the viewer to be called directly.
- Hiding the Open button.
- Checking for `register_block_type` function before calling it to better support WordPress 4.x. Thanks @Now-Italy-Demo @octoxan
- Made the PDF URL relative to hopefully fix Windows Defender security issues.
- Adding option to open the fullscreen link in a new tab.

### v1.5.1

- Reverting the update to Mozilla PDF.JS library as it broke older browsers and some other setups.

### v1.5

- Updated Plugin Name
- Updated Plugin Icon
- Gutenberg Block
- Updating Mozilla PDF.JS library.
- Adding a class to the fullscreen link.
- Ability to customize fullscreen link text.
- Ability to customize default zoom level.
- Classes so you can style things easier.
- Shorter default height.

### v1.4.6

- Renaming URL variables to prevent a possible Edge security message.

### v1.4.5

- Fixes a version number issue that was introduced in the last version.

### v1.4.4

- Brings back the ability to hide print and download.
- Adds version numbers to URLs to hopefully break caches and prevent weirdness.

### v1.4.3

- Fixes an issue where PDFs wouldn't load on production sites due to a `setLanguage` error.

### v1.4.2

- Added title to iFrame for accessibility.
- Cleaning up code per WordPress standards.

### v1.4.1

- Updating the Readme

### v1.4

- Updating to PDF.JS version v2.3.200
- Updating the Readme
- Adding Gutenberg Callout

### v1.0 - 1.3

- The birth of the plugin and first few versions.
