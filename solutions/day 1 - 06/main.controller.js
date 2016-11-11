(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ["$scope"];

    function MainController($scope) {
        var mainViewModel = this;

        mainViewModel.title = "Hello, ";
        mainViewModel.name = "Charles Xavier";

        mainViewModel.xmen = [{ name: 'James Howlett', character: 'Wolverine', power: 89 },
        { name: 'Max Eisenhardt', character: 'Magneto', power: 95 },
        { name: 'Anna Marie', character: 'Rogue', power: 85 }];

        mainViewModel.getXmen = getXmen;

        function getXmen() {
            return [{ name: 'James Howlett', character: 'Wolverine', power: 89 },
            { name: 'Max Eisenhardt', character: 'Magneto', power: 95 },
            { name: 'Anna Marie', character: 'Rogue', power: 85 }];
        }
    }
})(angular);