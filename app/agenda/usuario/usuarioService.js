'use strict';

usuarioModulo.factory('usuarioService', [ '$resource', 'ENV_VARS',
	function( $resource, ENV_VARS){
		return $resource(ENV_VARS.apiUrl + '/usuario/criar', null, {});
	}]);

