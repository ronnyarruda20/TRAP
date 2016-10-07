'use strict';

angular.
  module('trapApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        // when('/agenda', { 
        //   templateUrl: 'agenda/pessoa/pessoa.template.html',
        //   controller: 'pessoaController'
        // }).
        when('/contato',{
          templateUrl:'agenda/contato/listaContato.html',
          controller: 'contatoController'
        }).
        when('/contato/visualizar/:contatoId',{
          templateUrl:'agenda/contato/pessoaVisualizar-template.html',
          controller: 'contatoController'
        }).
        otherwise('/contato');
    
  }]);

  // template: '<phone-list></phone-list>'
 // when('/phones/:phoneId', {
        //   template: '<phone-detail></phone-detail>'
        // }).