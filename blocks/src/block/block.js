const { __ } = wp.i18n;

import { addFilter } from '@wordpress/hooks';
import { Button } from '@wordpress/components';
const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } = wp.editor;

const replaceMediaUpload = () => MediaUpload;

const ALLOWED_MEDIA_TYPES = [ 'text' ];

addFilter(
	'editor.MediaUpload',
	'core/edit-post/components/media-upload/replace-media-upload',
	replaceMediaUpload
);

const { registerBlockType } = wp.blocks;

const {
	RichText,
} = wp.editor;

function MyMediaUploader() {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => console.log( 'selected ' + media.length ) }
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ mediaId }
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
			/>
		</MediaUploadCheck>
	);
}


registerBlockType(
	"pdfjsblock/pdfjs-embed",
	{
		title: "Embed PDF",
		icon: "editor-paragraph",
		category: "layout",
		attributes: {
			content: {
				type: "string"
			},
		},
		edit: function(props) {
			const { setAttributes } = props;

			const {
				content,
			} = props.attributes;

			return (
				<div>
					<RichText
						tagName="div"
						value={content}
						placeholder="Your content here..."
						keepPlaceholderOnFocus={true}
						onChange={content => setAttributes({ content })}
						className={"pdfjs-text-area"}
					/>
				</div>
			);
		},

		save: function(props) {
			const {
				content,
			} = props.attributes;

			return (
				<div>
					<RichText.Content
						className={"pdfjs-text-area"}
						tagName="div"
						value={content}
					/>
				</div>
			);
		}
	}
);
