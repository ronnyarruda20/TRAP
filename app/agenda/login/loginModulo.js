'use strict';

var loginModulo = angular.module('loginModulo', [])
.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login',{
          templateUrl:'agenda/login/login-template.html',
          controller: 'loginController'
        }).
        otherwise('/login');
    
  }]);