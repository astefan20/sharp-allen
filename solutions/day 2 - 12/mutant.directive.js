(function (angular) {
    'use strict';

    angular.module('app')
        .directive('mutant', mentor);

    function mentor() {
        return {
            restrict: 'E',
            require: '^^mentor',
            scope: true,
            templateUrl: 'app/layout/mutant.tpl.html',
            link: function (scope, element, attrs, ctrl) {
                scope.message = 'Wolverine is the discipol of ' + ctrl.name + ' who is a ' + ctrl.getMentorSuperpower();

                console.log("Mutant directive");
            }
        }
    }
})(angular);