(function () {
  'use strict';

  /*Main Modules*/
  angular.module('rexon', ['AppRoutes', 'AppControllers', 'AppServices', 'AppDirectives', 'AppFilters']);

  /*Defining Sub Modules*/
  angular.module('AppRoutes', ['ui.router']);
  angular.module('AppServices', []);
  angular.module('AppDirectives', []);
  angular.module('AppFilters', []);
  angular.module('AppControllers', []);


})();