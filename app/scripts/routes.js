(function () {
    'use strict';

    angular
        .module('AppRoutes')
        .config(function($stateProvider, $urlRouterProvider) {

            function _getView (viewName) {
                return 'views/'+viewName+'.html';
            }

            $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: 'views/main.html',
                    controller: 'mainController',
                    controllerAs: 'main'
                })
                .state('app', {
                    url: '/:view',
                    templateUrl: function($stateParams) {
                        return _getView($stateParams.view);
                    },
                    controllerProvider: function($stateParams) {
                        return $stateParams.view + 'Controller';
                    }
                });

            $urlRouterProvider.otherwise('/');
        });

})();