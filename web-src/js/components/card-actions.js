var App = App || {};

(function ($) {

    App.CardsActions = {
        init: init,
    };

    /**
     * Common init function
     */
    function init(ajaxResponce) {
        /**
         * Show details
         */
        $('.defaultTemplate #whiteRabbitCards .card')
            .off('click.showDetails')
            .on('click.showDetails', function(e) {

                var id = $(this).attr('data-id');
                var result = '';
                if (id) {
                    var fullName = ajaxResponce[id].fullName || 'no name';
                    var location = ajaxResponce[id].location || 'no location';
                    var reviewTitle = ajaxResponce[id].reviewTitle || 'no title';
                    var reviewBody = ajaxResponce[id].reviewBody || 'no text';
                    reviewBody = App.Utils.nl2br(reviewBody);
                    var starRating = ajaxResponce[id].starRating || '5';
                    var createdOn = ajaxResponce[id].createdOn || 'no date';

                    result += '<div class="description">* Click here to hide</div>';
                    result += '<h2>Details</h2>';
                    result += '<div class="text-md-2">';
                    result += '<p class="pt-12"><strong>Name:</strong> ' + fullName + '</p>';
                    result += '<p class="pt-12"><strong>Rate:</strong> ' + starRating + '</p>';
                    result += '<p class="pt-12"><strong>Review title:</strong> ' + reviewTitle + '</p>';
                    result += '<p class="pt-12"><strong>Review body:</strong></p>';
                    result += '<p class="pt-12">' + reviewBody + '</p>';
                    result += '<p class="pt-12"><strong>Location:</strong> ' + location + '</p>';
                    result += '<p class="pt-12"><strong>Created:</strong> ' + createdOn + '</p>';
                    result += '</div>';
                    $('#whiteRabbitDetails').html('').append(result);
                } else {
                    var fullName = ajaxResponce.fullName || 'no name';
                    var location = ajaxResponce.location || 'no location';
                    var reviewTitle = ajaxResponce.reviewTitle || 'no title';
                    var reviewBody = ajaxResponce.reviewBody || 'no text';
                    reviewBody = App.Utils.nl2br(reviewBody);
                    var starRating = ajaxResponce.starRating || '5';
                    var createdOn = ajaxResponce.createdOn || 'no date';

                    result += '<div class="description">* Click here to close</div>';
                    result += '<h2>Details</h2>';
                    result += '<div class="text-md-2">';
                    result += '<p class="pt-12"><strong>Name:</strong> ' + fullName + '</p>';
                    result += '<p class="pt-12"><strong>Rate:</strong> ' + starRating + '</p>';
                    result += '<p class="pt-12"><strong>Review title:</strong> ' + reviewTitle + '</p>';
                    result += '<p class="pt-12"><strong>Review body:</strong></p>';
                    result += '<p class="pt-12">' + reviewBody + '</p>';
                    result += '<p class="pt-12"><strong>Location:</strong> ' + location + '</p>';
                    result += '<p class="pt-12"><strong>Created:</strong> ' + createdOn + '</p>';
                    result += '</div>';
                    $('#whiteRabbitDetails').html('').append(result);
                }

                /**
                 * Hide/close details block
                 */
                $('#whiteRabbitDetails')
                    .off('click.closeDetils')
                    .on('click.closeDetils', function (e) {
                        $('#whiteRabbitDetails').html('');
                    });
            });
    }
})(jQuery);