jQuery( document ).ready( function () {

	// Survey direct link pop-up.

	jQuery( tsg_survey_script.directClass ).on( "click", function ( e ) {
		jQuery.fancybox( {
			href          : tsg_survey_script.ajaxurl + '?action=open_survey_form',
			fitToView     : false,
			autoSize      : false,
			autoDimensions: false,
			padding       : 5,
			width         : 600,
			height        : 400,
			type          : 'iframe',
		} ); // fancybox
		e.preventDefault();
	} ); // on

	// One-time request pop-up.
	if ( jQuery.cookie( 'Survy' ) == null ) {
		jQuery( tsg_survey_script.askOncePrompt ).on( "click", function ( e ) {
			var url = jQuery( this ).attr( "href" );
			var encodedURL = encodeURIComponent( url );
			jQuery.fancybox( {
				href          : tsg_survey_script.ajaxurl + '?action=open_survey_ask&gotoURL=' + encodedURL,
				fitToView     : false,
				autoSize      : false,
				autoDimensions: false,
				padding       : 15,
				width         : 400,
				height        : 400,
				type          : 'ajax',
			} ); // fancybox
			e.preventDefault();
		} ); // on
		if ( jQuery.cookie( 'Survy' ) == null ) {
			jQuery.cookie( 'Survy', 'prompted', {expires: 180, path: '/'} );
		}
	}

	// Testimonial slideshows

	jQuery( '.tsgTestimionialSlideshow' ).each( function () {
		var $this = this;

		// Get an array of all element heights
		var elementHeights = jQuery( '> .testimonial', $this ).map( function () {
			return jQuery( this ).height();
		} ).get();
		var maxHeight = Math.max.apply( null, elementHeights );
		jQuery( this ).height( (
		maxHeight + 20
		) );

		jQuery( '> :gt(0)', $this ).hide();
		setInterval( function () {
			jQuery( '> :first-child', $this ).fadeOut().next().fadeIn().end().appendTo( $this );
		}, tsg_survey_script.delay );
	} )
} );
