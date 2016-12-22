var app = angular.module("angularforms", [])

app.controller("ctrlone", function ($scope, $http) {
  $scope.submit = function (y) {
    $http.post('/users', y)
  };

  $scope.addfriend = function (x) {
    $http.post('/friends', x)
  };

})