// Ionic TAJMAHAL Indian Restaurant App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'tajmahal' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'tajmahal.services' is found in services.js
// 'tajmahal.controllers' is found in controllers.js
angular.module('tajmahal', ['ionic', 'tajmahal.controllers', 'tajmahal.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('root', {
      url : '/root',
      templateUrl : 'templates/sidemenu.html',
      abstract : true,
      controller : 'RootController'
  })
  .state('root.home', {
      url: '/home',
      views: {
          'root': {
              templateUrl: 'templates/home.html',
              controller : 'HomeController'
          }
      }
  })
  .state('root.menu', {
      url: '/menu',
      views: {
          'root': {
              templateUrl: 'templates/menu.html',
              controller : 'MenuController'
          }
      }
  })
  .state('root.food-category', {
    url: '/food-category/:foodCategoryId',    
    views: {
      'root': {
        templateUrl: 'templates/food-category.html',
        controller : 'FoodCategoryController'
      }
    }
  })
  .state('root.contact', {
      url: '/contact',
      views: {
          'root': {
              templateUrl: 'templates/contact.html',
              controller : 'ContactController'
          }
      }
  })
  
  $urlRouterProvider.otherwise('/root/home');
  
});