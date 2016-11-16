'use strict';

angular.module('navbarModulo',[])
.controller('navbarController', ['$scope', 'AuthenticationService', '$location', '$routeParams', '$rootScope',
	function($scope, AuthenticationService, $location, $routeParams, $rootScope){

		console.log($scope.usuarioId);
		console.log($rootScope.usuarioId)

		$scope.sair = function(){
			AuthenticationService.ClearCredentials();
			$location.path('/login');
		};
}]);