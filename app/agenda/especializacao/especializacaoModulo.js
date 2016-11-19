'use strict';

var especializacaoModulo = angular.module('especializacaoModulo',['ngResource'])

.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/contato/:contatoId/especializacao',{
          templateUrl:'agenda/especializacao/especializacao-template.html',
          controller: 'especializacaoController'
        })

  }]);