'use strict';

//esta a camada de serviço que faz conexao rest ou seja faz a requisiçao get, post, update, delete, put, option..

var url = 'http://192.168.0.4:8000/agenda/contato/json';

contatoModulo.factory('contatoServico', ['$resource', function($resource){
	return $resource(url+'/:contatoId.json', {contatoId:'contatos'}, {});
}]);

