'use strict';

angular.module('navbarModulo',[])
.controller('navbarController', ['$scope', 'AuthenticationService', '$location',
	function($scope, AuthenticationService, $location){

		$scope.sair = function(){
			AuthenticationService.ClearCredentials();
			$location.path('/login');
		}
}]);