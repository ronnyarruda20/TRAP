'use strict';

var profissaoModulo = angular.module('profissaoModulo',['ngResource'])

.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');
   $routeProvider.
        when('/profissao', {
        	templateUrl : 'agenda/profissao/profissao-template.html',
        	controller: 'profissaoController'
        });

   }]);
