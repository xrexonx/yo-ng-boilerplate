(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('mainController', function ($scope, $stateParams) {

            var vm = $scope;
            vm.view = $stateParams.view;

        });

})();