(function (angular) {
    'use strict';

    angular
      .module('app')
      .config(config)
      .run(run);

    config.$inject = ['$stateProvider', 'powerCalculatorProviderProvider'];

    function config($stateProvider, powerCalculatorProvider) {
        powerCalculatorProvider.setBasePower(20);

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