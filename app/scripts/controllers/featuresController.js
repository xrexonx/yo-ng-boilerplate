(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('featuresController', function ($scope, $stateParams) {


            console.log($stateParams);
            console.log($scope);

        });

})();