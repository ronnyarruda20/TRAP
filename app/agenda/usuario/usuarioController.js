'use strict';

usuarioModulo.controller('usuarioController', [
	'$scope',  '$localStorage', '$location', 'FlashService', 'usuarioService',
	function($scope,  $localStorage , $location, FlashService, usuarioService){
		$scope.dataLoading = false;

		$scope.registrar = function(usuario) {
			$scope.dataLoading = true;
			usuarioService.save(usuario, function(){
				$location.path('/login');
				FlashService.Error("Usuario criado com sucesso");
			},function(response){
				FlashService.Error(response.message);
				$scope.dataLoading = false;
			});
		};

	}]);

