<div id="article" ng-controller="articlecontroller">
  <!-- Iterate the result. Equivalent to foreach in php. -->
  <div ng-repeat="article in articles">
    <h2>{{article.node.title}}</h2>
    <div class="body">{{article.node.Body}}</div>
    <div class="image"><img src="{{article.node.Image}}" /></div>
  </div>
</div>
