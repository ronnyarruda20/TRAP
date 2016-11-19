'use strict';


loginModulo.controller('loginController',[
	'$scope', '$localStorage', '$location', 'AuthenticationService', 'FlashService', 
	function($scope, $localStorage, $location, AuthenticationService, FlashService){
    $scope.dataLoading = false;
    
    // AuthenticationService.ClearCredentials();
    

    $scope.login = function(acesso){
      $scope.dataLoading = true;
      AuthenticationService.Login(acesso.login, acesso.senha, function (response) {
        if (response.status == 200) {
          AuthenticationService.SetCredentials(response, acesso.senha);
          $location.path('/contato/'+response.id);
        } else {
          if(response.status == 500){
             FlashService.Error("Erro inesperado no servidor : Status " + response.status );
             $scope.dataLoading = false;
             return;
          }
          FlashService.Error("Nome de usuario ou senha esta incorreto" );
          $scope.dataLoading = false;
        }
      });
    };

}]);