(function (angular) {
    'use strict';

    angular.module('app')
        .service('superheroService', superheroService);

    superheroService.$inject = ["$http"];

    function superheroService($http) {
        var self = this;

        self.getSuperheroes = getSuperheroes;
        self.getSuperpowers = getSuperpowers;

        function getSuperheroes() {
            var request = {
                method: 'GET',
                url: 'http://localhost:9090/api/superheroes', // repalce superheroes with error
                headers: {}
            };

            // return $http.get('http://localhost:9090/api/superheroes');

            return $http(request);
        }

        function getSuperpowers() {
            return $http.get('http://localhost:9090/api/superpowers');
        }
    }
})(angular);