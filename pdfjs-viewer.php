<?php
/**
Plugin Name: PDFjs Viewer
Plugin URI: http://byterevel.com/
Description: Embed PDFs with the gorgeous PDF.js viewer
Version: 1.5.4
Author: <a href="http://byterevel.com/">Ben Lawson</a>, <a href="https://www.twistermc.com/">Thomas McMahon</a>
Contributors: FalconerWeb, twistermc
License: GPLv2
 **/

// ==== Shortcode ====

// tell WordPress to register the pdfjs-viewer shortcode.
add_shortcode( 'pdfjs-viewer', 'pdfjs_handler' );

/**
 * Get the embed info from the shortcode.
 */
function pdfjs_handler( $incoming_from_post ) {

	// do not run this code on the admin screens
	if ( is_admin() || defined( 'REST_REQUEST' ) && REST_REQUEST ) {
		return;
	}

	// set defaults.
	$incoming_from_post = shortcode_atts(
		array(
			'url'             => plugins_url() . '/pdfjs-viewer-shortcode/pdf-loading-error.pdf',
			'viewer_height'   => '800px',
			'viewer_width'    => '100%',
			'fullscreen'      => 'true',
			'fullscreen_text' => 'View Fullscreen',
			'fullscreen_target' => 'false',
			'download'        => 'true',
			'print'           => 'true',
			'openfile'        => 'false',
			'zoom'            => 'auto',
		),
		$incoming_from_post
	);

	$pdfjs_output = pdfjs_generator( $incoming_from_post );

	// send back text to replace shortcode in post.
	return $pdfjs_output;
}

/**
 * Generate the PDF embed code.
 */
function pdfjs_generator( $incoming_from_handler ) {

	$plugin_version = '1.5.4';

	$viewer_base_url   = plugins_url() . '/pdfjs-viewer-shortcode/pdfjs/web/viewer.php';
	$file_name         = $incoming_from_handler['url'];
	$viewer_height     = $incoming_from_handler['viewer_height'];
	$viewer_width      = $incoming_from_handler['viewer_width'];
	$fullscreen        = $incoming_from_handler['fullscreen'];
	$fullscreen_text   = $incoming_from_handler['fullscreen_text'];
	$fullscreen_target = $incoming_from_handler['fullscreen_target'];
	$download          = $incoming_from_handler['download'];
	$print             = $incoming_from_handler['print'];
	$openfile          = $incoming_from_handler['openfile'];
	$zoom              = $incoming_from_handler['zoom'];

	// if the PDF URL is missing the file extension, load error PDF.
	if ( ! strpos( $file_name, '.pdf' ) ) {
		$file_name = plugins_url() . '/pdfjs-viewer-shortcode/pdf-loading-error.pdf';
	}

	// check to see if the current value is in percent.
	if ( false === strpos( $viewer_width, '%' ) ) {
		// check to see if the current value is in pixels.
		if ( false === strpos( $viewer_width, 'px' ) ) {
			// check to see if it's 0.
			if ( '0' === $viewer_width ) {
				$viewer_width = '100%';
			} else {
				// add px extension.
				$viewer_width = $viewer_width . 'px';
			}
		}
	}

	// check to see if the current value is in percent.
	if ( false === strpos( $viewer_height, '%' ) ) {
		// check to see if the current value is in pixels.
		if ( false === strpos( $viewer_height, 'px' ) ) {
			// check to see if it's 0.
			if ( '0' === $viewer_height ) {
				$viewer_height = '800';
			} else {
				// add px extension.
				$viewer_height = $viewer_height . 'px';
			}
		}
	}

	if ( 'true' !== $download ) {
		$download = 'false';
	}

	if ( 'true' !== $print ) {
		$print = 'false';
	}

	if ( 'true' !== $openfile ) {
		$openfile = 'false';
	}

	if ( 'true' === $fullscreen_target ) {
		$fullscreen_target = 'target="_blank"';
	} else {
		$fullscreen_target = '';
	}

	// Find the domain name and remove it from the URL to make Edge happy.

	// Check to see if a custom site domain is set elsewhere
	$site_url = apply_filters( 'pdfjs_set_custom_domain', '' );

	if ( ! $site_url ) {
		// Get the URL protocol.
		$is_secure = false;
		if ( isset( $_SERVER['HTTPS'] ) && 'on' === $_SERVER['HTTPS'] ) {
			$is_secure = true;
		} elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && 'https' === $_SERVER['HTTP_X_FORWARDED_PROTO'] || ! empty( $_SERVER['HTTP_X_FORWARDED_SSL'] ) && 'on' === $_SERVER['HTTP_X_FORWARDED_SSL'] ) {
			$is_secure = true;
		}
		// Put it with the slashes.
		$request_protocol = $is_secure ? 'https://' : 'http://';
		// Replace it in the URL.
		$site_url  = $request_protocol . $_SERVER['HTTP_HOST'];
	}

	$file_name = str_replace( $site_url, '', urldecode($file_name) );

	$final_url = $viewer_base_url . '?file=' . $file_name . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&v=' . $plugin_version . '#zoom=' . $zoom;

	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . $final_url . '" ' . $fullscreen_target . '>' . sanitize_text_field( urldecode( $fullscreen_text ) ) . '</a></div>';
	}
	$iframe_code = '<iframe width="' . $viewer_width . '" height="' . $viewer_height . '" src="' . $final_url . '" title="Embedded PDF" class="pdfjs-iframe"></iframe> ';

	return $fullscreen_link . $iframe_code;
}

// ==== Media Button ====

// priority is 12 since default button is 10.
add_action( 'media_buttons', 'pdfjs_media_button', 12 );

/**
 * Include the media button
 */
function pdfjs_media_button() {
	echo '<a href="#" id="insert-pdfjs" class="button">' . __( 'Add PDF', 'pdfjs-viewer' ) . '</a>';
}

add_action( 'wp_enqueue_media', 'include_pdfjs_media_button_js_file' );

/**
 * Include the media button JS button in the classic editor.
 */
function include_pdfjs_media_button_js_file() {
	if ( use_block_editor_for_post( get_post() ) !== 1 ) {
		wp_enqueue_script( 'media_button', plugins_url() . '/pdfjs-viewer-shortcode/pdfjs-media-button.js', array( 'jquery' ), '1.0', true );
	}
}

/**
 * Gutenberg
 */
function my_register_gutenberg_card_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Register our block script with WordPress
	wp_register_script (
		'gutenberg-pdfjs',
		plugins_url( '/blocks/dist/blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' )
	);

	$pdfjs_array = array(
		'pdfjs_download_button'        => get_option( 'pdfjs_download_button', 'on' ),
		'pdfjs_print_button'           => get_option( 'pdfjs_print_button', 'on' ),
		'pdfjs_fullscreen_link'        => get_option( 'pdfjs_fullscreen_link', 'on' ),
		'pdfjs_fullscreen_link_text'   => get_option( 'pdfjs_fullscreen_link_text', 'on' ),
		'pdfjs_fullscreen_link_target' => get_option( 'pdfjs_fullscreen_link_target', '' ),
		'pdfjs_embed_height'           => get_option( 'pdfjs_embed_height', 800 ),
		'pdfjs_embed_width'            => get_option( 'pdfjs_embed_width', 0 ),
		'pdfjs_viewer_scale'            => get_option( 'pdfjs_viewer_scale', 0 ),
	);
	wp_localize_script( 'gutenberg-pdfjs', 'pdfjs_options', $pdfjs_array );

	// Register our block's base CSS
	wp_register_style (
		'gutenberg-pdfjs',
		plugins_url( 'blocks/dist/style.css', __FILE__ ),
		''
	);

	register_block_type(
		'blocks/pdfjs-block',
		array(
			'editor_script' => 'gutenberg-pdfjs',
			'editor_style'  => 'gutenberg-pdfjs-edit-style',
			'style'         => 'gutenberg-pdfjs',
		)
	);
}

add_action( 'init', 'my_register_gutenberg_card_block' );

/**
 * Settings Page in WP Admin
 */
function pdfjs_register_settings() {
	register_setting( 'pdfjs_options_group', 'pdfjs_download_button', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_print_button', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link_text', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link_target', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_embed_height', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_embed_width', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_viewer_scale', 'pdfjs_callback' );
}
add_action( 'admin_init', 'pdfjs_register_settings' );

function pdfjs_register_options_page() {
	global $pdfjs_settings_page;
	$pdfjs_settings_page = add_options_page( 'PDFjs Settings', 'PDFjs Viewer', 'manage_options', 'pdfjs', 'pdfjs_options_page' );
}
add_action( 'admin_menu', 'pdfjs_register_options_page' );

// create the settings page
function pdfjs_options_page() {
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'PDFjs Viewer Options', 'pdfjs-viewer' ); ?></h1>
		<form method="post" action="options.php">

			<?php
			settings_fields( 'pdfjs_options_group' );

			$download_button      = get_option( 'pdfjs_download_button', 'on' );
			$print_button         = get_option( 'pdfjs_print_button', 'on' );
			$fullscreen_link      = get_option( 'pdfjs_fullscreen_link', 'on' );
			$fullscreen_link_text = get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' );
			$link_target          = get_option( 'pdfjs_fullscreen_link_target', '' );
			$embed_height         = get_option( 'pdfjs_embed_height', 800 );
			$embed_width          = get_option( 'pdfjs_embed_width', 0 );
			$viewer_scale         = get_option( 'pdfjs_viewer_scale', 'auto' );
			?>

			<table class="form-table" role="presentation">
				<h2 class="title"><?php esc_html_e( 'Defaults', 'pdfjs-viewer' ); ?></h2>
				<p>
					<?php esc_html_e( 'Defaults only affect new posts and existing posts when you edit them.', 'pdfjs-viewer' ); ?>
				</p>
				<p>
					<?php esc_html_e( 'When editing existing posts, it may cause existing blocks to have "unexpected or invalid content" upon editing. Don\'t worry, just click the three little dots, choose "Attempt Block Recovery", and everything should be working again. This "unexpected or invalid content" will not affect live content, just content in the editor.', 'pdfjs-viewer' ); ?>
				</p>
				<tr>
					<th scope="row"><label for="pdfjs_download_button"><?php esc_html_e( 'Show Download Button', 'pdfjs-viewer' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_download_button" name="pdfjs_download_button" <?php echo $download_button ? 'checked' : ''; ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_print_button"><?php esc_html_e( 'Show Print Button', 'pdfjs-viewer' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_print_button" name="pdfjs_print_button" <?php echo $print_button ? 'checked' : ''; ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_fullscreen_link"><?php esc_html_e( 'Show Fullscreen Link', 'pdfjs-viewer' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_fullscreen_link" name="pdfjs_fullscreen_link" <?php echo $fullscreen_link ? 'checked' : ''; ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_fullscreen_link_text"><?php esc_html_e( 'Fullscreen Link Text', 'pdfjs-viewer' ); ?></label></th>
					<td><input type="text" class="regular-text" id="pdfjs_fullscreen_link_text" name="pdfjs_fullscreen_link_text" value="<?php echo $fullscreen_link_text ? $fullscreen_link_text : 'View Fullscreen'; ?>" /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_fullscreen_link_target"><?php esc_html_e( 'Fullscreen Links in New Tabs', 'pdfjs-viewer' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_fullscreen_link_target" name="pdfjs_fullscreen_link_target" <?php echo $link_target ? 'checked' : ''; ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_embed_height"><?php esc_html_e( 'Embed Height', 'pdfjs-viewer' ); ?></label></th>
					<td><input type="number" class="regular-text" id="pdfjs_embed_height" name="pdfjs_embed_height" value="<?php echo $embed_height ? $embed_height : 800; ?>" /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_embed_width"><?php esc_html_e( 'Embed Width', 'pdfjs-viewer' ); ?></label></th>
					<td><input type="number" class="regular-text" id="pdfjs_embed_width" name="pdfjs_embed_width" value="<?php echo $embed_width ? $embed_width : 0; ?>" /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_viewer_scale"><?php esc_html_e( 'Viewer Scale', 'pdfjs-viewer' ); ?></label></th>
					<td>
						<select id="pdfjs_viewer_scale" name="pdfjs_viewer_scale">
							<option value="auto" <?php echo $viewer_scale === 'auto' ? 'selected' : ''; ?>>Automatic</option>
							<option value="page-actual" <?php echo $viewer_scale === 'page-actual' ? 'selected' : ''; ?>>Actual Size</option>
							<option value="page-fit" <?php echo $viewer_scale === 'page-fit' ? 'selected' : ''; ?>>Page Fit</option>
							<option value="page-width" <?php echo $viewer_scale === 'page-width' ? 'selected' : ''; ?>>Page Width</option>
							<option value="50" <?php echo $viewer_scale === '50' ? 'selected' : ''; ?>>50%</option>
							<option value="75" <?php echo $viewer_scale === '75' ? 'selected' : ''; ?>>75%</option>
							<option value="100" <?php echo $viewer_scale === '100' ? 'selected' : ''; ?>>100%</option>
							<option value="125" <?php echo $viewer_scale === '125' ? 'selected' : ''; ?>>125%</option>
							<option value="150" <?php echo $viewer_scale === '150' ? 'selected' : ''; ?>>150%</option>
							<option value="200" <?php echo $viewer_scale === '200' ? 'selected' : ''; ?>>200%</option>
							<option value="300" <?php echo $viewer_scale === '300' ? 'selected' : ''; ?>>300%</option>
							<option value="400" <?php echo $viewer_scale === '400' ? 'selected' : ''; ?>>400%</option>
						</select>
					</td>

				</tr>
			</table>
			<?php submit_button(); ?>
		</form>
	</div>
	<?php
}
