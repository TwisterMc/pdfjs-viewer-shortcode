<?php
/**
 * Header file for fullscreen template.
 */

?><!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

<head>

	<meta name="pdfJS" content="<?php echo get_transient( 'pdfjs_button_download_' . $attachment_id ); ?>">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" >

	<link rel="profile" href="https://gmpg.org/xfn/11">

	<!----- needs to be enqueued -->
	<script>
		const pdf_js_document = '<?php echo esc_url( $pdfjs_url ); ?>'
	</script>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="google" content="notranslate">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="resource" type="application/l10n" href="<?php echo plugin_dir_url( __DIR__ ) . 'pdfjs/web/locale/locale.properties' ?>">
	<link rel="stylesheet" href="<?php echo plugin_dir_url( __DIR__ ) . 'pdfjs/web/viewer.css' ?>">
	<script src="<?php echo plugin_dir_url( __DIR__ ) . 'pdfjs/build/pdf.worker.js' ?>"></script>
	<script src="<?php echo plugin_dir_url( __DIR__ ) . 'pdfjs/build/pdf.js' ?>"></script>
	<script src="<?php echo plugin_dir_url( __DIR__ ) . 'pdfjs/web/viewer.js' ?>"></script>

	<!--- // ----->

	<?php wp_head(); ?>

</head>

<body tabindex="1" class="loadingInProgress">




