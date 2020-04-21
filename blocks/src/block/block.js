const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { MediaUpload }       = wp.editor;
const { Button }            = wp.components;
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

			return (
				<div className="media-wrapper">
					<label><strong>PDF.js Embed</strong></label>
					{
						(props.attributes.imageURL) ? (
							<div className="img-upload-wrapper">
								<div>
									<span className="dashicons dashicons-media-document"></span>
									{ props.attributes.imgTitle ? props.attributes.imgTitle : props.attributes.imageURL }
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
			)
		},

		save: function ( props ) {
			return (
			<div className="img-wrapper">
				[pdfjs-viewer url={props.attributes.imageURL} download=false print=false]
			</div>
			)
		}
	} );
