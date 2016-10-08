'use strict';

//esta a camada de serviço que faz conexao rest ou seja faz a requisiçao get, post, update, delete, put, option..

var url = 'http://localhost:8000/agenda/contato/json';

contatoModulo.factory('contatoServico', ['$resource', function($resource){
	var resource =  $resource(url+'/:contatoId.json', {contatoId:'contatos'}, {
		'get':    {method:'GET'},
		'save':   {method:'POST'},
		'query':  {method:'GET', isArray:true},
		'remove': {method:'DELETE'},
		'delete': {method:'DELETE'},
		'update': { method:'PUT' }
	});

	console.log(resource);
	return resource;
}]);

