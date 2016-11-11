(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                controller: 'MainController',
                controllerAs: 'mainViewModel',
                templateUrl: '/app/layout/main.tpl.html'
            })
            .state('main2', {
                url: '/main2',
                controller: 'Main2Controller',
                controllerAs: 'main2ViewModel',
                templateUrl: '/app/layout/main2.tpl.html'
            })
            .state('main2.child', {
                url: '/child/:id',
                parent: 'main2',
                templateUrl: '/app/layout/child.tpl.html'
            });
    }

    run.$inject = ['$state'];

    function run($state) {
        $state.go('main');
    }
})(angular);