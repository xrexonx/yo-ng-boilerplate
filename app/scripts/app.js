'use strict';

/**
 * @ngdoc overview
 * @name yoNgBolierplateApp
 * @description
 * # yoNgBolierplateApp
 *
 * Main module of the application.
 */

//var myApp = angular.module('myApp', ['ui.router']);
angular
  .module('yoNgBoilerPlateApp', ['ui.router'])


    .config(function($stateProvider, $urlRouterProvider) {

      console.log($stateProvider);
      console.log($urlRouterProvider);

      function _getView (viewName) {
        return 'views/'+viewName+'.html';
      }



      $stateProvider
          .state('/', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })
          .state('project', {
            url: '/:id/:view',
            templateUrl: _getView('project'),
            controllerProvider: function($stateParams) {
              return $stateParams.view + 'Controller';
            }
          });

      $urlRouterProvider.otherwise('/');


  //.config(function ($routeProvider) {
  //    console.log($routeProvider);
  //  $routeProvider
  //    .when('/', {
  //      templateUrl: 'views/main.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/about', {
  //      templateUrl: 'views/about.html',
  //      controller: 'AboutCtrl',
  //      controllerAs: 'about'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  });
