'use strict';

var contatoModulo = angular.module('contatoModulo',['ngResource'])

.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/contato/:usuarioId',{
          templateUrl:'agenda/contato/contato-lista-template.html',
          controller: 'contatoController'
        }).
        when('/contato/:usuarioId/visualizar/:contatoId',{
          templateUrl:'agenda/contato/contato-template.html',
          controller: 'contatoController'
        }).
         when('/contato/:usuarioId/novo',{
          templateUrl:'agenda/contato/contato-template.html',
          controller: 'contatoController'
        }).
         when('/contato/listagem',{
          templateUrl:'agenda/contato/listagempordemanta-template.html',
          controller: 'contatoListaController'
        }).
        otherwise('/contato/:usuarioId');
    
  }]);
