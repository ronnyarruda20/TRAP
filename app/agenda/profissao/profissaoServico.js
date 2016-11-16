'use strict';

var urlProfissao = 'http://192.168.0.8:8090/v1/profissao'

// http://192.168.0.8:8090/v1/profissao

profissaoModulo.factory('inserirProfissao',function($resource){
	return $resource(urlProfissao+ '/inserir', null, {});
});

profissaoModulo.factory('alterarProfissao',function($resource){
	return $resource(urlProfissao + '/alterar', null,{
		 'update': { method:'PUT' }
	});
});

profissaoModulo.factory('listarProfissao',function($resource){
	return $resource(urlProfissao, null, {});
});

profissaoModulo.factory('removerProfissao',function($resource){
	return $resource(urlProfissao + '/deletar?id=:profissaoId', {profissaoId : 'profissaoId'}, {});
});

