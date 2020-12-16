jQuery(function($) {
    $('#insert-pdfjs').click(openMediaWindow);

    function openMediaWindow() {
    	//console.log('pdfjs media button clicked');
    	var frame = wp.media({
            title: 'Insert a PDF',
            library: {type: 'application/pdf'},
            multiple: false,
            button: {text: 'Insert'}
        });

        frame.on('select', function(){
	        var selectionURL = frame.state().get('selection').first().toJSON().url;
	        selectionURL = encodeURIComponent(selectionURL);

	        let fullscreenLink = "fullscreen=false";
	        if (typeof window.pdfjs_options.pdfjs_fullscreen_link !== 'undefined') {
		        let fullscreenLink = "fullscreen=true";
	        }

	        let downloadLink = "download=false";
	        if (typeof window.pdfjs_options.pdfjs_download_button !== 'undefined') {
		        let downloadLink = "download=true";
	        }

	        let printLink = "print=false";
	        if (typeof window.pdfjs_options.pdfjs_print_button !== 'undefined') {
		        let printLink = "print=true";
	        }

	        wp.media.editor.insert('[pdfjs-viewer url="' + selectionURL + '" viewer_width=' + window.pdfjs_options.pdfjs_embed_height + 'px viewer_height=' + window.pdfjs_options.pdfjs_embed_height + 'px ' + fullscreenLink + ' download=true print=true]');
	    });

	    frame.open();
    }
});
