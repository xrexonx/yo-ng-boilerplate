'use strict';

/**
 * @ngdoc overview
 * @name yoNgBolierplateApp
 * @description
 * # yoNgBolierplateApp
 *
 * Main module of the application.
 */
angular
  .module('yoNgBolierplateApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
