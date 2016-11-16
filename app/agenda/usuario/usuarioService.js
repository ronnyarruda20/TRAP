'use strict';

var urlUsuario = 'http://192.168.0.8:8090/v1/usuario/criar';

usuarioModulo.factory('usuarioService', [ '$resource',
	function( $resource){
		return $resource(urlUsuario, null, {});
	}]);

