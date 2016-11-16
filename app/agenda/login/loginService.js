'use stric';

var urlLogin = 'http://192.168.0.8:8090/v1/usuario/';

loginModulo.factory('loginService',[ '$resource', function($resource){

        return $resource(urlLogin + 'autenticar?user=:user&pass=:pass' , {user : 'user', pass :'pass' },{});

}]);