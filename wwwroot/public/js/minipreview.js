
window.addEventListener('resize', () => {
    if (window.outerWidth <= 768) {
        console.log('belo 768');
        const anchorElms = document.querySelectorAll('.preview');
        anchorElms.forEach(elem => {
            elem.classList.remove('hasover');
        })
    }
    else {
        const anchorElms = document.querySelectorAll('.preview');
        anchorElms.forEach(elem => {
            elem.classList.add('hasover');
        })
    }
});
$(function () {
    // attach mini-previews
    $('.preview a').miniPreview({ prefetch: 'pageload' });
});

(function ($) {
    var PREFIX = 'mini-preview';

    // implemented as a jQuery plugin
    $.fn.miniPreview = function (options) {
        return this.each(function () {
            var $this = $(this);
            var miniPreview = $this.data(PREFIX);
            if (miniPreview) {
                miniPreview.destroy();
            }

            miniPreview = new MiniPreview($this, options);
            miniPreview.generate();
            $this.data(PREFIX, miniPreview);
        });
    };

    var MiniPreview = function ($el, options) {
        this.$el = $el;
        this.options = $.extend({}, this.defaultOptions, options);
        this.counter = MiniPreview.prototype.sharedCounter++;
    };

    MiniPreview.prototype = {
        sharedCounter: 0,

        defaultOptions: {
            width: 256,
            height: 144,
            scale: .25,
            prefetch: 'pageload'
        },

        generate: function () {
            this.$el.mouseenter((event) => this.setPosition(event))
            this.$el.mouseleave((event) => this.resetPosition(event))
            this.createElements();
            this.setPrefetch();
        },

        createElements: function () {
            var $wrapper = $('<div>', { class: PREFIX + '-wrapper' });
            var $loading = $('<div>', { class: PREFIX + '-loading' });
            var $frame = $('<iframe>', { class: PREFIX + '-frame' });
            var $cover = $('<div>', { class: PREFIX + '-cover' });
            let $heading = $('<p>', { class: 'heading' })
            $heading.text(this.$el.attr('href'));
            // $wrapper.append($heading);
            $wrapper.appendTo(this.$el).append($loading, $heading, $frame, $cover);


            // sizing
            $wrapper.css({
                width: this.options.width + 'px',
                height: this.options.height + 'px'
            });


            // scaling
            var inversePercent = 100 / this.options.scale;
            $frame.css({
                width: inversePercent + '%',
                height: inversePercent + '%',
                transform: 'scale(' + this.options.scale + ')'
            });


        },

        setPrefetch: function () {
            switch (this.options.prefetch) {
                case 'pageload':
                    this.loadPreview();
                    break;
                case 'parenthover':
                    this.$el.parent().one(this.getNamespacedEvent('mouseenter'),
                        this.loadPreview.bind(this));
                    break;
                case 'none':
                    this.$el.one(this.getNamespacedEvent('mouseenter'),
                        this.loadPreview.bind(this));
                    break;
                default:
                    throw 'Prefetch setting not recognized: ' + this.options.prefetch;
                    break;
            }
        },
        setPosition: function (event) {

            $wrapper = this.$el.find('.mini-preview-wrapper');
            console.log('called', $wrapper);
            if (window.innerWidth - event.pageX <= 256) {
                $wrapper.addClass('right');
            } else if (event.pageX <= 256) {
                $wrapper.addClass('left');
            }
        },
        resetPosition: function (event) {
            $wrapper = this.$el.find('.mini-preview-wrapper');
            $wrapper.removeClass('left right');

        },
        loadPreview: function () {
            this.$el.find('.' + PREFIX + '-frame')
                .attr('src', this.$el.attr('href'))
                .on('load', function () {
                    // some sites don't set their background color
                    $(this).css('background-color', '#fff');
                    $(this).parent().find('.' + PREFIX + '-loading').css('display', 'none');
                })
        },

        getNamespacedEvent: function (event) {
            return event + '.' + PREFIX + '_' + this.counter;
        },

        destroy: function () {
            this.$el.parent().off(this.getNamespacedEvent('mouseenter'));
            this.$el.off(this.getNamespacedEvent('mouseenter'));
            this.$el.find('.' + PREFIX + '-wrapper').remove();
        }
    };
})(jQuery);

