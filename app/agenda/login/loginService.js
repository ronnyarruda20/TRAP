'use stric';

loginModulo.factory('loginService',[ '$resource', 'ENV_VARS',  function($resource, ENV_VARS){

        return $resource(ENV_VARS.apiUrl + '/usuario/autenticar?user=:user&pass=:pass' , {user : 'user', pass :'pass' },{});

}]);