'use strict';


profissaoModulo.factory('inserirProfissao' ,function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+ '/profissao/inserir', null, {});
});

profissaoModulo.factory('alterarProfissao',function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl + '/profissao/alterar', null,{
		 'update': { method:'PUT' }
	});
});

profissaoModulo.factory('listarProfissao',function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl + '/profissao', null, {});
});

profissaoModulo.factory('removerProfissao',function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl + '/profissao/deletar?id=:profissaoId', {profissaoId : 'profissaoId'}, {});
});

