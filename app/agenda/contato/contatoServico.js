'use strict';

//esta a camada de serviço que faz conexao rest ou seja faz a requisiçao get, post, update, delete, put, option..

var urlBase = 'http://192.168.0.8:8090/v1/';


contatoModulo.factory('getPessoas',function($resource){
	return $resource(urlBase + 'pessoa/por-usuario/:usuarioId', {usuarioId : 'usuarioId'}, {});
});

contatoModulo.factory('getPessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoa/:contatoId', {contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('removePessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoa/deletar?codigoUsuario=:usuarioId&pessoaId=:contatoId', {usuarioId : 'usuarioId', contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('updatePessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoa/alterar?codigoUsuario=:usuarioId&pessoaId=:contatoId', 
		{usuarioId : 'usuarioId', contatoId : 'contatoId'}, {
		 'update': { method:'PUT' }
	});
}]);

contatoModulo.factory('insertPessoa', ['$resource', function($resource){
	return $resource(urlBase+'pessoa/inserir?codigoUsuario=:usuarioId', {usuarioId : 'usuarioId'}, {});
}]);

contatoModulo.factory('inserirTelefone', ['$resource', function($resource){
	return $resource(urlBase+'telefone/inserir?pessoaId=:contatoId', {contatoId : 'contatoId'},{});
}]);

contatoModulo.factory('updateTelefone', ['$resource', function($resource){
	return $resource(urlBase+'telefone/alterar', null, {
		'update': { method:'PUT'}
	});
}]);