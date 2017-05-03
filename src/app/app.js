'use strict';
(function (angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router']);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<comp-mainview></comp-mainview>'
    };
    var about = {
      name: 'aboutus',
      url: '/aboutus',
      template: '<comp-aboutus></comp-aboutus>'
    };
    var register = {
      name: 'register',
      url: '/register',
      template: '<comp-usfile></comp-usfile>'
    };
    var play = {
      name: 'play',
      url: '/play',
      template: '<comp-play></comp-play>'
    };
    var win = {
      name: 'win',
      url: '/win',
      template: '<comp-win></comp-win>'
    };
    $stateProvider.state(main);
    $stateProvider.state(about);
    $stateProvider.state(register);
    $stateProvider.state(play);
    $stateProvider.state(win);
    $urlRouterProvider.otherwise('/main');
  }
})(angular);