'use strict';

//esta a camada de serviço que faz conexao rest ou seja faz a requisiçao get, post, update, delete, put, option..

var url = 'http://localhost:8000/agenda/contato';

contatoModulo.factory('pessoaServico', ['$resource', function($resource){
	return $resource(url+'/:contatoId.json', {}, {
		listaContatos: {method:'GET',  params:{contatoId:'pessoas'}, isArray:true},
		contatoSelecionado:{method:'GET', params:{contatoId:'pessoas'}}
	});
}]);

contatoModulo.factory('pessoaServico2', ['$http', function($http){
	return {
		listaPessoas: function(dados){
			$http.get(url+'/pessoas.json').success(dados);
		}
	}
}]);