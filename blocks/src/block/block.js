const { __ } = wp.i18n;

import "./style.scss";

const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls }       = wp.editor;
const { Button, PanelRow, PanelBody, ToggleControl }            = wp.components;

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
			hideDownload: {
				type: 'boolean',
				default: false
			},
			hidePrint: {
				type: 'boolean',
				default: false
			},
			hideFullscreen: {
				type: 'boolean',
				default: false
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

			const onToggleDownload = ( item ) => {
				props.setAttributes({
					hideDownload: item,
				});
			}

			const onTogglePrint = ( item ) => {
				props.setAttributes({
					hidePrint: item,
				});
			}

			const onToggleFullscreen = ( item ) => {
				props.setAttributes({
					hideFullscreen: item,
				});
			}

			return [
				<InspectorControls key="i1">
					<PanelBody title={ __( 'PDF.js Options', 'pdf-js-block' ) } >
						<PanelRow>
							<ToggleControl
								label="Hide Download Option"
								help={props.attributes.hideDownload ? "Yes" : "No"}
								checked={props.attributes.hideDownload}
								onChange={onToggleDownload}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Hide Print Option"
								help={props.attributes.hidePrint ? "Yes" : "No"}
								checked={props.attributes.hidePrint}
								onChange={onTogglePrint}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Hide Fullscreen Option"
								help={props.attributes.hideFullscreen ? "Yes" : "No"}
								checked={props.attributes.hideFullscreen}
								onChange={onToggleFullscreen}
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
				[pdfjs-viewer url={props.attributes.imageURL} download={props.attributes.hideDownload} print={props.attributes.hidePrint} fullscreen={props.attributes.hideFullscreen}]
			</div>
			)
		}
	} );
