(function (angular) {
    'use strict';

    angular.module('app')
        .service('powerCalculatorService', powerCalculator);

    powerCalculator.$inject = [];

    function powerCalculator() {
        var self = this;

        var basePower = 10;

        self.calculatePower = calculatePower;
        self.setBasePower = setBasePower;

        function calculatePower(power) {
            return basePower + power;
        }

        function setBasePower(power) {
            basePower = power;
        }
    }
})(angular);