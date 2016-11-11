(function (angular) {
    'use strict';

    angular.module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$state'];

    function MainController($state) {
        var mainViewModel = this;

        mainViewModel.name = 'Alex';
        mainViewModel.loadOtherPage = loadOtherPage;

        function loadOtherPage() {
            $state.go('main2');
        }

	$rootScope.$watch("mainViewModel.name", function (newValue, oldValue) {
            // logic doesn't matter now
        });
    }
})(angular);