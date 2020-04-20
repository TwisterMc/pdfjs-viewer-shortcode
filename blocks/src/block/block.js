const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const {
	InspectorControls,
	RichText,
	AlignmentToolbar,
	BlockControls,
	PanelColorSettings
} = wp.editor;

const { PanelBody, PanelRow, TextControl, RangeControl } = wp.components;

registerBlockType("pdfjsblock/pdfjs-textarea", {
	title: "PDF JS Text Area",
	icon: "editor-paragraph",
	category: "layout",
	attributes: {
		content: {
			type: "string"
		},
		alignment: {
			type: "string",
			default: "none"
		},
		backgroundColor: {
			type: "string"
		},
		textColor: {
			type: "string"
		},
		textSize: {
			type: "number"
		},
		className: {
			type: "string",
			default: ""
		}
	},
	edit: function(props) {
		const { setAttributes } = props;
		const {
			content,
			alignment,
			backgroundColor,
			textColor,
			textSize,
			className
		} = props.attributes;

		console.log(alignment);

		// return (
		// 	<div
		// 		style={{
		// 			textAlign: alignment,
		// 			backgroundColor: backgroundColor,
		// 			color: textColor,
		// 			fontSize: textSize ? `${textSize}px` : null
		// 		}}
		// 	>
		// 		{!!focus && (
		// 			<BlockControls>
		// 				<AlignmentToolbar
		// 					value={content}
		// 					onChange={alignment => setAttributes({ alignment })}
		// 				/>
		// 			</BlockControls>
		// 		)}
		// 		<InspectorControls>
		// 			<PanelBody title={__("Block Settings", "pdfjsblock")}>
		// 				<PanelColorSettings
		// 					title={__("Background Color", "pdfjsblock")}
		// 					colorSettings={[
		// 						{
		// 							value: backgroundColor,
		// 							onChange: backgroundColor =>
		// 								setAttributes({ backgroundColor: backgroundColor }),
		// 							label: __("Background Color")
		// 						}
		// 					]}
		// 				/>
		//
		// 				<PanelColorSettings
		// 					title={__("Text Color", "pdfjsblock")}
		// 					colorSettings={[
		// 						{
		// 							value: textColor,
		// 							onChange: textColor =>
		// 								setAttributes({ textColor: textColor }),
		// 							label: __("Text Color")
		// 						}
		// 					]}
		// 				/>
		// 				<PanelBody title={__("Sizes", "pdfjsblock")}>
		// 					<PanelRow>
		// 						<RangeControl
		// 							label={__("Text", "pdfjsblock")}
		// 							value={textSize}
		// 							min="8"
		// 							max="50"
		// 							onChange={textSize => setAttributes({ textSize: textSize })}
		// 						/>
		// 					</PanelRow>
		// 				</PanelBody>
		// 			</PanelBody>
		// 		</InspectorControls>
		// 		<RichText
		// 			tagName="div"
		// 			value={content}
		// 			placeholder="Your content here..."
		// 			keepPlaceholderOnFocus={true}
		// 			onChange={content => setAttributes({ content })}
		// 			className={"pdfjs-text-area" + className ? " " + className : ""}
		// 		/>
		// 	</div>
		// );
	},

	save: function(props) {
		const {
			content,
			alignment,
			backgroundColor,
			textColor = "white",
			textSize,
			className
		} = props.attributes;

		// return (
		// 	<div
		// 		style={{
		// 			textAlign: alignment,
		// 			backgroundColor: backgroundColor,
		// 			color: textColor,
		// 			fontSize: textSize ? `${textSize}px` : null
		// 		}}
		// 	>
		// 		<RichText.Content
		// 			className={"pdfjs-text-area" + className ? " " + className : ""}
		// 			tagName="div"
		// 			value={content}
		// 		/>
		// 	</div>
		// );
	}
});
