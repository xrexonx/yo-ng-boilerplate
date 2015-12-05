(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('detailsController', function ($scope, $stateParams) {

            var vm = $scope;
            vm.view = $stateParams.view;

        });

})();