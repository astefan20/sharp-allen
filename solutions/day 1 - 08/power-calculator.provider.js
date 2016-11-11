(function (angular) {
    'use strict';

    angular.module('app')
        .provider('powerCalculatorProvider', powerCalculator);

    powerCalculator.$inject = [];

    function powerCalculator() {
        var self = this;

        var basePower = 10;

        self.setBasePower = setBasePower;
        self.$get = get;

        function Calculator() {
            this.calculatePower = function (power) {
                return basePower + power;
            }
        }

        function get() {
            return new Calculator();
        }

        function setBasePower(power) {
            basePower = power;
        }
    }
})(angular);