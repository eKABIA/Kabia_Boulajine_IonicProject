// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.Geolocalisation', {
    url: '/Geolocalisation',
    views: {
      'menuContent': {
        templateUrl: 'templates/Geolocalisation.html',
        controller: 'MapCtrl'
      }
    }
  })
.state('app.Profil', {
      url: '/Profil',
      views: {
        'menuContent': {
          templateUrl: 'templates/Profil.html'
        }
      }
    })
  .state('app.Liste_Object', {
      url: '/Liste_Object',
      views: {
        'menuContent': {
          templateUrl: 'templates/Liste_Object.html'
        }
      }
    })
    .state('app.Reglage', {
      url: '/Reglage',
      views: {
        'menuContent': {
          templateUrl: 'templates/Reglage.html',

        }
      }
    })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Profil');
});
