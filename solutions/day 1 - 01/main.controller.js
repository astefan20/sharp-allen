(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ["$scope"];

    function MainController($scope) {
        var mainViewModel = this;

        $scope.title = "Hello World";
    }
})(angular);