(function (angular) {
    'use strict';

    angular.module('app')
        .directive('mentor', mentor);

    function mentor() {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/mentor.tpl.html',
            // link: {
            //     pre: function (scope, element, attrs) {
            //         scope.name = 'Charles Xavier';
            //         console.log("Mentor directive");
            //     }
            // }
            link: function(scope, element, attrs) {
                scope.name = 'Charles Xavier';
                console.log("Mentor directive");
            }
        }
    }
})(angular);