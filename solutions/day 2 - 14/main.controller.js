(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['superheroService'];

    function MainController(superheroService) {
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
            })
            .then(function (result) {
                //result is undefined because getSuperheroes had an error
                mainViewModel.superpowers = result.data;
            }, function (result) {
                // log this, error occured;
            });
    }
})(angular);