(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('detailsController', function ($scope, $stateParams) {

            console.log($stateParams);
            console.log($scope);

        });

})();