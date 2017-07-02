var App = App || {};


(function ($) {

    /**
     * Cards templates
     */
    App.Card = {
        defaultTemplate: defaultTemplate,
        responsiveTemplate: responsiveTemplate,
    };

    /**
     * Default cards
     */
    function defaultTemplate(fullName, avatarUrl, location, reviewTitle, reviewBody, starRating, createdOn, id) {
        var fullName = fullName || 'no name';
        var avatarUrl = avatarUrl || '';
        var location = location || 'no location';
        var reviewTitle = reviewTitle || '';
        var reviewBody = reviewBody || '';
        reviewBody = App.Utils.nl2br(reviewBody);
        var starRating = starRating || '5';
        var createdOn = createdOn || '';

        var reviewTitleFormated;
        if (reviewTitle.length > 40) {
            reviewTitleFormated = reviewTitle.substring(0, 40) + '...';
        } else {
            reviewTitleFormated = reviewTitle;
        }

        var card = '';
        card += '<div class="card stars-' + starRating + '" data-id="' + id + '">';
        card += '<div class="card__top-overlay text-center">';
        card += '<h4 class="text-lg-1">';
        card += reviewTitleFormated;
        card += '</h4>';

        card += '<div class="card__avatar">';
        if (avatarUrl === '') {
            card += '<img src="web/img/noavatar.png" alt="' + fullName + '" class="card__avatar__img" />';
        } else {
            card += '<img src="data/img/' + avatarUrl + '" alt="' + fullName + '" class="card__avatar__img" />';
        }
        card += '</div>';

        card += '</div>';

        card += '<div class="card-block">';
        card += '<div class="one_line text-center text-md-2 pb-12">';
        card += fullName;
        card += '</div>';

        card += '<div class="card__stars-block pb-12">';
        card += '<img src="web/img/' + starRating + '-stars-260x48.png" alt="' + starRating + 'stars" class="card__stars-block__img" />';
        card += '</div>';

        card += '<div class="card__text-block text-gray">';
        card += '<p>';
        card += reviewBody;
        card += '</p>';
        card += '</div>';

        card += '<ul class="table text-md-1">';
        card += '<li>';
        card += '<div class="text-left">';
        card += location;
        card += '</div>';
        card += '<div class="text-right">';
        card += createdOn;
        card += '</div>';
        card += '</li>';
        card += '</ul>';
        card += '</div>';

        card += '<div class="card__hover-overlay">';
        card += '<div class="card__hover-overlay__text text-md-1">';
        card += 'See more';
        card += '</div>';
        card += '</div>';
        card += '</div>';

        return card;
    }


    /**
     * Responsive cards
     */
    function responsiveTemplate(fullName, avatarUrl, location, reviewTitle, reviewBody, starRating, createdOn, id) {
        var fullName = fullName || 'no name';
        var location = location || 'no location';
        var reviewTitle = reviewTitle || '';
        var reviewBody = reviewBody || '';
        reviewBody = App.Utils.nl2br(reviewBody);
        var starRating = starRating || '5';
        var createdOn = createdOn || '';


        var card = '';
        card += '<div class="card text-left">';

        card += '<div class="card__stars-block card__stars-block--block pb-12">';
        card += '<img src="web/img/' + starRating + '-stars-260x48.png" alt="' + starRating + 'stars" class="card__stars-block__img" />';
        card += '</div>';

        card += '<div class="card__top-overlay compact">';
        card += '<h4 class="text-md-1">';
        card += reviewTitle;
        card += '</h4>';
        card += '</div>';

        card += '<div class="card-block">';
        card += '<div class="one_line text-md-2 pb-12">';
        card += '<i>' + fullName + '</i>';
        card += '</div>';

        card += '<div class="card__text-block full text-gray">';
        card += '<p>';
        card += reviewBody;
        card += '</p>';
        card += '</div>';

        card += '<ul class="table text-md-1">';
        card += '<li>';
        card += '<div class="text-left">';
        card += location;
        card += '</div>';
        card += '<div class="text-right">';
        card += createdOn;
        card += '</div>';
        card += '</li>';
        card += '</ul>';
        card += '</div>';

        card += '</div>';

        return card;
    }
})(jQuery);