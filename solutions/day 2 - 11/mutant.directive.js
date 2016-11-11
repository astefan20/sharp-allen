(function (angular) {
    'use strict';

    angular.module('app')
        .directive('mutant', mentor);

    function mentor() {
        return {
            restrict: 'E',
            template: '<div>{{message}}</div>',
            //templateUrl: 'app/layout/mutant.tpl.html',
            link: function (scope, element, attrs) {
                scope.message = 'Wolverine is the discipol of ' + scope.name;

                console.log("Mutant directive");
            }
        }
    }
})(angular);