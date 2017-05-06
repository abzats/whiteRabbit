var App = App || {};

(function ($) {

    App.Matrix = {
        init: init,
    };

    /**
     * Animated 'first screen'
     */
    function init () {
        /**
         * Typed text
         */
        $('.matrix').typed({
            strings: ["Wake up, Neo...^1000", "Th^200e Matr^200ix h^200as y^200ou^400.^400.^400.^400","Follow the white rabbit.^1200","Knock, knock, Neo.^2000"],
            typeSpeed: 0,
            startDelay: 800,
            backDelay: 200,
            showCursor: true,
            cursorChar: "|",
            contentType: 'html',
            loop: false,
            callback: function() {
                hideMatrix();
            },
        });

        $('header')
            .off('click.hideMatrix')
            .on('click.hideMatrix', function () {
                hideMatrix();
            });

        /**
         * Hide 'first screen'
         */
        function hideMatrix() {
            $('.main').css('display', 'block');
            $('header').css('opacity',0);
            setTimeout(function() {
                $('header').hide();
            }, 500);
        }


    }
})(jQuery);