'use strict';


profissaoModulo.factory('inserirEspecializacao' ,function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+ '/especializacao/inserir', null, {});
});

profissaoModulo.factory('alterarEspecializacao',function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl + '/especializacao/alterar', null,{
		 'update': { method:'PUT' }
	});
});

 especializacaoModulo.factory('listaEspecializacao', function($resource, ENV_VARS){
 		return $resource(ENV_VARS.apiUrl + '/especializacao/:especializacaoId' , {}, {
 			'get' : { params : {especializacaoId : ':especializacaoId'}}
 		});
 });

profissaoModulo.factory('deletarEspecializacao' ,function($resource, ENV_VARS){
	return $resource(ENV_VARS.apiUrl+ '/especializacao/deletar?id=:especializacaoId', {especializacaoId : ':especializacaoId'}, {});
});
