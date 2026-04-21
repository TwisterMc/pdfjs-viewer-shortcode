<?php
$asset_version = isset( $_GET['v'] ) ? preg_replace( '/[^a-zA-Z0-9._-]/', '', $_GET['v'] ) : '1.0';
$viewer_html   = __DIR__ . '/viewer.html';

if ( ! is_readable( $viewer_html ) ) {
	http_response_code( 500 );
	header( 'Content-Type: text/plain; charset=utf-8' );
	echo 'Unable to load PDF.js viewer.';
	exit;
}

$html = file_get_contents( $viewer_html );

if ( false === $html ) {
	http_response_code( 500 );
	header( 'Content-Type: text/plain; charset=utf-8' );
	echo 'Unable to load PDF.js viewer.';
	exit;
}

$version = rawurlencode( $asset_version );

// Cache busting query parameters for all critical assets.
// These ensure browser cache refreshes when PDF.js is updated.
// Patterns match the original Mozilla asset references in viewer.html.
$replacements = array(
	// Main PDF library (Mozilla provides as .mjs, we mirror to .js)
	'../build/pdf.mjs"'   => '../build/pdf.js?v=' . $version . '"',
	'../build/pdf.js"'    => '../build/pdf.js?v=' . $version . '"',
	// Viewer script (Mozilla provides as .mjs, we mirror to .js)
	'viewer.mjs"'         => 'viewer.js?v=' . $version . '"',
	'viewer.js"'          => 'viewer.js?v=' . $version . '"',
	// Viewer stylesheet
	'viewer.css"'         => 'viewer.css?v=' . $version . '"',
	// Localization
	'locale/locale.json"' => 'locale/locale.json?v=' . $version . '"',
	// Worker scripts (referenced in viewer.js)
	'../build/pdf.worker.mjs' => '../build/pdf.worker.js?v=' . $version,
	'../build/pdf.worker.js'  => '../build/pdf.worker.js?v=' . $version,
	// Sandbox script (referenced in PDF library)
	'../build/pdf.sandbox.mjs' => '../build/pdf.sandbox.js?v=' . $version,
	'../build/pdf.sandbox.js'  => '../build/pdf.sandbox.js?v=' . $version,
);

$customization_script = <<<HTML
<script>
// Override Worker constructor to add version query parameter
const OriginalWorker = window.Worker;
window.Worker = class extends OriginalWorker {
	constructor(scriptURL, options) {
		// Add version to pdf.worker.js requests
		let modifiedURL = scriptURL;
		if (typeof scriptURL === 'string' && scriptURL.includes('pdf.worker.js') && !scriptURL.includes('?')) {
			modifiedURL = scriptURL + '?v=$version';
		}
		super(modifiedURL, options);
	}
};
// Preserve static properties
Object.keys(OriginalWorker).forEach(key => {
	window.Worker[key] = OriginalWorker[key];
});
</script>
<script>
(function () {
	const params = new URLSearchParams(window.location.search);
	const enabled = key => (params.get(key) || 'true') === 'true';
	const hide = id => {
		const element = document.getElementById(id);
		if (element) {
			element.style.display = 'none';
		}
	};
	const hideMany = ids => ids.forEach(hide);

	const applyToggles = () => {
		if (!enabled('sButton')) {
			hide('viewFindButton');
			hide('findbar');
		}

		if (!enabled('oButton')) {
			hide('secondaryOpenFile');
		}

		if (!enabled('pButton')) {
			hideMany(['printButton', 'secondaryPrint']);
		}

		if (!enabled('dButton')) {
			hideMany(['downloadButton', 'secondaryDownload']);
		}

		if (!enabled('editButtons')) {
			hide('editorModeButtons');
			hide('editorModeSeparator');
		}
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyToggles, { once: true });
	} else {
		applyToggles();
	}
})();
</script>
HTML;

header( 'Content-Type: text/html; charset=utf-8' );
echo str_replace( '</head>', $customization_script . '</head>', strtr( $html, $replacements ) );
