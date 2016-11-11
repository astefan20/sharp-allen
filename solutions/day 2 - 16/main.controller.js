(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['superheroService', '$q'];

    function MainController(superheroService, $q) {
        var mainViewModel = this;

        mainViewModel.superheroes = [];
        mainViewModel.superpowers = [];

        superheroService.getSuperheroes()
            .then(function (result) {
                mainViewModel.superheroes = result.data;

                return superheroService.getSuperpowers();
            }, function (result) {
                console.log(result.data);
                // log this, error occured;
                return $q.reject(result);
            })
            .catch(function (result) {
                console.log('Hey, I caught the error');
            });
    }
})(angular);