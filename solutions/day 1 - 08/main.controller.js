(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ["powerCalculatorProvider", "powerCalculatorService", "powerCalculatorFactory"];

    function MainController(powerCalculatorProvider, powerCalculatorService, powerCalculatorFactory) {
        var mainViewModel = this;

        mainViewModel.providerPower = powerCalculatorProvider.calculatePower(50);
        mainViewModel.servicePower = powerCalculatorService.calculatePower(50);
        mainViewModel.factoryPower = powerCalculatorFactory.calculatePower(50);
    }
})(angular);