'use strict';

var usuarioModulo = angular.module('usuarioModulo',['ngStorage'])

.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cadastrarUsuario',{
          templateUrl:'agenda/usuario/usuario-cadastro-template.html',
          controller: 'usuarioController'
        }).
        otherwise('/cadastrarUsuario');
    
  }]);