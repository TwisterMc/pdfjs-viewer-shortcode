// edit.js

// Load dependencies
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } = wp.editor;
const { PanelBody, Button, ResponsiveWrapper, Spinner } = wp.components;
const { compose } = wp.compose;
const { withSelect } = wp.data;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

class ImageSelectorEdit extends Component {
	render() {
		const { attributes, setAttributes, bgImage, className } = this.props;
		const { bgImageId } = attributes;
		const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'image-selector-example' ) }</p>;

		let styles = {};
		if ( bgImage && bgImage.source_url ) {
			styles = { backgroundImage: `url(${ bgImage.source_url })` };
		}

		const onUpdateImage = ( image ) => {
			setAttributes( {
				bgImageId: image.id,
			} );
		};

		const onRemoveImage = () => {
			setAttributes( {
				bgImageId: undefined,
			} );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Background settings', 'image-selector-example' ) }
						initialOpen={ true }
					>
						<div className="wp-block-image-selector-example-image">
							<MediaUploadCheck fallback={ instructions }>
								<MediaUpload
									title={ __( 'Background image', 'image-selector-example' ) }
									onSelect={ onUpdateImage }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ bgImageId }
									render={ ( { open } ) => (
										<Button
											className={ ! bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
											onClick={ open }>
											{ ! bgImageId && ( __( 'Set background image', 'image-selector-example' ) ) }
											{ !! bgImageId && ! bgImage && <Spinner /> }
											{ !! bgImageId && bgImage &&
											<ResponsiveWrapper
												naturalWidth={ bgImage.media_details.width }
												naturalHeight={ bgImage.media_details.height }
											>
												<img src={ bgImage.source_url } alt={ __( 'Background image', 'image-selector-example' ) } />
											</ResponsiveWrapper>
											}
										</Button>
									) }
								/>
							</MediaUploadCheck>
							{ !! bgImageId && bgImage &&
							<MediaUploadCheck>
								<MediaUpload
									title={ __( 'Background image', 'image-selector-example' ) }
									onSelect={ onUpdateImage }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ bgImageId }
									render={ ( { open } ) => (
										<Button onClick={ open } isDefault isLarge>
											{ __( 'Replace background image', 'image-selector-example' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
							}
							{ !! bgImageId &&
							<MediaUploadCheck>
								<Button onClick={ onRemoveImage } isLink isDestructive>
									{ __( 'Remove background image', 'image-selector-example' ) }
								</Button>
							</MediaUploadCheck>
							}
						</div>
					</PanelBody>
				</InspectorControls>
				<div
					className={ className }
					style={ styles }
				>{ image.id }
					<InnerBlocks />
				</div>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const { bgImageId } = props.attributes;

		return {
			bgImage: bgImageId ? getMedia( bgImageId ) : null,
		};
	} ),
)( ImageSelectorEdit );
