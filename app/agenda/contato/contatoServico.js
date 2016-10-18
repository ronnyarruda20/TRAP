'use strict';

//esta a camada de serviço que faz conexao rest ou seja faz a requisiçao get, post, update, delete, put, option..

var urlBase = 'http://192.168.0.10:8090/';


contatoModulo.factory('getPessoas',function($resource){
	return $resource(urlBase+'pessoas', null, {});
});

contatoModulo.factory('getPessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoas/:contatoId', {contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('removePessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoas/deletar/:contatoId', {contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('updatePessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoas/alterar?id=:contatoId', {contatoId : 'contatoId'}, {
		 'update': { method:'PUT' }
	});
}]);

contatoModulo.factory('insertPessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoas/cadastrar', null, {});
}]);

contatoModulo.factory('updateTelefone', ['$resource', function($resource){
	return $resource(urlBase+'telefones/:contatoId/cadastrar', {contatoId : 'contatoId'}, {});
}]);