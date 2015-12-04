(function () {
    'use strict';

    angular
        .module('AppServices')
        .service('Http', function ($http, $httpParamSerializer) {

            function _http (url, method, data, headers) {
                return $http({
                    url     : url,
                    method  : method || 'GET',
                    headers : headers || {'Content-Type': 'application/x-www-form-urlencoded' },
                    data    : $httpParamSerializer(data) || {},
                    cache   : true
                });
            }

            return {
                send : _http
            };

        });

})();