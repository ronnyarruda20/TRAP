'use strict';

angular.
  module('trapApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        otherwise('/contato');
    
  }]);