articles.controller('BodyController', [function () { }]);
articles.controller('articlecontroller', ['$scope', '$http', function($scope, $http) {
  // $scope.foobar = 'Ang mga pusa na lumalaki.';
  $http.get('/nodes/json').success(function(result) {
    // $scope.articles = result;
    $scope.articles = (function () {
      return result.nodes;
    })();
  });
}]);
