const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const {
	RichText,
} = wp.editor;


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
