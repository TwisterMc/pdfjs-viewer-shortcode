const { __ } = wp.i18n;

import "./style.scss";

const { registerBlockType }                                       = wp.blocks;
const { MediaUpload, InspectorControls }                          = wp.editor;
const { Button, PanelRow, PanelBody, ToggleControl, TextControl } = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'application/pdf' ];

registerBlockType("pdfjsblock/pdfjs-embed", {
	title: __( 'Embed PDF.js Viewer', 'pdf-js-block' ),
	icon: 'media-document',
	category: 'common',
	attributes: {
		imageURL: {
			type: 'string',
		},
		imgID: {
			type: 'number'
		},
		imgTitle: {
			type: 'string',
			default: 'PDF File'
		},
		showDownload: {
			type: 'boolean',
			default: true
		},
		showPrint: {
			type: 'boolean',
			default: true
		},
		showFullscreen: {
			type: 'boolean',
			default: true
		},
		viewerHeight: {
			type: 'number',
			default: 1360
		},
		viewerWidth: {
			type: 'number',
			default: 0
		}
	},
	keywords: [
		__( 'PDF Selector', 'pdf-js-block' ),
	],

	edit: function ( props ) {

		const onFileSelect = (img) => {
			props.setAttributes({
				imageURL: img.url,
				imgID: img.id,
				imgTitle: img.title,
			});
		}

		const onRemoveImg = () => {
			props.setAttributes({
				imageURL: null,
				imgID: null,
				imgTitle: null,
			});
		}

		const onToggleDownload = ( value ) => {
			props.setAttributes({
				showDownload: value,
			});
		}

		const onTogglePrint = ( value ) => {
			props.setAttributes({
				showPrint: value,
			});
		}

		const onToggleFullscreen = ( value ) => {
			props.setAttributes({
				showFullscreen: value,
			});
		}

		const onHeightChange = ( value ) => {
			props.setAttributes({
				viewerHeight: value,
			});
		}

		const onWidthChange = ( value ) => {
			props.setAttributes({
				viewerWidth: value,
			});
		}

		return [
			<InspectorControls key="i1">
				<PanelBody title={ __( 'PDF.js Options', 'pdf-js-block' ) } >
					<PanelRow>
						<ToggleControl
							label="Show Download Option"
							help={props.attributes.showDownload ? "Yes" : "No"}
							checked={props.attributes.showDownload}
							onChange={onToggleDownload}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Show Print Option"
							help={props.attributes.showPrint ? "Yes" : "No"}
							checked={props.attributes.showPrint}
							onChange={onTogglePrint}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Show Fullscreen Option"
							help={props.attributes.showFullscreen ? "Yes" : "No"}
							checked={props.attributes.showFullscreen}
							onChange={onToggleFullscreen}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Viewer Height"
							value={props.attributes.viewerHeight}
							onChange={onHeightChange}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Viewer Width"
							help="By default 0 will be 100%."
							value={props.attributes.viewerWidth}
							onChange={onWidthChange}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<div className="pdfjs-wrapper components-placeholder" key="i2">
				<label><strong>PDF.js Embed</strong></label>
				{
					(props.attributes.imageURL) ? (
						<div className="pdfjs-upload-wrapper">
							<div>
								<span className="dashicons dashicons-media-document"></span>
								<span className="pdfjs-title">{ props.attributes.imgTitle ? props.attributes.imgTitle : props.attributes.imageURL }</span>
							</div>
							{(props.isSelected) ? (
								<Button
									className="button"
									onClick={onRemoveImg}
								>Remove PDF</Button>
							) : null }
						</div>
					) : (
						<div>
							<MediaUpload
							onSelect={onFileSelect}
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={props.attributes.imgID}
							render={({open}) =>
							<Button
								className="button"
								onClick={open}
								>Choose PDF</Button>
							}
							/>
						</div>
					)
				}

			</div>
		];
	},

	save: function ( props ) {
		return (
		<div className="pdfjs-wrapper">
			[pdfjs-viewer viewer_width={ (props.attributes.viewerWidth != 0) ? props.attributes.viewerWidth : '100%' } viewer_height={props.attributes.viewerHeight} url={props.attributes.imageURL} download={props.attributes.showDownload.toString()} print={props.attributes.showPrint.toString()} fullscreen={props.attributes.showFullscreen.toString()}]
		</div>
		)
	}
} );
