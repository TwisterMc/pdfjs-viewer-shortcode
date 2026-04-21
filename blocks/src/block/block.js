const { __ } = wp.i18n;

import './editor.scss';
import './style.scss';

const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls } = wp.blockEditor;

const {
	Button,
	PanelRow,
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
	TextControl,
} = wp.components;

const defaultHeight = 800;
const defaultWidth = 0;

const ALLOWED_MEDIA_TYPES = ['application/pdf'];

// Safe access to localized options with fallbacks
const pdfjsOpts = window.pdfjs_options || {};

registerBlockType('pdfjsblock/pdfjs-embed', {
	title: __('Embed PDF.js Viewer', 'pdfjs-viewer-shortcode'),
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
		externalURL: {
			type: 'string',
		},
		showDownload: {
			type: 'boolean',
			default: !!pdfjsOpts.pdfjs_download_button,
		},
		showPrint: {
			type: 'boolean',
			default: !!pdfjsOpts.pdfjs_print_button,
		},
		showFullscreen: {
			type: 'boolean',
			default: !!pdfjsOpts.pdfjs_fullscreen_link,
		},
		openFullscreen: {
			type: 'boolean',
			default: !!pdfjsOpts.pdfjs_fullscreen_link_target,
		},
		fullscreenText: {
			type: 'string',
			default: pdfjsOpts.pdfjs_fullscreen_link_text || 'View Fullscreen',
		},
		viewerHeight: {
			type: 'number',
			default: pdfjsOpts.pdfjs_embed_height
				? Number(pdfjsOpts.pdfjs_embed_height)
				: 800,
		},
		viewerWidth: {
			type: 'number',
			default: pdfjsOpts.pdfjs_embed_width
				? Number(pdfjsOpts.pdfjs_embed_width)
				: 0,
		},
		viewerScale: {
			type: 'string',
			default:
				pdfjsOpts.pdfjs_viewer_scale &&
				pdfjsOpts.pdfjs_viewer_scale !== '0'
					? pdfjsOpts.pdfjs_viewer_scale
					: 'auto',
		},
	},
	keywords: [__('PDF Selector', 'pdfjs-viewer-shortcode')],

	edit(props) {
		const onFileSelect = (img) => {
			props.setAttributes({
				imageURL: img.url,
				imgID: img.id,
				imgTitle: img.title,
			});
		};

		const onRemoveImg = () => {
			props.setAttributes({
				imageURL: null,
				imgID: null,
				imgTitle: null,
			});
		};

		const onExternalURLChange = (value) => {
			props.setAttributes({
				externalURL: value,
			});
		};

		const onToggleDownload = (value) => {
			props.setAttributes({
				showDownload: value,
			});
		};

		const onTogglePrint = (value) => {
			props.setAttributes({
				showPrint: value,
			});
		};

		const onToggleFullscreen = (value) => {
			props.setAttributes({
				showFullscreen: value,
			});
		};

		const onToggleOpenFullscreen = (value) => {
			props.setAttributes({
				openFullscreen: value,
			});
		};

		const onHeightChange = (value) => {
			// handle the reset button
			if (undefined === value) {
				value = defaultHeight;
			}
			props.setAttributes({
				viewerHeight: value,
			});
		};

		const onWidthChange = (value) => {
			// handle the reset button
			if (undefined === value) {
				value = defaultWidth;
			}
			props.setAttributes({
				viewerWidth: value,
			});
		};

		const onFullscreenTextChange = (value) => {
			// Remove potentially dangerous HTML/scripts from user text input
			value = value.replace(/<script[^>]*>.*?<\/script>/gi, ''); // Remove script tags
			value = value.replace(/on\w+\s*=/gi, ''); // Remove event handlers
			value = value.replace(/<\/?[^>]*>/g, ''); // Remove other HTML tags
			props.setAttributes({
				fullscreenText: value,
			});
		};

		const onScaleChange = (value) => {
			props.setAttributes({
				viewerScale: value,
			});
		};

		// Build viewer URL for editor live preview
		const viewerBase = pdfjsOpts.pdfjs_viewer_url || null;

		// Use external URL if provided, otherwise use library URL
		const effectiveURL =
			props.attributes.externalURL || props.attributes.imageURL;
		const effectiveID = props.attributes.externalURL
			? ''
			: props.attributes.imgID;

		let iframeSrc = '';
		if (effectiveURL && viewerBase) {
			const params = new URLSearchParams({
				file: effectiveURL,
				attachment_id: effectiveID || '',
				dButton: props.attributes.showDownload ? 'true' : 'false',
				pButton: props.attributes.showPrint ? 'true' : 'false',
				oButton: 'false',
				editButtons:
					pdfjsOpts.pdfjs_editing_buttons === 'on' ? 'true' : 'false',
				sButton:
					pdfjsOpts.pdfjs_search_button === 'on' ? 'true' : 'false',
				v: pdfjsOpts.pdfjs_plugin_version || '',
			});
			const zoom = props.attributes.viewerScale || 'auto';
			const pagemode = pdfjsOpts.pdfjs_viewer_pagemode || 'none';
			const hash = `zoom=${encodeURIComponent(
				zoom
			)}&pagemode=${encodeURIComponent(pagemode)}`;
			iframeSrc = `${viewerBase}?${params.toString()}#${hash}`;
		}

		const viewerWidthAttr =
			props.attributes.viewerWidth === undefined ||
			props.attributes.viewerWidth === 0
				? '100%'
				: `${props.attributes.viewerWidth}px`;

		const viewerHeightAttr = props.attributes.viewerHeight
			? `${props.attributes.viewerHeight}px`
			: `${defaultHeight}px`;

		return [
			<InspectorControls key="i1">
				<PanelBody title={__('PDF Source', 'pdfjs-viewer-shortcode')}>
					{pdfjsOpts.pdfjs_allow_external_domains === 'on' && (
						<PanelRow>
							<TextControl
								label={__(
									'External PDF URL',
									'pdfjs-viewer-shortcode'
								)}
								help={__(
									'Enter the full URL to a PDF from an allowed domain',
									'pdfjs-viewer-shortcode'
								)}
								value={props.attributes.externalURL || ''}
								onChange={onExternalURLChange}
								placeholder="https://cdn.example.com/document.pdf"
								aria-label={__(
									'External PDF URL',
									'pdfjs-viewer-shortcode'
								)}
							/>
						</PanelRow>
					)}
				</PanelBody>
				<PanelBody
					title={__('PDF.js Options', 'pdfjs-viewer-shortcode')}
				>
					<PanelRow>
						<ToggleControl
							label={__(
								'Show Save Option',
								'pdfjs-viewer-shortcode'
							)}
							help={
								props.attributes.showDownload
									? __('Yes', 'pdfjs-viewer-shortcode')
									: __('No', 'pdfjs-viewer-shortcode')
							}
							checked={props.attributes.showDownload}
							onChange={onToggleDownload}
							aria-label={__(
								'Show Save Option',
								'pdfjs-viewer-shortcode'
							)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__(
								'Show Print Option',
								'pdfjs-viewer-shortcode'
							)}
							help={
								props.attributes.showPrint
									? __('Yes', 'pdfjs-viewer-shortcode')
									: __('No', 'pdfjs-viewer-shortcode')
							}
							checked={props.attributes.showPrint}
							onChange={onTogglePrint}
							aria-label={__(
								'Show Print Option',
								'pdfjs-viewer-shortcode'
							)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__(
								'Show Fullscreen Option',
								'pdfjs-viewer-shortcode'
							)}
							help={
								props.attributes.showFullscreen
									? __('Yes', 'pdfjs-viewer-shortcode')
									: __('No', 'pdfjs-viewer-shortcode')
							}
							checked={props.attributes.showFullscreen}
							onChange={onToggleFullscreen}
							aria-label={__(
								'Show Fullscreen Option',
								'pdfjs-viewer-shortcode'
							)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__(
								'Open Fullscreen in new tab?',
								'pdfjs-viewer-shortcode'
							)}
							help={
								props.attributes.openFullscreen
									? __('Yes', 'pdfjs-viewer-shortcode')
									: __('No', 'pdfjs-viewer-shortcode')
							}
							checked={props.attributes.openFullscreen}
							onChange={onToggleOpenFullscreen}
							aria-label={__(
								'Open Fullscreen in new tab?',
								'pdfjs-viewer-shortcode'
							)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Fullscreen Text"
							value={props.attributes.fullscreenText}
							onChange={onFullscreenTextChange}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('Zoom Level', 'pdfjs-viewer-shortcode')}>
					<SelectControl
						label={__('Zoom Level', 'pdfjs-viewer-shortcode')}
						value={props.attributes.viewerScale}
						options={[
							{
								label: __('Auto', 'pdfjs-viewer-shortcode'),
								value: 'auto',
							},
							{
								label: __(
									'Actual Size',
									'pdfjs-viewer-shortcode'
								),
								value: 'page-actual',
							},
							{
								label: __('Fit Page', 'pdfjs-viewer-shortcode'),
								value: 'page-fit',
							},
							{
								label: __(
									'Fit Width',
									'pdfjs-viewer-shortcode'
								),
								value: 'page-width',
							},
							{ label: '50%', value: '50' },
							{ label: '75%', value: '75' },
							{ label: '100%', value: '100' },
							{ label: '125%', value: '125' },
							{ label: '150%', value: '150' },
							{ label: '200%', value: '200' },
						]}
						onChange={onScaleChange}
					/>
				</PanelBody>
				<PanelBody title={__('Embed Height', 'pdfjs-viewer-shortcode')}>
					<RangeControl
						label={__(
							'Viewer Height (pixels)',
							'pdfjs-viewer-shortcode'
						)}
						aria-label={__(
							'Set the PDF viewer height in pixels. Minimum 0, maximum 5000 pixels.',
							'pdfjs-viewer-shortcode'
						)}
						value={props.attributes.viewerHeight}
						onChange={onHeightChange}
						min={0}
						max={5000}
						allowReset={true}
						initialPosition={defaultHeight}
					/>
				</PanelBody>
				<PanelBody title={__('Embed Width', 'pdfjs-viewer-shortcode')}>
					<RangeControl
						label={__(
							'Viewer Width (pixels)',
							'pdfjs-viewer-shortcode'
						)}
						aria-label={__(
							'Set the PDF viewer width in pixels. Use 0 for 100% width. Minimum 0, maximum 5000 pixels.',
							'pdfjs-viewer-shortcode'
						)}
						help="By default 0 will be 100%."
						value={props.attributes.viewerWidth}
						onChange={onWidthChange}
						min={0}
						max={5000}
						allowReset={true}
						initialPosition={defaultWidth}
					/>
				</PanelBody>
			</InspectorControls>,
			<div className="pdfjs-wrapper" key="i2">
				<div className="pdfjs-header">
					<strong>
						{__('PDF.js Embed', 'pdfjs-viewer-shortcode')}
					</strong>
					&nbsp; - &nbsp;
					<span className="pdfjs-title">
						{props.attributes.externalURL
							? props.attributes.externalURL
							: props.attributes.imgTitle
								? props.attributes.imgTitle
								: 'Choose a PDF file'}
					</span>
					&nbsp; - &nbsp;
					{props.attributes.imageURL ||
					props.attributes.externalURL ? (
						<Button
							className="pdfjs-button"
							onClick={onRemoveImg}
							aria-label={__(
								'Remove the current PDF file',
								'pdfjs-viewer-shortcode'
							)}
						>
							{__('Remove PDF', 'pdfjs-viewer-shortcode')}
						</Button>
					) : (
						<MediaUpload
							onSelect={onFileSelect}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={props.attributes.imgID}
							render={({ open }) => (
								<Button
									className="pdfjs-button"
									onClick={open}
									aria-label={__(
										'Open media library to choose a PDF file',
										'pdfjs-viewer-shortcode'
									)}
								>
									{__(
										'Choose a PDF file',
										'pdfjs-viewer-shortcode'
									)}
								</Button>
							)}
						/>
					)}
				</div>
				{props.attributes.imageURL ? (
					<div style={{ width: '100%' }}>
						{/* Editor preview iframe */}
						<div
							className="pdfjs-preview"
							style={{ maxWidth: '100%' }}
							role="region"
							aria-label={__(
								'PDF Preview',
								'pdfjs-viewer-shortcode'
							)}
						>
							<div className="pdfjs-preview-link">
								{props.attributes.showFullscreen.toString() ===
									'true' && props.attributes.fullscreenText}
							</div>
							<iframe
								src={iframeSrc}
								width={viewerWidthAttr}
								height={
									props.attributes.viewerHeight ||
									defaultHeight
								}
								className="pdfjs-iframe-editor"
								title={
									props.attributes.imgTitle ||
									__('PDF Preview', 'pdfjs-viewer-shortcode')
								}
								aria-label={
									props.attributes.imgTitle
										? `${__(
												'PDF document preview',
												'pdfjs-viewer-shortcode'
											)}: ${props.attributes.imgTitle}`
										: __(
												'PDF document preview',
												'pdfjs-viewer-shortcode'
											)
								}
								tabIndex="0"
								style={{
									border: '1px solid #ddd',
									maxWidth: '100%',
								}}
							/>
						</div>
					</div>
				) : null}
			</div>,
		];
	},

	save(props) {
		// Use external URL if provided, otherwise use library URL
		const effectiveURL =
			props.attributes.externalURL || props.attributes.imageURL;
		const effectiveID = props.attributes.externalURL
			? ''
			: props.attributes.imgID;

		return (
			<div className="pdfjs-wrapper">
				{`[pdfjs-viewer attachment_id=${effectiveID} url=${effectiveURL} viewer_width=${
					props.attributes.viewerWidth !== undefined
						? props.attributes.viewerWidth
						: defaultWidth
				} viewer_height=${
					props.attributes.viewerHeight !== undefined
						? props.attributes.viewerHeight
						: defaultHeight
				} download=${props.attributes.showDownload.toString()} print=${props.attributes.showPrint.toString()} fullscreen=${props.attributes.showFullscreen.toString()} fullscreen_target=${props.attributes.openFullscreen.toString()} fullscreen_text="${
					props.attributes.fullscreenText
				}"]`}
			</div>
		);
	},
});
