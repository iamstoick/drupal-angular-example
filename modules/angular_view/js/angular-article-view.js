var articles = angular.module('articles', []);
// Bootstrap the Angular the all-articles.tpl.php get loaded.
jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('article'), ['articles']);
});

articles.controller('articlecontroller', function($scope, $http) {
  // $scope.foobar = 'Ang mga pusa na lumalaki.';
  $http.get('/nodes/json').success(function(result) {
    // $scope.articles = result;
    $scope.articles = (function () {
      return result.nodes;
    })();
  });
});
