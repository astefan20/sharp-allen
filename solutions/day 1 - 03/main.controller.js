(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ["$scope"];

    function MainController($scope) {
        var mainViewModel = this;

        mainViewModel.title = "Hello";

        $scope.$watch("mainViewModel.name", function (newValue, oldValue) {
            if (!newValue) return;
            
            if (newValue.indexOf("Xavier") !== -1) {
                alert("Welcome, professor!");
            }
        });
    }
})(angular);