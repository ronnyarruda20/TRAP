'use strict';

 especializacaoModulo.factory('inserirEspecializacao', function($resource, ENV_VARS){
 		return $resource(ENV_VARS.apiUrl + '/especializacao/inserir', null, {});
 });

 especializacaoModulo.factory('adicionarContatoEspecializacao', function($resource, ENV_VARS){
 		return $resource(ENV_VARS.apiUrl , null, {});
 });