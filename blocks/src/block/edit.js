// edit.js

// Load dependencies
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.editor;
const { PanelBody, Button, ResponsiveWrapper, Spinner } = wp.components;
const { compose } = wp.compose;
const { withSelect } = wp.data;

const ALLOWED_MEDIA_TYPES = [ 'application/pdf' ];

class ImageSelectorEdit extends Component {
	render() {
		const { attributes, setAttributes, bgImage } = this.props;
		const { bgImageId } = attributes;
		const { bgImageURL }  = attributes;
		const instructions = <p>{ __( 'To edit the PDF, you need permission to upload media.', 'image-selector-example' ) }</p>;

		if ( bgImage && bgImage.source_url ) {
			setAttributes( {
				bgImageURL: bgImage.source_url
			} );
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
						title={ __( 'PDF Settings', 'image-selector-example' ) }
						initialOpen={ true }
					>
						<div className="wp-block-image-selector-example-image">
							<MediaUploadCheck fallback={ instructions }>
								<MediaUpload
									title={ __( 'PDF', 'image-selector-example' ) }
									onSelect={ onUpdateImage }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ bgImageId }
									render={ ( { open } ) => (
										<Button
											className={ ! bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
											onClick={ open }>
											{ ! bgImageId && ( __( 'Choose PDF', 'image-selector-example' ) ) }
											{ !! bgImageId && ! bgImage && <Spinner /> }
											{ !! bgImageId && bgImage &&
											<ResponsiveWrapper
												naturalWidth={ bgImage.media_details.width }
												naturalHeight={ bgImage.media_details.height }
											>
												<img src={ bgImage.source_url } alt={ __( 'PDF', 'image-selector-example' ) } />
											</ResponsiveWrapper>
											}
										</Button>
									) }
								/>
							</MediaUploadCheck>
							{ !! bgImageId && bgImage &&
							<MediaUploadCheck>
								<MediaUpload
									title={ __( 'Select PDF', 'image-selector-example' ) }
									onSelect={ onUpdateImage }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ bgImageId }
									render={ ( { open } ) => (
										<Button onClick={ open } isDefault isLarge>
											{ __( 'Replace PDF', 'image-selector-example' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
							}
							{ !! bgImageId &&
							<MediaUploadCheck>
								<Button onClick={ onRemoveImage } isLink isDestructive>
									{ __( 'Remove PDF', 'image-selector-example' ) }
								</Button>
							</MediaUploadCheck>
							}
						</div>
					</PanelBody>
				</InspectorControls>
				<div>{ bgImageURL }</div>
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
