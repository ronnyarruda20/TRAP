'use strict';

var url = 'http://localhost:8000/agenda/contato/json';

usuarioModulo.factory('usuarioService', [ '$resource',
	function( $resource){

		return $resource(url+'/:usuarioId.json', {usuarioId:'usuario'}, {
			'get':    {method:'GET'},
			'save':   {method:'POST'},
			'query':  {method:'GET', isArray:true},
			'remove': {method:'DELETE'},
			'delete': {method:'DELETE'},
			'update': { method:'PUT' }
		});

	}]);

