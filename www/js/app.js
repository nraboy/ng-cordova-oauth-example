// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("ExampleController", function($scope, $cordovaOauth) {

    $scope.imgurLogin = function() {
        $cordovaOauth.imgur("CLIENT_ID_HERE").then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

    $scope.twitterLogin = function() {
        $cordovaOauth.twitter("CLIENT_ID_HERE", "CLIENT_SECRET_HERE").then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

    $scope.facebookLogin = function() {
        $cordovaOauth.facebook("CLIENT_ID_HERE", ["email"], {"auth_type": "rerequest"}).then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

});
