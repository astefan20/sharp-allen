(function (angular) {
    'use strict';

    angular.module('app')
        .factory('powerCalculatorFactory', powerCalculator);

    powerCalculator.$inject = [];

    function powerCalculator() {
        var basePower = 10;

        return {
            calculatePower: calculatePower,
            setBasePower: setBasePower
        };

        function calculatePower(power) {
            return basePower + power;
        }

        function setBasePower(power) {
            basePower = power;
        }
    }
})(angular);