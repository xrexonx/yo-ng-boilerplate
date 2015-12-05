(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('featuresController', function ($scope, $stateParams) {

            var vm = $scope;
            vm.view = $stateParams.view;

        });

})();