var App = App || {};

(function ($) {

    /**
     * Responsive grid
     */
    App.Grid = {
        init: init,
    };

    /**
     * Init function
     */
    function init () {
        responsiveGrid();

        $(window).resize(function () {
            if ($('.responsiveTemplate').length) {
                responsiveGrid();
            }
        });
    }

    /**
     * Set up grid
     */
    function responsiveGrid () {
        var oddvHeight = 0;
        var evenHeight = 0;

        if ($('.responsiveTemplate').length) {
            $('#whiteRabbitCards .card:nth-child(odd)')
                .each(function () {
                    $(this).css({
                        left: '15px',
                        top: oddvHeight,
                    });
                    oddvHeight = oddvHeight + $(this).height() + 24;
                });

            $('#whiteRabbitCards .card:nth-child(even)')
                .each(function () {
                    $(this).css({
                        left: 'calc(50% + 22.5px)',
                        top: evenHeight,
                    });
                    evenHeight = evenHeight + $(this).height() + 24;
                });

            $('#whiteRabbitCards .card').css({ opacity: 1 });
        }
    }
})(jQuery);