(function (angular) {
    'use strict';

    angular.module('app')
        .directive('mutant', function () {
            return {
                restrict: "EA",
                transclude: true,
                scope: {
                    props: "="
                },
                templateUrl: "app/layout/mutant.tpl.html",
                compile: function (element, attributes) {
                    console.log("Inside compile");
                    return {
                        pre: function (scope, element, attrs) {
                            console.log("Inside pre fn");
                        },
                        post: function (scope, element, attrs) {
                            console.log("Inside post fn");
                        }
                    }
                },
                // link: function(scope, element, attrs) {
                //     console.log("Inside link");
                // },
                // link: {
                //     pre: function (scope, element, attrs) {
                //         console.log("Inside pre-link");
                //     },
                //     post: function (scope, element, attrs) {
                //         console.log("Inside post-link");
                //     }
                // },
                controller: function ($scope) {
                    console.log("Inside controller");
                }
            };
        });
})(angular);