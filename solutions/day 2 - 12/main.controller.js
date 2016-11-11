(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = [];

    function MainController() {
        var mainViewModel = this;
    }
})(angular);