var articles = angular.module('articles', []);
// Bootstrap the Angular the all-articles.tpl.php get loaded.
jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('article'), ['articles']);
});
