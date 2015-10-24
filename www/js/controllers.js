angular.module('food-bank.controllers', [])

// In your controllers: 
// - `ionicMaterialInk.displayEffect()` (will need to happen once on controller activation and then repeat every time the objects update)
// - `ionicMaterialMotion.ripple()` (etc.)

.controller('NewsFeedCtrl', function($scope, $state, $location, $http, Newsposts) {
  var validNewsposts = [];

  var refreshNewsPage = function (validNewsposts) {
    return 0;
  };

  $http.get("http://asdffoodbank.herokuapp.com/newsposts.json")
  .then(function(response) {
   validNewsposts = Newsposts.all(response);
   refreshNewsPage(validNewsposts);
 }.bind(this), function() {
  validNewsposts = Newsposts.fail();
  refreshNewsPage(validNewsposts);
}.bind(this))

  $scope.goToBlog = function() {
    $state.go('blog');
  };
})

.controller('MapCtrl', function($scope, $state, $location) {
  $http.get("http://foodbank.herokuapp.com/newsposts.json")
  .success(function(response) {
   validNewsposts = Newsposts.all(response);
 }.bind(this));

  $scope.goToBlog = function() {
    $state.go('blog');
  };
})

.controller('MoreCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  $scope.goToBlog = function() {
    $state.go('blog');
  }
  ionicMaterialInk.displayEffect();
  $scope.goToNotifications = function() {
    $state.go('notifications');
  }
})

.controller('BlogCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
})

.controller('NotificationCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {

});