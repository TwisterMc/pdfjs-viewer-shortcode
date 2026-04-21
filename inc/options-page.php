<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Sanitize the allowed external domains textarea.
 * Accepts one hostname per line, strips schemes and paths, rejects invalid entries.
 */
function pdfjs_sanitize_allowed_domains( $input ) {
	if ( ! is_string( $input ) ) {
		return '';
	}
	$lines   = explode( "\n", $input );
	$cleaned = array();
	foreach ( $lines as $line ) {
		// Strip whitespace and any accidental scheme (http://, https://)
		$hostname = trim( $line );
		$hostname = preg_replace( '#^https?://#i', '', $hostname );
		// Strip any path or port that may have been included
		$hostname = strtok( $hostname, '/?' );
		$hostname = strtok( $hostname, ':' );
		$hostname = trim( $hostname );
		if ( empty( $hostname ) ) {
			continue;
		}
		// Validate: must be a proper hostname (labels separated by dots, valid chars)
		if ( preg_match( '/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/', $hostname ) ) {
			$cleaned[] = strtolower( $hostname );
		}
	}
	return implode( "\n", array_unique( $cleaned ) );
}

/**
 * Sanitize checkbox and text inputs for PDFjs settings.
 */
function pdfjs_sanitize_option( $input ) {
	// For checkboxes, return 'on' or empty string
	if ( is_string( $input ) && 'on' === $input ) {
		return 'on';
	}
	// For text fields, sanitize
	if ( is_string( $input ) ) {
		// Check if it looks like a URL
		if ( filter_var( $input, FILTER_VALIDATE_URL ) !== false ) {
			return esc_url_raw( $input );
		}
		return sanitize_text_field( $input );
	}
	// For numbers
	if ( is_numeric( $input ) ) {
		return absint( $input );
	}
	return '';
}

/**
 * Settings Page in WP Admin
 */
function pdfjs_register_settings() {
	register_setting( 'pdfjs_options_group', 'pdfjs_download_button', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_print_button', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_search_button', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_editing_buttons', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link_text', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link_target', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_embed_height', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_embed_width', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_viewer_scale', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_viewer_pagemode', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_custom_page', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_allow_external_domains', 'pdfjs_sanitize_option' );
	register_setting( 'pdfjs_options_group', 'pdfjs_allowed_domains', 'pdfjs_sanitize_allowed_domains' );
}
add_action( 'admin_init', 'pdfjs_register_settings' );

/**
 * Clear cache when settings are updated.
 */
function pdfjs_clear_options_cache() {
	wp_cache_delete( 'pdfjs_options', 'pdfjs' );
	wp_cache_delete( 'pdfjs_viewer_options', 'pdfjs' );
}
add_action( 'update_option_pdfjs_download_button', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_print_button', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_fullscreen_link', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_fullscreen_link_text', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_fullscreen_link_target', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_embed_height', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_embed_width', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_viewer_scale', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_viewer_pagemode', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_search_button', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_editing_buttons', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_allow_external_domains', 'pdfjs_clear_options_cache' );
add_action( 'update_option_pdfjs_allowed_domains', 'pdfjs_clear_options_cache' );

function pdfjs_register_options_page() {
	global $pdfjs_settings_page;
	$pdfjs_settings_page = add_options_page( 'PDFjs Settings', 'PDFjs Viewer', 'manage_options', 'pdfjs', 'pdfjs_options_page' );
}
add_action( 'admin_menu', 'pdfjs_register_options_page' );

// create the settings page.
function pdfjs_options_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( esc_html__( 'You do not have sufficient permissions to access this page.', 'pdfjs-viewer-shortcode' ) );
	}
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'PDFjs Viewer Options', 'pdfjs-viewer-shortcode' ); ?></h1>
		<form method="post" action="options.php">

			<?php
			settings_fields( 'pdfjs_options_group' );

			$download_button      = get_option( 'pdfjs_download_button', 'on' );
			$print_button         = get_option( 'pdfjs_print_button', 'on' );
			$search_button        = get_option( 'pdfjs_search_button', 'on' );
			$editing_buttons        = get_option( 'pdfjs_editing_buttons', 'on' );
			$fullscreen_link      = get_option( 'pdfjs_fullscreen_link', 'on' );
			$fullscreen_link_text = get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' );
			$link_target          = get_option( 'pdfjs_fullscreen_link_target', '' );
			$embed_height         = get_option( 'pdfjs_embed_height', 800 );
			$embed_width          = get_option( 'pdfjs_embed_width', 0 );
			$viewer_scale         = get_option( 'pdfjs_viewer_scale', 'auto' );
			$viewer_pagemode      = get_option( 'pdfjs_viewer_pagemode', 'none' );
			$pdfjs_custom_page          = get_option( 'pdfjs_custom_page', '' );
			$allow_external_domains     = get_option( 'pdfjs_allow_external_domains', '' );
			$allowed_domains            = get_option( 'pdfjs_allowed_domains', '' );
			?>

			<h2 class="title"><?php esc_html_e( 'Defaults', 'pdfjs-viewer-shortcode' ); ?></h2>
			<p id="pdfjs-defaults-help">
				<?php esc_html_e( 'These are the initial settings applied when a PDF is embedded. You can adjust them in the editor at any time. Updates to these default settings only apply to new PDF embeds, not existing ones.', 'pdfjs-viewer-shortcode' ); ?>
			</p>
			<table class="form-table" role="presentation">
				<tr>
					<th scope="row"><label for="pdfjs_download_button"><?php esc_html_e( 'Show Save Button', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_download_button" name="pdfjs_download_button" aria-describedby="pdfjs-defaults-help" <?php checked( $download_button, 'on' ); ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_print_button"><?php esc_html_e( 'Show Print Button', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_print_button" name="pdfjs_print_button" aria-describedby="pdfjs-defaults-help" <?php checked( $print_button, 'on' ); ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_fullscreen_link"><?php esc_html_e( 'Show Fullscreen Link', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_fullscreen_link" name="pdfjs_fullscreen_link" aria-describedby="pdfjs-defaults-help" <?php checked( $fullscreen_link, 'on' ); ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_fullscreen_link_text"><?php esc_html_e( 'Fullscreen Link Text', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="text" class="regular-text" id="pdfjs_fullscreen_link_text" name="pdfjs_fullscreen_link_text" aria-describedby="pdfjs-defaults-help" value="<?php echo esc_html( $fullscreen_link_text ? $fullscreen_link_text : 'View Fullscreen' ); ?>" /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_fullscreen_link_target"><?php esc_html_e( 'Fullscreen Links in New Tabs', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_fullscreen_link_target" name="pdfjs_fullscreen_link_target" aria-describedby="pdfjs-defaults-help" <?php checked( $link_target, 'on' ); ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_embed_height"><?php esc_html_e( 'Embed Height', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="number" class="regular-text" id="pdfjs_embed_height" name="pdfjs_embed_height" aria-describedby="pdfjs-defaults-help" value="<?php echo esc_html( $embed_height ? $embed_height : 800 ); ?>" /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_embed_width"><?php esc_html_e( 'Embed Width', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td>
						<input type="number" class="regular-text" id="pdfjs_embed_width" name="pdfjs_embed_width" aria-describedby="pdfjs-width-note pdfjs-defaults-help" value="<?php echo esc_html( $embed_width ? $embed_width : 0 ); ?>" />
						<p id="pdfjs-width-note"><?php esc_html_e( 'Note: 0 = 100%', 'pdfjs-viewer-shortcode' ); ?></p>
					</td>
				</tr>
				</table>

				<h2 class="title"><?php esc_html_e( 'Global Defaults', 'pdfjs-viewer-shortcode' ); ?></h2>
				<p id="pdfjs-defaults-help-g">
					<?php esc_html_e( 'These settings control how all PDFs appear on your site. Any changes you make here will affect all PDFs that use PDF.js.', 'pdfjs-viewer-shortcode' ); ?>
				</p>

				<table class="form-table" role="presentation">

				<tr>
					<th scope="row"><label for="pdfjs_search_button"><?php esc_html_e( 'Show Search Button', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_search_button" name="pdfjs_search_button" aria-describedby="pdfjs-defaults-help-g" <?php checked( $search_button, 'on' ); ?> /></td>
				</tr>
				<tr>
					<th scope="row"><label for="pdfjs_editing_buttons"><?php esc_html_e( 'Show Editing Buttons', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td><input type="checkbox" id="pdfjs_editing_buttons" name="pdfjs_editing_buttons" aria-describedby="pdfjs-defaults-help-g" <?php checked( $editing_buttons, 'on' ); ?> /></td>
				</tr>
				
				<tr>
					<th scope="row"><label for="pdfjs_viewer_scale"><?php esc_html_e( 'Viewer Scale', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td>
						<select id="pdfjs_viewer_scale" name="pdfjs_viewer_scale" aria-describedby="pdfjs-defaults-help-g">
							<option value="auto" <?php selected( $viewer_scale, 'auto' ); ?>><?php esc_html_e( 'Auto', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="page-actual" <?php selected( $viewer_scale, 'page-actual' ); ?>><?php esc_html_e( 'Actual Size', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="page-fit" <?php selected( $viewer_scale, 'page-fit' ); ?>><?php esc_html_e( 'Page Fit', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="page-width" <?php selected( $viewer_scale, 'page-width' ); ?>><?php esc_html_e( 'Page Width', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="50" <?php selected( $viewer_scale, '50' ); ?>><?php esc_html_e( '50%', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="75" <?php selected( $viewer_scale, '75' ); ?>><?php esc_html_e( '75%', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="100" <?php selected( $viewer_scale, '100' ); ?>><?php esc_html_e( '100%', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="125" <?php selected( $viewer_scale, '125' ); ?>><?php esc_html_e( '125%', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="150" <?php selected( $viewer_scale, '150' ); ?>><?php esc_html_e( '150%', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="200" <?php selected( $viewer_scale, '200' ); ?>><?php esc_html_e( '200%', 'pdfjs-viewer-shortcode' ); ?></option>
						</select>
					</td>
				</tr>

				<tr>
					<th scope="row"><label for="pdfjs_viewer_pagemode"><?php esc_html_e( 'Page Mode (aka Sidebar)', 'pdfjs-viewer-shortcode' ); ?></label></th>
					<td>
						<select id="pdfjs_viewer_pagemode" name="pdfjs_viewer_pagemode" aria-describedby="pdfjs-defaults-help-g">
							<option value="none" <?php selected( $viewer_pagemode, 'none' ); ?>><?php esc_html_e( 'None', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="thumbs" <?php selected( $viewer_pagemode, 'thumbs' ); ?>><?php esc_html_e( 'Thumbs', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="bookmarks" <?php selected( $viewer_pagemode, 'bookmarks' ); ?>><?php esc_html_e( 'Bookmarks', 'pdfjs-viewer-shortcode' ); ?></option>
							<option value="attachments" <?php selected( $viewer_pagemode, 'attachments' ); ?>><?php esc_html_e( 'Attachments', 'pdfjs-viewer-shortcode' ); ?></option>
						</select>
					</td>
				</tr>
			</table>

			<details id="pdfjs-beta-section" <?php echo ( 'on' === $pdfjs_custom_page || 'on' === $allow_external_domains ) ? 'open' : ''; ?> style="margin-top: 24px;">
				<summary style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer; font-weight: 600; font-size: 1.3em; color: #1d2327; user-select: none; list-style: none; width: auto;">
					<span id="pdfjs-beta-arrow" style="font-size: 0.75em; transition: transform 0.15s; display: inline-block;">&#9654;</span>
					<?php esc_html_e( 'Beta Features', 'pdfjs-viewer-shortcode' ); ?>
				</summary>
				<div style="margin-top: 12px; padding: 0 0 4px; border-top: 1px solid #c3c4c7;">
					<div class="notice notice-error inline" style="margin: 12px 0;">
						<p><?php esc_html_e( 'These features are experimental and may not work on all sites. Test carefully before using on a production site, and', 'pdfjs-viewer-shortcode' ); ?> <a href="https://wordpress.org/support/plugin/pdfjs-viewer-shortcode/" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'leave feedback', 'pdfjs-viewer-shortcode' ); ?></a>.</p>
					</div>
					<table class="form-table" role="presentation">
						<tr>
							<th scope="row"><label for="pdfjs_custom_page"><?php esc_html_e( 'Alternative PDF Loading', 'pdfjs-viewer-shortcode' ); ?></label></th>
							<td>
							<label><input type="checkbox" id="pdfjs_custom_page" name="pdfjs_custom_page" <?php checked( $pdfjs_custom_page, 'on' ); ?> /> <?php esc_html_e( 'Use this if the fullscreen link shows a "Security Check Failed" error or a blank page. It loads the viewer through WordPress instead of directly, which works better on some hosting setups.', 'pdfjs-viewer-shortcode' ); ?></label>
							</td>
						</tr>
						<tr>
							<th scope="row"><label for="pdfjs_allow_external_domains"><?php esc_html_e( 'Allow External Domain PDFs', 'pdfjs-viewer-shortcode' ); ?></label></th>
							<td>
							<label><input type="checkbox" id="pdfjs_allow_external_domains" name="pdfjs_allow_external_domains" aria-controls="pdfjs-external-domains-section" <?php checked( $allow_external_domains, 'on' ); ?> /> <?php esc_html_e( 'Allow PDFs hosted on other domains, such as a CDN. Only add domains you fully control or explicitly trust.', 'pdfjs-viewer-shortcode' ); ?></label>
							</td>
						</tr>
						<tr id="pdfjs-external-domains-section" <?php echo ( 'on' !== $allow_external_domains ) ? 'style="display:none;"' : ''; ?>>
							<th scope="row"><label for="pdfjs_allowed_domains"><?php esc_html_e( 'Allowed Domains', 'pdfjs-viewer-shortcode' ); ?></label></th>
							<td>
								<textarea id="pdfjs_allowed_domains" name="pdfjs_allowed_domains" rows="4" class="large-text code" aria-describedby="pdfjs-allowed-domains-help" placeholder="cdn.example.com"><?php echo esc_textarea( $allowed_domains ); ?></textarea>
								<p id="pdfjs-allowed-domains-help" class="description"><?php esc_html_e( 'One hostname per line. Do not include https:// or paths. Example: cdn.example.com', 'pdfjs-viewer-shortcode' ); ?></p>
								<div class="notice notice-warning inline" style="margin: 6px 0 0;">
									<p><?php esc_html_e( 'The external server must send CORS headers (Access-Control-Allow-Origin) for PDFs to load. Most CDNs support this; standard web servers typically do not.', 'pdfjs-viewer-shortcode' ); ?></p>
								</div>
							</td>
						</tr>
					</table>
				</div>
			</details>

			<script>
			( function() {
				var checkbox = document.getElementById( 'pdfjs_allow_external_domains' );
				var section  = document.getElementById( 'pdfjs-external-domains-section' );
				if ( checkbox && section ) {
					checkbox.addEventListener( 'change', function() {
						section.style.display = this.checked ? '' : 'none';
					} );
				}

				var details = document.getElementById( 'pdfjs-beta-section' );
				var arrow   = document.getElementById( 'pdfjs-beta-arrow' );
				if ( details && arrow ) {
					var updateArrow = function() {
						arrow.style.transform = details.open ? 'rotate(90deg)' : '';
					};
					updateArrow();
					details.addEventListener( 'toggle', updateArrow );
				}
			} )();
			</script>

			<div style="display: flex; gap: 10px; align-items: center; padding-top: 24px;">
				<?php submit_button( __( 'Save Changes', 'pdfjs-viewer-shortcode' ), 'primary', 'submit', false ); ?>
				<a href="https://ko-fi.com/twistermc" target="_blank" rel="noopener noreferrer" class="button button-secondary"><?php esc_html_e( 'Support this plugin', 'pdfjs-viewer-shortcode' ); ?></a>
			</div>
		
		</form>
	</div>
	<?php
}

/**
 * Add Settings Link to Plugins Page
 */
add_filter( 'plugin_action_links_pdfjs-viewer-shortcode/pdfjs-viewer.php', 'pdfjs_settings_link' );
function pdfjs_settings_link( $links ) {
	// Build and escape the URL.
	$url = esc_url(
		add_query_arg(
			'page',
			'pdfjs',
			get_admin_url() . 'admin.php'
		)
	);
	// Create the link.
	$settings_link = '<a href="' . $url . '">' . esc_html__( 'Settings', 'pdfjs-viewer-shortcode' ) . '</a>';
	// Adds the link to the end of the array.
	$links[] = $settings_link;
	return $links;
}
