(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('mainController', function ($scope, $stateParams) {

            console.log($stateParams);
            console.log($scope);

        });

})();