( function () {
	'use strict';

	var currentScript = document.currentScript;
	var assetVersion = currentScript
		? currentScript.getAttribute( 'data-asset-version' )
		: '';

	if ( typeof window.Worker === 'function' ) {
		var OriginalWorker = window.Worker;
		window.Worker = class extends OriginalWorker {
			constructor( scriptURL, options ) {
				var modifiedURL = scriptURL;

				if (
					typeof scriptURL === 'string' &&
					scriptURL.indexOf( 'pdf.worker.js' ) !== -1
				) {
					var hasVersion = scriptURL.indexOf( 'v=' ) !== -1;
					if ( ! hasVersion && assetVersion ) {
						modifiedURL =
							scriptURL +
							( scriptURL.indexOf( '?' ) === -1 ? '?' : '&' ) +
							'v=' +
							encodeURIComponent( assetVersion );
					}
				}

				super( modifiedURL, options );
			}
		};

		Object.keys( OriginalWorker ).forEach( function ( key ) {
			window.Worker[ key ] = OriginalWorker[ key ];
		} );
	}

	var params = new URLSearchParams( window.location.search );

	function enabled( key ) {
		return ( params.get( key ) || 'true' ) === 'true';
	}

	function hide( id ) {
		var element = document.getElementById( id );
		if ( element ) {
			element.style.display = 'none';
		}
	}

	function hideMany( ids ) {
		ids.forEach( hide );
	}

	function applyToggles() {
		if ( ! enabled( 'sButton' ) ) {
			hide( 'viewFindButton' );
			hide( 'findbar' );
		}

		if ( ! enabled( 'oButton' ) ) {
			hide( 'secondaryOpenFile' );
		}

		if ( ! enabled( 'pButton' ) ) {
			hideMany( [ 'printButton', 'secondaryPrint' ] );
		}

		if ( ! enabled( 'dButton' ) ) {
			hideMany( [ 'downloadButton', 'secondaryDownload' ] );
		}

		if ( ! enabled( 'editButtons' ) ) {
			hide( 'editorModeButtons' );
			hide( 'editorModeSeparator' );
		}
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', applyToggles, {
			once: true,
		} );
	} else {
		applyToggles();
	}
} )();
