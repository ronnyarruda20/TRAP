'use strict';

// var url = 'http://192.168.0.4:8000/agenda/contato/json';

usuarioModulo.factory('usuarioService', [ '$resource',
	function( $resource){

		return $resource(url+'/:usuarioId.json', {usuarioId:'usuario'}, {});

	}]);

