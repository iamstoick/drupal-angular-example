articles.controller('articlecontroller', function($scope, $http) {
  // $scope.foobar = 'Ang mga pusa na lumalaki.';
  $http.get('/nodes/json').success(function(result) {
    // $scope.articles = result;
    $scope.articles = (function () {
      return result.nodes;
    })();
  });
});
