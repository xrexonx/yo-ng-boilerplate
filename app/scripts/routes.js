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
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .state('view', {
                    url: '/:view',
                    templateUrl: _getView('project'),
                    controllerProvider: function($stateParams) {
                        return $stateParams.view + 'Controller';
                    }
                });

            $urlRouterProvider.otherwise('/');
        });

})();