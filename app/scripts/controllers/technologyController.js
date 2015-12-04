(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('technologyController', function ($scope, $stateParams) {

            console.log($stateParams);
            console.log($scope);

        });

})();