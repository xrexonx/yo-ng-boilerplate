(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('technologyController', function ($scope, $stateParams) {

            var vm = $scope;
            vm.view = $stateParams.view;

        });

})();