// Theme scripts

// Mobile Nav Menu
jQuery( document ).ready( function () {
	jQuery( function () {
		jQuery( '#main-menu' ).smartmenus( {
			subIndicatorsPos          : 'append', subIndicatorsText: ' ', showFunction: function ( $ul, complete ) {
				$ul.slideDown( 250, complete );
			}, hideFunction           : function ( $ul, complete ) {
				$ul.slideUp( 250, complete );
			}, collapsibleShowFunction: function ( $ul, complete ) {
				$ul.slideDown( 250, complete );
			}, collapsibleHideFunction: function ( $ul, complete ) {
				$ul.slideUp( 250, complete );
			}

		} );
	} );

	jQuery( function () {
		jQuery( '#menu-button' ).click( function () {
			var $this = jQuery( this ), $menu = jQuery( '#main-menu' );
			if ( ! $this.hasClass( 'collapsed' ) ) {
				$menu.addClass( 'collapsed' );
				$this.addClass( 'collapsed' );
				$this.removeClass( 'open' );
				$this.text( '+ Open Menu +' )
			} else {
				$menu.removeClass( 'collapsed' );
				$this.removeClass( 'collapsed' );
				$this.addClass( 'open' );
				$this.text( '- Close Menu -' )
			}
			return false;
		} ).click();
	} );
} );

// Translator
function googleTranslateElementInit() {
	new google.translate.TranslateElement( {
		pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE
	}, 'google_translate_element' );
}
