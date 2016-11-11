(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = [];

    function MainController() {
        var mainViewModel = this;

        mainViewModel.mutants = [{name: 'James Howlett', character: 'Wolverine', power: 89}, 
        {name: 'Max Eisenhardt', character: 'Magneto', power: 95}, 
        {name: 'Anna Marie', character: 'Rogue', power: 85}];
    }
})(angular);