(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['superheroService'];

    function MainController(superheroService) {
        var mainViewModel = this;

        mainViewModel.superheroes = [];

        superheroService.getSuperheroes()
            .then(function (result) {
                mainViewModel.superheroes = result.data;
            }, function (result) {
                // log this, error occured;
            });
    }
})(angular);