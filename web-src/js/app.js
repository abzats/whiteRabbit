var App = App || {};

(function ($) {

    App.Core = {
        init: init,
    };

    var ajaxResponce = false;
    var isNotOne = true;

    /**
     * Common init function
     */
    function init() {
        if ($('#whiteRabbit').length) {
            getData('/data/data.json');
        }
    }

    /**
     * Get data
     */
    function getData(url) {
        $.ajax({
            method: 'GET',
            url: url,
            dataType: "json"
        }).done(function (data) {
            ajaxResponce = data;
            if ('undefined' !== typeof data.firstName) {
                isNotOne = false;
            }

            App.AppendCards.init(ajaxResponce, 'defaultTemplate', isNotOne);
            App.CardsActions.init(ajaxResponce);
            App.Menu.init(ajaxResponce, isNotOne);
            $('#details').appendTo('#whiteRabbitDetails');
        });
    }

    $(document)
        .ready(function () {
            App.Core.init();
        });
})(jQuery);