Chart.defaults.global.colours = ['#49649e', '#ff97cc', '#ffb600', '#76bd3a', '#765bae', '#d8262c', '#11c1f3', '#ffc900'];

var qf = angular.module('quickfacts', ['ionic', 'chart.js'])


  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
