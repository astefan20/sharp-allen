(function (angular) {
    'use strict';

    angular.module('app')
        .factory('superheroInterceptor', superheroInterceptor);

    superheroInterceptor.$inject = ['$q'];

    function superheroInterceptor($q) {
        return {
            request: function (config) {
                return config;
            },

            requestError: function (rejection) {
                // log or do something
                return $q.reject(rejection);
            },

            response: function (response) {
                console.log('I intercepted the response!');
                return response;
            },

            responseError: function (rejection) {
                // log or do something
                return $q.reject(rejection);
            }
        };
    }
})(angular);