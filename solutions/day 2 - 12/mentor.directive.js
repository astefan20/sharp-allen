(function (angular) {
    'use strict';

    angular.module('app')
        .directive('mentor', mentor);

    function mentor() {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/mentor.tpl.html',
            controller: function () {
                var self = this;

                self.name = "Charles Xavier";
                self.getMentorSuperpower = getMentorSuperpower;

                function getMentorSuperpower() {
                    return "telepath";
                }
            }
        }
    }
})(angular);