'use strict';

//esta a camada de serviço que faz conexao rest ou seja faz a requisiçao get, post, update, delete, put, option..

contatoModulo.factory('getPessoas',function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl + '/pessoa/por-usuario/:usuarioId', {usuarioId : 'usuarioId'}, {});
});

contatoModulo.factory('getPessoa', ['$resource', 'ENV_VARS', function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+'/pessoa/:contatoId', {contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('removePessoa', ['$resource', 'ENV_VARS', function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+'/pessoa/deletar?codigoUsuario=:usuarioId&pessoaId=:contatoId', {usuarioId : 'usuarioId', contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('updatePessoa', ['$resource','ENV_VARS', function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+'/pessoa/alterar?codigoUsuario=:usuarioId&pessoaId=:contatoId', 
		{usuarioId : 'usuarioId', contatoId : 'contatoId'}, {
		 'update': { method:'PUT' }
	});
}]);

contatoModulo.factory('insertPessoa', ['$resource', 'ENV_VARS', function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+'/pessoa/inserir?codigoUsuario=:usuarioId', {usuarioId : 'usuarioId'}, {});
}]);

contatoModulo.factory('inserirTelefone', ['$resource', 'ENV_VARS', function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+'/telefone/inserir?pessoaId=:contatoId', {contatoId : 'contatoId'},{});
}]);

contatoModulo.factory('updateTelefone', ['$resource', 'ENV_VARS', function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+'/telefone/alterar', null, {
		'update': { method:'PUT'}
	});
}]);

contatoModulo.factory('getTodasPessoas',function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl + '/pessoa/:contatoId', {}, {
		'get' : {params: {contatoId : ":contatoId"}}
	});
});