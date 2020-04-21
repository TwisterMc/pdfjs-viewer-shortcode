const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { MediaUpload }       = wp.editor;
const { Button }            = wp.components;

registerBlockType(
	"pdfjsblock/pdfjs-embed",
	{
		title: __( 'Embed PDF.js Viewer', 'image-selector-example' ),
		icon: 'format-image',
		category: 'common',
		attributes: {
			imageURL: {
				type: 'string',
				source: 'attribute',
				attribute: 'src',
				selector: 'img',
			},
			imgID: {
				type: 'number'
			},
			imgAlt: {
				type: 'string',
				source: 'attribute',
				attribute: 'alt',
				selector: 'img'
			}
		},
		keywords: [
			__( 'PDF Selector', 'image-selector-example' ),
		],

		edit: function ( props ) {

			const onFileSelect = (img) => {
				props.setAttributes({
					imageURL: img.url,
					imgID: img.id,
					imgAlt: img.alt,
				});
			}

			const onRemoveImg = () => {
				props.setAttributes({
					imageURL: null,
					imgID: null,
					imgAlt: null,
				});
			}

			return (
				<div className="media-wrapper">
					{
						(props.attributes.imageURL) ? (
							<div className="img-upload-wrapper">
								<img
									src={props.attributes.imageURL}
									alt={props.attributes.imgAlt}
								/>
								{(props.isSelected) ? (
									<Button
										className="button"
										onClick={onRemoveImg}
									>Remove</Button>
								) : null }
							</div>
						) : (
							<MediaUpload
								onSelect={onFileSelect}
								value={props.attributes.imgID}
								render={({open}) =>
								<Button
									className="button"
									onClick={open}
									>Open Library</Button>
								}
							/>
						)
					}

				</div>
			)
		},

		save: function ( props ) {
			return (
				<div classNme="img-wrapper">
					<img
						src={props.attributes.imageURL}
						alt={props.attributes.imgAlt}
					/>
				</div>
			)
		}
	} );
