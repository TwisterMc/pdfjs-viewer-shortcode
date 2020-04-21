import edit from './edit';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const Block = registerBlockType(
	"pdfjsblock/pdfjs-embed",
	{
		title: __( 'Embed PDF.js Viewer', 'image-selector-example' ),
		icon: 'format-image',
		category: 'common',
		keywords: [
			__( 'PDF Selector', 'image-selector-example' ),
		],

		supports: {
			align: [ 'full' ],
		},

		attributes: {
			bgImageId: {
				type: 'number',
			},
		},

		edit,

		save( props ) {
			return (
				<div>{ props.attributes.bgImageURL }</div>
			);
		},
	} );

export default compose(
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const { bgImageId } = props.attributes;

		return {
			bgImage: bgImageId ? getMedia( bgImageId ) : null,
		};
	} ),
)( Block );

