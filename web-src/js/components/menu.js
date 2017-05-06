var App = App || {};

(function ($) {

    App.Menu = {
        init: init,
    };

    /**
     * Init function
     */
    function init (ajaxResponce, isNotOne) {
        $('.menu .menu__item')
            .off('click.menuItemClick')
            .on('click.menuItemClick', function(e) {
                $('.menu .menu__item').removeClass('active');
                $(this).addClass('active');
                var mode = $(this).attr('data-mode');
                changeMode(ajaxResponce, mode, isNotOne);
            });
    }

    /**
     * Change mode
     */
    function changeMode(ajaxResponce, mode, isNotOne) {
        $('#whiteRabbit').removeAttr('class').addClass(mode);
        App.AppendCards.init(ajaxResponce, mode, isNotOne);
        App.CardsActions.init(ajaxResponce);
        if (mode === 'responsiveTemplate') {
            App.Grid.init();
        }
    }
})(jQuery);