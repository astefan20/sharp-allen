(function (angular) {
    'use strict';

    angular.module('app')
        .directive('header', function() {
            return {
                restrict: 'E',
                templateUrl: 'app/layout/header.tpl.html',
                scope: {
                    message: '='
                }
            }
    });
})(angular);