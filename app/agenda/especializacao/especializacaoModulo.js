'use strict';

var especializacaoModulo = angular.module('especializacaoModulo',['ngResource'])

.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/contato/:usuarioId/visualizar/:contatoId/especializacao',{
          templateUrl:'agenda/especializacao/especializacao-contato-template.html',
          controller: 'especializacaoContatoController'
        }).
        when('/especializacao',{
          templateUrl:'agenda/especializacao/especializacao-template.html',
          controller: 'especializacaoController'
        });

  }]);