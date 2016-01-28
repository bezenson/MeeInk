/*!
 * Plugin: MeeInk
 * Version: 1.0.0
 * Author: Vladislav Bezenson
 *
 * @license: https://github.com/inferusvv/MeeInk/blob/master/LICENSE.MD
 * https://github.com/inferusvv/MeeInk
 */

;(function ( $, window, document, undefined ) {

    "use strict";

    var pluginName = "meeInk",
        defaults = {
            animationClass: 'mee-ink-animated mee-ink-animation',
            elementClass: 'mee-ink-el',
            inkClass: 'mee-ink',
            overflowHiddenClass: 'mee-ink-overflow-hidden',
            positionRelativeClass: 'mee-ink-pos-relative'
        },
        interactionEvent = ('ontouchstart' in window || navigator.maxTouchPoints) ? 'touchstart' : 'click';

    function Plugin ( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function () {
            this.injectInk();
            this.$ink = $(this.element).find( '.' + this.settings.inkClass );

            this.$element.addClass( this.settings.elementClass );
            this.$element.on( interactionEvent, $.proxy( this._onClick, this ) );

            if ( this.$element.css( 'position' ) === 'static' ) {
                this.$element.addClass( this.settings.positionRelativeClass );
            }
            if ( this.$element.css( 'overflow' ) !== 'hidden' ) {
                this.$element.addClass( this.settings.overflowHiddenClass );
            }
        },

        injectInk: function() {
            if ( this.$element.find( '.' + this.settings.inkClass ).length === 0 ) {
                this.$element.prepend( '<span class="' + this.settings.inkClass + '"></span>' );
            }
        },

        setInkSize: function( width, height ) {
            height = typeof height !== 'undefined' ? height : width;

            this.$ink.css({
                height: height,
                width: width
            });
        },

        setInkPosition: function( x, y ) {
            this.$ink.css({
                top: y,
                left: x
            });
        },

        getInkSize: function() {
            return Math.max( this.$element.outerWidth(), this.$element.outerHeight() );
        },

        getInkPosition: function( event ) {
            var position = {};

            position.x = (event.originalEvent.pageX || event.originalEvent.touches[0].pageX) - this.$element.offset().left - this.$ink.width() / 2;
            position.y = (event.originalEvent.pageY || event.originalEvent.touches[0].pageY) - this.$element.offset().top - this.$ink.height() / 2;

            return position;
        },

        _onClick: function( event ) {
            this.$ink.removeClass( this.settings.animationClass );

            this.setInkSize( this.getInkSize() );

            var position = this.getInkPosition( event );
            this.setInkPosition( position.x, position.y );

            this.$ink.addClass( this.settings.animationClass );
        }
    } );

    $.fn[ pluginName ] = function ( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        } );
    };

})( jQuery, window, document );
