var App = App || {};

(function ($) {

    App.AppendCards = {
        init: init,
    };

    /**
     * Append default cards
     */
    function init(data, mode, isNotOne) {
        var result = '';
        if (isNotOne) {
            for (i in data) {
                result += window['App']['Card'][mode](data[i].fullName, data[i].avatar, data[i].location, data[i].reviewTitle, data[i].reviewBody, data[i].starRating, data[i].createdOn, i);
            }
        } else {
            result = window['App']['Card'][mode](data.fullName, data.avatar, data.location, data.reviewTitle, data.reviewBody, data.starRating, data.createdOn, -1);
        }
        $('#whiteRabbit').addClass(mode);
        $('#whiteRabbitDetails').html('');
        $('#whiteRabbitCards').html('').append(result);
    }
})(jQuery);