'use strict';

usuarioModulo.controller('usuarioController', [
	'$scope', 'usuarioService', '$localStorage', '$location', 'usuarioServiceLS', 'FlashService',
	function($scope, usuarioService, $localStorage , $location, usuarioServiceLS, FlashService){
		$scope.dataLoading = false;

		$scope.registrar = function(usuario) {
			$scope.dataLoading = false;
			usuarioServiceLS.Create(usuario)
			.then(function (response) {
				if (response.success) {
					FlashService.Success('Registration successful', true);
					$location.path('/login');
				} else {
					FlashService.Error(response.message);
					$scope.dataLoading = false;
				}
			});
		}

	}]);

