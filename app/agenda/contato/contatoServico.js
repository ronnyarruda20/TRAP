'use strict';

//esta a camada de serviço que faz conexao rest ou seja faz a requisiçao get, post, update, delete, put, option..

var urlPessoa = 'http://192.168.0.10:8090/pessoas/';

contatoModulo.factory('getPessoas',function($resource){
	return $resource(urlPessoa, null, {});
});

contatoModulo.factory('getPessoa', ['$resource', function($resource){
	return $resource(urlPessoa+':contatoId', {contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('removePessoa', ['$resource', function($resource){
	return $resource(urlPessoa+'deletar?id=:contatoId', {contatoId : 'contatoId'}, {});
}]);

contatoModulo.factory('updatePessoa', ['$resource', function($resource){
	return $resource(urlPessoa+'alterar?id=:contatoId', {contatoId : 'contatoId'}, {
		 'update': { method:'PUT' }
	});
}]);

contatoModulo.factory('insertPessoa', ['$resource', function($resource){
	return $resource(urlPessoa+'cadastrar', null, {});
}]);