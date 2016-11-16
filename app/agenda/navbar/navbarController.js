'use strict';

angular.module('navbarModulo',[])
.controller('navbarController', ['$scope', 'AuthenticationService', '$location', '$routeParams', '$rootScope',
	function($scope, AuthenticationService, $location, $routeParams, $rootScope){

		$scope.sair = function(){
			AuthenticationService.ClearCredentials();
			$location.path('/login');
		};
}]);