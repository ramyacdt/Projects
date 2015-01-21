angular.module('tajmahal.controllers', [])

.controller('NavController', function($scope, $ionicSideMenuDelegate) {
      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('RootController', function($scope, $ionicSideMenuDelegate) {})

.controller('HomeController', function($scope, $ionicSideMenuDelegate) {})

.controller('MenuController', function($scope, $ionicSideMenuDelegate, FoodCategories) {
	$scope.foodCategories = FoodCategories.all();
})

.controller('FoodCategoryController', function($scope, $stateParams, $ionicSideMenuDelegate, FoodCategories) {
    $scope.foodCategoryName = FoodCategories.get($stateParams.foodCategoryId).name;
    $scope.items = FoodCategories.get($stateParams.foodCategoryId).items;
})

.controller('ContactController', function($scope, $ionicSideMenuDelegate) {})


