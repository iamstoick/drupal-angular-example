var articles = angular.module('articles', ['datarefresh']);
// Bootstrap the Angular the all-articles.tpl.php get loaded.

(function ($) {

  Drupal.behaviors.angular_view = {
    // This behavior function is called when new element is being added.
    attach: function (context, settings) {
      angular.bootstrap(document.getElementById('article'), ['articles']);
    }
  };

})(jQuery);
