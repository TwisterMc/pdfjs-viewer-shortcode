const { __ } = wp.i18n;

import './style.scss';

const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls } = wp.blockEditor;

const {
	Button,
	PanelRow,
	PanelBody,
	ToggleControl,
	TextControl,
} = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'application/pdf' ];

registerBlockType( 'pdfjsblock/pdfjs-embed', {
	title: __( 'Embed PDF.js Viewer', 'pdf-js-block' ),
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
		viewerHeight: {
			type: 'number',
			default: 1360,
		},
		viewerWidth: {
			type: 'number',
			default: 0,
		},
	},
	keywords: [ __( 'PDF Selector', 'pdf-js-block' ) ],

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
			props.setAttributes( {
				viewerHeight: value,
			} );
		};

		const onWidthChange = ( value ) => {
			props.setAttributes( {
				viewerWidth: value,
			} );
		};

		return [
			<InspectorControls key="i1">
				<PanelBody title={ __( 'PDF.js Options', 'pdf-js-block' ) }>
					<PanelRow>
						<ToggleControl
							label={ __(
								'Show Download Option',
								'pdf-js-block'
							) }
							help={
								props.attributes.showDownload
									? __( 'Yes', 'pdf-js-block' )
									: __( 'No', 'pdf-js-block' )
							}
							checked={ props.attributes.showDownload }
							onChange={ onToggleDownload }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Print Option', 'pdf-js-block' ) }
							help={
								props.attributes.showPrint
									? __( 'Yes', 'pdf-js-block' )
									: __( 'No', 'pdf-js-block' )
							}
							checked={ props.attributes.showPrint }
							onChange={ onTogglePrint }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __(
								'Show Fullscreen Option',
								'pdf-js-block'
							) }
							help={
								props.attributes.showFullscreen
									? __( 'Yes', 'pdf-js-block' )
									: __( 'No', 'pdf-js-block' )
							}
							checked={ props.attributes.showFullscreen }
							onChange={ onToggleFullscreen }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __(
								'Viewer Height (pixels)',
								'pdf-js-block'
							) }
							value={ props.attributes.viewerHeight }
							onChange={ onHeightChange }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __(
								'Viewer Width (pixels)',
								'pdf-js-block'
							) }
							help="By default 0 will be 100%."
							value={ props.attributes.viewerWidth }
							onChange={ onWidthChange }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<div className="pdfjs-wrapper components-placeholder" key="i2">
				<div>
					<strong>{ __( 'PDF.js Embed', 'pdf-js-block' ) }</strong>
				</div>
				{ props.attributes.imageURL ? (
					<div className="pdfjs-upload-wrapper">
						<div>
							<span className="dashicons dashicons-media-document"></span>
							<span className="pdfjs-title">
								{ props.attributes.imgTitle
									? props.attributes.imgTitle
									: props.attributes.imageURL }
							</span>
						</div>
						{ props.isSelected ? (
							<Button className="button" onClick={ onRemoveImg }>
								{ __( 'Remove PDF', 'pdf-js-block' ) }
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
									{ __( 'Choose PDF', 'pdf-js-block' ) }
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
				[pdfjs-viewer viewer_width=
				{ props.attributes.viewerWidth !== 0
					? props.attributes.viewerWidth
					: '100%' }{ ' ' }
				viewer_height={ props.attributes.viewerHeight } url=
				{ props.attributes.imageURL } download=
				{ props.attributes.showDownload.toString() } print=
				{ props.attributes.showPrint.toString() } fullscreen=
				{ props.attributes.showFullscreen.toString() }]
			</div>
		);
	},
} );
