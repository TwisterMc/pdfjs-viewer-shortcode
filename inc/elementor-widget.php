<?php
/**
 * PDF.js Viewer Elementor Widget
 *
 * @package PDFjs_Viewer_Shortcode
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * PDF.js Viewer Elementor Widget Class
 */
class PDFjs_Viewer_Elementor_Widget extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'pdfjs-viewer';
	}

	/**
	 * Get widget title.
	 *
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'PDF.js Viewer', 'pdfjs-viewer-shortcode' );
	}

	/**
	 * Get widget icon.
	 *
	 * @return string Widget icon class name.
	 */
	public function get_icon() {
		return 'eicon-document-file';
	}

	/**
	 * Get widget categories.
	 *
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return array( 'pdfjs' );
	}

	/**
	 * Get widget keywords.
	 *
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return array( 'pdf', 'viewer', 'embed', 'mozilla', 'pdfjs', 'document' );
	}

	/**
	 * Register widget controls.
	 *
	 * @return void
	 */
	protected function register_controls() {
		$opt_height    = (int) get_option( 'pdfjs_embed_height', 800 );
		$opt_width     = (int) get_option( 'pdfjs_embed_width', 0 );
		$opt_zoom      = get_option( 'pdfjs_viewer_scale', 'auto' ) ?: 'auto';
		$opt_download  = 'on' === get_option( 'pdfjs_download_button', 'on' ) ? 'yes' : '';
		$opt_print     = 'on' === get_option( 'pdfjs_print_button', 'on' ) ? 'yes' : '';
		$opt_fullscreen        = 'on' === get_option( 'pdfjs_fullscreen_link', 'on' ) ? 'yes' : '';
		$opt_fullscreen_text   = get_option( 'pdfjs_fullscreen_link_text', 'View Fullscreen' ) ?: 'View Fullscreen';
		$opt_fullscreen_target = 'on' === get_option( 'pdfjs_fullscreen_link_target', '' ) ? 'yes' : '';

		// ── Content ──────────────────────────────────────────────────────────
		$this->start_controls_section(
			'section_content',
			array(
				'label' => esc_html__( 'PDF Content', 'pdfjs-viewer-shortcode' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'attachment_id',
			array(
				'label'       => esc_html__( 'Select PDF', 'pdfjs-viewer-shortcode' ),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'media_types' => array( 'application/pdf' ),
				'description' => esc_html__( 'Select a PDF file from your media library.', 'pdfjs-viewer-shortcode' ),
			)
		);

		// External URL field - only shown when external domains are enabled
		$allow_external = 'on' === get_option( 'pdfjs_allow_external_domains', '' );

		if ( $allow_external ) {
			$this->add_control(
				'external_url',
				array(
					'label'       => esc_html__( 'External PDF URL', 'pdfjs-viewer-shortcode' ),
					'type'        => \Elementor\Controls_Manager::TEXT,
					'description' => esc_html__( 'Enter the full URL to a PDF from an allowed domain', 'pdfjs-viewer-shortcode' ),
					'placeholder' => 'https://cdn.example.com/document.pdf',
				)
			);
		}

		$this->end_controls_section();

		// ── Display Options ───────────────────────────────────────────────────
		$this->start_controls_section(
			'section_display',
			array(
				'label' => esc_html__( 'Display Options', 'pdfjs-viewer-shortcode' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'viewer_height',
			array(
				'label'      => esc_html__( 'Viewer Height', 'pdfjs-viewer-shortcode' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => array( 'px', 'vh' ),
				'range'      => array(
					'px' => array(
						'min' => 300,
						'max' => 2000,
					),
					'vh' => array(
						'min' => 10,
						'max' => 100,
					),
				),
				'default'    => array(
					'unit' => 'px',
					'size' => $opt_height ?: 800,
				),
				'selectors'  => array(
					'{{WRAPPER}} .pdfjs-embed-container' => 'height: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'viewer_width',
			array(
				'label'      => esc_html__( 'Viewer Width', 'pdfjs-viewer-shortcode' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => array( '%', 'px' ),
				'range'      => array(
					'%'  => array(
						'min' => 1,
						'max' => 100,
					),
					'px' => array(
						'min' => 300,
						'max' => 2000,
					),
				),
				'default'    => array(
					'unit' => '%',
					'size' => $opt_width > 0 ? $opt_width : 100,
				),
				'selectors'  => array(
					'{{WRAPPER}} .pdfjs-embed-container' => 'width: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'zoom_level',
			array(
				'label'   => esc_html__( 'Zoom Level', 'pdfjs-viewer-shortcode' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => array(
					'auto'       => esc_html__( 'Auto', 'pdfjs-viewer-shortcode' ),
					'page-fit'   => esc_html__( 'Fit Page', 'pdfjs-viewer-shortcode' ),
					'page-width' => esc_html__( 'Fit Width', 'pdfjs-viewer-shortcode' ),
					'50'         => '50%',
					'75'         => '75%',
					'100'        => '100%',
					'125'        => '125%',
					'150'        => '150%',
					'200'        => '200%',
				),
				'default' => $opt_zoom,
			)
		);

		$this->end_controls_section();

		// ── Toolbar Options ───────────────────────────────────────────────────
		$this->start_controls_section(
			'section_toolbar',
			array(
				'label' => esc_html__( 'Toolbar Options', 'pdfjs-viewer-shortcode' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'show_download',
			array(
				'label'     => esc_html__( 'Download Button', 'pdfjs-viewer-shortcode' ),
				'type'      => \Elementor\Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Show', 'pdfjs-viewer-shortcode' ),
				'label_off' => esc_html__( 'Hide', 'pdfjs-viewer-shortcode' ),
				'default'   => $opt_download,
			)
		);

		$this->add_control(
			'show_print',
			array(
				'label'     => esc_html__( 'Print Button', 'pdfjs-viewer-shortcode' ),
				'type'      => \Elementor\Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Show', 'pdfjs-viewer-shortcode' ),
				'label_off' => esc_html__( 'Hide', 'pdfjs-viewer-shortcode' ),
				'default'   => $opt_print,
			)
		);

		$this->end_controls_section();

		// ── Fullscreen Link ───────────────────────────────────────────────────
		$this->start_controls_section(
			'section_fullscreen',
			array(
				'label' => esc_html__( 'Fullscreen Link', 'pdfjs-viewer-shortcode' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'show_fullscreen',
			array(
				'label'     => esc_html__( 'Show Fullscreen Link', 'pdfjs-viewer-shortcode' ),
				'type'      => \Elementor\Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Yes', 'pdfjs-viewer-shortcode' ),
				'label_off' => esc_html__( 'No', 'pdfjs-viewer-shortcode' ),
				'default'   => $opt_fullscreen,
			)
		);

		$this->add_control(
			'fullscreen_text',
			array(
				'label'       => esc_html__( 'Link Text', 'pdfjs-viewer-shortcode' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => $opt_fullscreen_text,
				'placeholder' => esc_html__( 'View Fullscreen', 'pdfjs-viewer-shortcode' ),
				'condition'   => array(
					'show_fullscreen' => 'yes',
				),
			)
		);

		$this->add_control(
			'fullscreen_target_blank',
			array(
				'label'     => esc_html__( 'Open in New Tab', 'pdfjs-viewer-shortcode' ),
				'type'      => \Elementor\Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Yes', 'pdfjs-viewer-shortcode' ),
				'label_off' => esc_html__( 'No', 'pdfjs-viewer-shortcode' ),
				'default'   => $opt_fullscreen_target,
				'condition' => array(
					'show_fullscreen' => 'yes',
				),
			)
		);

		$this->end_controls_section();

		// ── Style ─────────────────────────────────────────────────────────────
		$this->start_controls_section(
			'section_style',
			array(
				'label' => esc_html__( 'Style', 'pdfjs-viewer-shortcode' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'container_background',
			array(
				'label'     => esc_html__( 'Background Color', 'pdfjs-viewer-shortcode' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => array(
					'{{WRAPPER}} .pdfjs-embed-container' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			array(
				'name'     => 'container_border',
				'selector' => '{{WRAPPER}} .pdfjs-embed-container, {{WRAPPER}} iframe[data-pdfjs-viewer]',
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			array(
				'name'     => 'container_shadow',
				'selector' => '{{WRAPPER}} .pdfjs-embed-container, {{WRAPPER}} iframe[data-pdfjs-viewer]',
			)
		);

		$this->add_responsive_control(
			'container_padding',
			array(
				'label'      => esc_html__( 'Padding', 'pdfjs-viewer-shortcode' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', 'em', 'rem', '%' ),
				'selectors'  => array(
					'{{WRAPPER}} .pdfjs-embed-container' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'container_margin',
			array(
				'label'      => esc_html__( 'Margin', 'pdfjs-viewer-shortcode' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', 'em', 'rem', '%' ),
				'selectors'  => array(
					'{{WRAPPER}} .pdfjs-embed-container' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Render the widget output on the frontend.
	 *
	 * @return void
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();

		$pdf_url       = '';
		$attachment_id = '';

		// Check for external URL first (takes priority if provided)
		if ( ! empty( $settings['external_url'] ) ) {
			$pdf_url = sanitize_url( $settings['external_url'] );
		} elseif ( ! empty( $settings['attachment_id']['id'] ) ) {
			// Fall back to media library selection
			$attachment_id = absint( $settings['attachment_id']['id'] );
			$pdf_url       = wp_get_attachment_url( $attachment_id );
		}

		if ( empty( $pdf_url ) ) {
			echo '<div role="status" aria-live="polite" style="padding: 20px; border: 2px solid #2271b1; background: #e7f3ff; color: #003a87; border-radius: 4px; margin: 20px 0;">';
			echo '<p style="margin: 0;"><strong>' . esc_html__( 'PDF Viewer', 'pdfjs-viewer-shortcode' ) . '</strong></p>';
			echo '<p style="margin: 8px 0 0 0; font-size: 14px;">' . esc_html__( 'Please select a PDF file from your media library to display the viewer.', 'pdfjs-viewer-shortcode' ) . '</p>';
			echo '</div>';
			return;
		}

		$height = $this->get_responsive_dimension( $settings, 'viewer_height' );
		$width  = $this->get_responsive_dimension( $settings, 'viewer_width' );

		$viewer_args = array(
			'url'               => $pdf_url,
			'viewer_height'     => $height,
			'viewer_width'      => $width,
			'fullscreen'        => 'yes' === $settings['show_fullscreen'] ? 'true' : 'false',
			'fullscreen_text'   => sanitize_text_field( $settings['fullscreen_text'] ),
			'fullscreen_target' => 'yes' === $settings['fullscreen_target_blank'] ? 'true' : 'false',
			'download'          => 'yes' === $settings['show_download'] ? 'true' : 'false',
			'print'             => 'yes' === $settings['show_print'] ? 'true' : 'false',
			'zoom'              => sanitize_text_field( $settings['zoom_level'] ),
			'attachment_id'     => $attachment_id,
			'search'            => 'on' === get_option( 'pdfjs_search_button', 'on' ) ? 'true' : 'false',
			'editing'           => 'on' === get_option( 'pdfjs_editing_buttons', 'on' ) ? 'true' : 'false',
		);

		echo '<div class="pdfjs-embed-container">';

		if ( \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
			echo wp_kses_post( $this->render_editor_placeholder( $pdf_url, $attachment_id, $width, $height ) );
		} else {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- output is already escaped inside pdfjs_render_viewer()
			echo pdfjs_render_viewer( $viewer_args );
		}

		echo '</div>';
	}

	/**
	 * Render a sized placeholder shown only in the Elementor editor.
	 *
	 * Nested iframes are unreliable inside Elementor's own editor iframe, so
	 * we display a placeholder that holds the configured dimensions and shows
	 * the PDF filename so editors know what was uploaded.
	 *
	 * @param string     $pdf_url       PDF file URL.
	 * @param int|string $attachment_id WordPress attachment ID.
	 * @param string     $width         Configured viewer width.
	 * @param string     $height        Configured viewer height.
	 * @return string HTML markup.
	 */
	private function render_editor_placeholder( $pdf_url, $attachment_id, $width, $height ) {
		$pdf_name = '';

		if ( ! empty( $attachment_id ) ) {
			$pdf_name = get_the_title( $attachment_id );
			if ( empty( $pdf_name ) ) {
				$pdf_name = basename( parse_url( wp_get_attachment_url( $attachment_id ), PHP_URL_PATH ) );
			}
		}

		if ( empty( $pdf_name ) ) {
			$pdf_name = basename( parse_url( $pdf_url, PHP_URL_PATH ) );
		}

		if ( empty( $pdf_name ) ) {
			$pdf_name = __( 'PDF Document', 'pdfjs-viewer-shortcode' );
		}

		$icon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
			. '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'
			. '<polyline points="14 2 14 8 20 8"/>'
			. '<text x="3" y="20" font-size="4" fill="#888" stroke="none" font-family="sans-serif">PDFjs</text>'
			. '</svg>';

		return '<div class="pdfjs-editor-placeholder" style="'
			. 'width:' . esc_attr( $width ) . ';'
			. 'height:' . esc_attr( $height ) . ';'
			. 'display:flex;flex-direction:column;align-items:center;justify-content:center;'
			. 'background:#f5f5f5;border:2px dashed #b0b0b0;border-radius:4px;'
			. 'box-sizing:border-box;gap:12px;">'
			. $icon
			. '<div style="text-align:center;padding:0 16px;">'
			. '<div style="font-weight:600;font-size:14px;color:#333;margin-bottom:4px;">' . esc_html( $pdf_name ) . '</div>'
			. '<div style="font-size:12px;color:#888;">' . esc_html__( 'PDFjs Viewer — visible on the published page', 'pdfjs-viewer-shortcode' ) . '</div>'
			. '</div>'
			. '</div>';
	}

	/**
	 * Get a responsive dimension value from control settings.
	 *
	 * @param array  $settings    Control settings.
	 * @param string $control_key Control key name.
	 * @return string Formatted dimension string.
	 */
	private function get_responsive_dimension( $settings, $control_key ) {
		$size = isset( $settings[ $control_key ]['size'] ) ? $settings[ $control_key ]['size'] : 0;
		$unit = isset( $settings[ $control_key ]['unit'] ) ? $settings[ $control_key ]['unit'] : 'px';

		if ( 0 === (int) $size || empty( $size ) ) {
			return 'viewer_width' === $control_key ? '100%' : '800px';
		}

		return absint( $size ) . $unit;
	}
}
