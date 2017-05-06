var App = App || {};

(function ($) {

    App.Utils = {
        nl2br: nl2br,
    };

    /**
     * Replace '\n' with '<br />
     */
    function nl2br (text) {
        text = text.replace(/\r?\n/g, '<br />');
        return text;
    }
})(jQuery);