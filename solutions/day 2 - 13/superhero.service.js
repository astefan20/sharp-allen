(function (angular) {
    'use strict';

    angular.module('app')
        .service('superheroService', superheroService);

    superheroService.$inject = ["$http"];

    function superheroService($http) {
        var self = this;

        self.getSuperheroes = getSuperheroes;

        function getSuperheroes() {
            var request = {
                method: 'GET',
                url: 'http://localhost:9090/api/superheroes',
                headers: {}
            };

            // return $http.get('http://localhost:9090/api/superheroes');

            return $http(request);
        }
    }
})(angular);