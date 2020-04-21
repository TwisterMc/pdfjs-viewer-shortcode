import edit from './edit';

const { __ } = wp.i18n;

const { InspectorControls, InnerBlocks } = wp.editor;

const ALLOWED_MEDIA_TYPES = [ 'text' ];

const { PanelBody, PanelRow, TextControl, RangeControl } = wp.components;

const { registerBlockType } = wp.blocks;

const {
	RichText,
} = wp.editor;


registerBlockType(
	"pdfjsblock/pdfjs-embed",
	{
		title: __( 'Embed PDF.js Viewer', 'image-selector-example' ),
		icon: 'format-image',
		category: 'common',
		keywords: [
			__( 'Image Selector', 'image-selector-example' ),
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

		save() {
			return (
				<InnerBlocks.Content />
			);
		},
	} );
