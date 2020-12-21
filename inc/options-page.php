<?php
/**
 * Settings Page in WP Admin
 */
function pdfjs_register_settings() {
	register_setting( 'pdfjs_options_group', 'pdfjs_download_button', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_print_button', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_search_button', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link_text', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_fullscreen_link_target', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_embed_height', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_embed_width', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_viewer_scale', 'pdfjs_callback' );
	register_setting( 'pdfjs_options_group', 'pdfjs_viewer_pagemode', 'pdfjs_callback' );
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
			$search_button        = get_option( 'pdfjs_search_button', 'on' );
			$fullscreen_link      = get_option( 'pdfjs_fullscreen_link', 'on' );
			$fullscreen_link_text = get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' );
			$link_target          = get_option( 'pdfjs_fullscreen_link_target', '' );
			$embed_height         = get_option( 'pdfjs_embed_height', 800 );
			$embed_width          = get_option( 'pdfjs_embed_width', 0 );
			$viewer_scale         = get_option( 'pdfjs_viewer_scale', 'auto' );
			$viewer_pagemode      = get_option( 'pdfjs_viewer_pagemode', 'none' );
			?>

			<table class="form-table" role="presentation">
				<h2 class="title"><?php esc_html_e( 'Defaults', 'pdfjs-viewer' ); ?></h2>
				<p>
					<?php esc_html_e( 'Most defaults only affect new posts and existing posts when you edit them. Not all options work with the shortcode.', 'pdfjs-viewer' ); ?>
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
					<th scope="row"><label for="pdfjs_search_button"><?php esc_html_e( 'Show Search Button', 'pdfjs-viewer' ); ?> <sup>1</sup></label></th>
					<td><input type="checkbox" id="pdfjs_search_button" name="pdfjs_search_button" <?php echo $search_button ? 'checked' : ''; ?> /></td>
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
					<td>
						<input type="number" class="regular-text" id="pdfjs_embed_width" name="pdfjs_embed_width" value="<?php echo $embed_width ? $embed_width : 0; ?>" />
						<p><?php esc_html_e( 'Note: 0 = 100%', 'pdfjs-viewer' ); ?></p>
					</td>
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
				<tr>
					<th scope="row"><label for="pdfjs_viewer_pagemode"><?php esc_html_e( 'Page Mode (aka Sidebar)', 'pdfjs-viewer' ); ?> <sup>1</sup></label></th>
					<td>
						<select id="pdfjs_viewer_pagemode" name="pdfjs_viewer_pagemode">
							<option value="none" <?php echo $viewer_pagemode === 'none' ? 'selected' : ''; ?>>None</option>
							<option value="thumbs" <?php echo $viewer_pagemode === 'thumbs' ? 'selected' : ''; ?>>Thumbs</option>
							<option value="bookmarks" <?php echo $viewer_pagemode === 'bookmarks' ? 'selected' : ''; ?>>Bookmarks</option>
							<option value="attachments" <?php echo $viewer_pagemode === 'attachments' ? 'selected' : ''; ?>>Attachments</option>
						</select>
					</td>
				</tr>
			</table>
			<?php submit_button(); ?>
			<p>
				<?php esc_html_e( 'When editing existing content, it may cause existing blocks to have "unexpected or invalid content" upon editing. Don\'t worry, just click the three little dots, choose "Attempt Block Recovery", and everything should be working again. This "unexpected or invalid content" will not affect live content, just content in the editor.', 'pdfjs-viewer' ); ?>
			</p>
			<p>
				<sup>1</sup> <?php esc_html_e( 'These options are not customizable per page/post at this time. Only globally.'); ?>
			</p>
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
	$settings_link = "<a href='$url'>" . __( 'Settings', 'pdfjs-viewer' ) . '</a>';
	// Adds the link to the end of the array.
	array_push(
		$links,
		$settings_link
	);
	return $links;
}
