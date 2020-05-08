const { __ } = wp.i18n;

import './editor.scss';
import './style.scss';

const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls } = wp.blockEditor;

const {
	Button,
	PanelRow,
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
	TextControl,
} = wp.components;

const defaultHeight = 800;
const defaultWidth = 0;

const ALLOWED_MEDIA_TYPES = [ 'application/pdf' ];

registerBlockType( 'pdfjsblock/pdfjs-embed', {
	title: __( 'Embed PDF.js Viewer', 'pdfjs-viewer-shortcode' ),
	icon: 'media-document',
	category: 'common',
	attributes: {
		imageURL: {
			type: 'string',
		},
		imgID: {
			type: 'number',
		},
		imgTitle: {
			type: 'string',
			default: 'PDF File',
		},
		showDownload: {
			type: 'boolean',
			default: true,
		},
		showPrint: {
			type: 'boolean',
			default: true,
		},
		showFullscreen: {
			type: 'boolean',
			default: true,
		},
		fullscreenText: {
			type: 'string',
			default: 'View Fullscreen',
		},
		viewerHeight: {
			type: 'number',
			default: defaultHeight,
		},
		viewerWidth: {
			type: 'number',
			default: defaultWidth,
		},
		viewerScale: {
			type: 'string',
			default: 'auto',
		},
	},
	keywords: [ __( 'PDF Selector', 'pdfjs-viewer-shortcode' ) ],

	edit( props ) {
		const onFileSelect = ( img ) => {
			props.setAttributes( {
				imageURL: img.url,
				imgID: img.id,
				imgTitle: img.title,
			} );
		};

		const onRemoveImg = () => {
			props.setAttributes( {
				imageURL: null,
				imgID: null,
				imgTitle: null,
			} );
		};

		const onToggleDownload = ( value ) => {
			props.setAttributes( {
				showDownload: value,
			} );
		};

		const onTogglePrint = ( value ) => {
			props.setAttributes( {
				showPrint: value,
			} );
		};

		const onToggleFullscreen = ( value ) => {
			props.setAttributes( {
				showFullscreen: value,
			} );
		};

		const onHeightChange = ( value ) => {
			// handle the reset button
			if ( undefined === value ) {
				value = defaultHeight;
			}
			props.setAttributes( {
				viewerHeight: value,
			} );
		};

		const onWidthChange = ( value ) => {
			// handle the reset button
			if ( undefined === value ) {
				value = defaultWidth;
			}
			props.setAttributes( {
				viewerWidth: value,
			} );
		};

		const onScaleChange = ( value ) => {
			props.setAttributes( {
				viewerScale: value,
			} );
		};
		const onFullscreenTextChange = ( value ) => {
			props.setAttributes( {
				fullscreenText: value,
			} );
		};

		return [
			<InspectorControls key="i1">
				<PanelBody title={ __( 'PDF.js Options', 'pdfjs-viewer-shortcode' ) }>
					<PanelRow>
						<ToggleControl
							label={ __(
								'Show Download Option',
								'pdfjs-viewer-shortcode'
							) }
							help={
								props.attributes.showDownload
									? __( 'Yes', 'pdfjs-viewer-shortcode' )
									: __( 'No', 'pdfjs-viewer-shortcode' )
							}
							checked={ props.attributes.showDownload }
							onChange={ onToggleDownload }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Print Option', 'pdfjs-viewer-shortcode' ) }
							help={
								props.attributes.showPrint
									? __( 'Yes', 'pdfjs-viewer-shortcode' )
									: __( 'No', 'pdfjs-viewer-shortcode' )
							}
							checked={ props.attributes.showPrint }
							onChange={ onTogglePrint }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __(
								'Show Fullscreen Option',
								'pdfjs-viewer-shortcode'
							) }
							help={
								props.attributes.showFullscreen
									? __( 'Yes', 'pdfjs-viewer-shortcode' )
									: __( 'No', 'pdfjs-viewer-shortcode' )
							}
							checked={ props.attributes.showFullscreen }
							onChange={ onToggleFullscreen }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Fullscreen Text"
							value={ props.attributes.fullscreenText }
							onChange={ onFullscreenTextChange }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={ __( 'Embed Height', 'pdfjs-viewer-shortcode' ) }>
					<RangeControl
						label={ __(
							'Viewer Height (pixels)',
							'pdfjs-viewer-shortcode'
						) }
						value={ props.attributes.viewerHeight }
						onChange={ onHeightChange }
						min={ 0 }
						max={ 5000 }
						allowReset={ true }
						initialPosition={ defaultHeight }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Embed Width', 'pdfjs-viewer-shortcode' ) }>
					<RangeControl
						label={ __(
							'Viewer Width (pixels)',
							'pdfjs-viewer-shortcode'
						) }
						help="By default 0 will be 100%."
						value={ props.attributes.viewerWidth }
						onChange={ onWidthChange }
						min={ 0 }
						max={ 5000 }
						allowReset={ true }
						initialPosition={ defaultWidth }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Scale', 'pdfjs-viewer-shortcode' ) }>
					<SelectControl
						label="Viewer Scale"
						value={ props.attributes.viewerScale }
						options={ [
							{ label: 'Automatic', value: 'auto' },
							{ label: 'Actual Size', value: 'page-actual' },
							{ label: 'Page Fit', value: 'page-fit' },
							{ label: 'Page Width', value: 'page-width' },
							{ label: '50%', value: '50' },
							{ label: '75%', value: '75' },
							{ label: '100%', value: '100' },
							{ label: '125%', value: '125' },
							{ label: '150%', value: '150' },
							{ label: '200%', value: '200' },
							{ label: '300%', value: '300' },
							{ label: '400%', value: '400' },
						] }
						onChange={ onScaleChange }
					/>
				</PanelBody>
			</InspectorControls>,
			<div className="pdfjs-wrapper components-placeholder" key="i2" style={{height: props.attributes.viewerHeight}}>
				<div>
					<strong>{ __( 'PDF.js Embed', 'pdfjs-viewer-shortcode' ) }</strong>
				</div>
				{ props.attributes.imageURL ? (
					<div className="pdfjs-upload-wrapper">
						<div className="pdfjs-upload-button-wrapper">
							<span className="dashicons dashicons-media-document"></span>
							<span className="pdfjs-title">
								{ props.attributes.imgTitle
									? props.attributes.imgTitle
									: props.attributes.imageURL }
							</span>
						</div>
						{ props.isSelected ? (
							<Button className="button" onClick={ onRemoveImg }>
								{ __( 'Remove PDF', 'pdfjs-viewer-shortcode' ) }
							</Button>
						) : null }
					</div>
				) : (
					<div>
						<MediaUpload
							onSelect={ onFileSelect }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ props.attributes.imgID }
							render={ ( { open } ) => (
								<Button className="button" onClick={ open }>
									{ __( 'Choose PDF', 'pdfjs-viewer-shortcode' ) }
								</Button>
							) }
						/>
					</div>
				) }
			</div>,
		];
	},

	save( props ) {
		return (
			<div className="pdfjs-wrapper">
				{`[pdfjs-viewer viewer_width=${ ( props.attributes.viewerWidth !== undefined ) ? props.attributes.viewerWidth : defaultWidth } viewer_height=${ ( props.attributes.viewerHeight !== undefined ) ? props.attributes.viewerHeight : defaultHeight } url=${ props.attributes.imageURL } download=${ props.attributes.showDownload.toString() } print=${ props.attributes.showPrint.toString() } fullscreen=${ props.attributes.showFullscreen.toString() } fullscreen_text="${ encodeURIComponent( props.attributes.fullscreenText ) }" zoom=${ props.attributes.viewerScale.toString()} ]`}
			</div>
		);
	},
} );
