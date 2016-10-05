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
              controller: 'MainController',
              controllerAs: 'mainViewModel',
              templateUrl: '/app/layout/main.tpl.html'
          });
    }

    run.$inject = ['$state'];

    function run($state) {
        $state.go('main');
    }
})(angular);