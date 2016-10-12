'use strict';


loginModulo.controller('loginController',[
	'$scope', '$localStorage', '$location', 'AuthenticationService', 'FlashService',
	function($scope, $localStorage, $location, AuthenticationService, FlashService){
    $scope.dataLoading = false;


    AuthenticationService.ClearCredentials();
    

    $scope.login = function(acesso){
      $scope.dataLoading = true;
      AuthenticationService.Login(acesso.login, acesso.senha, function (response) {
        if (response.success) {
          AuthenticationService.SetCredentials(acesso.login, acesso.senha);
          $location.path('/');
        } else {
          FlashService.Error(response.message);
          $scope.dataLoading = false;
        }
      });
    };

		// function initController() {
  //           // reset login status
  //           AuthenticationService.ClearCredentials();
  //       }

  //       function login2() {
  //       	vm.dataLoading = true;
  //       	AuthenticationService.Login(vm.username, vm.password, function (response) {
  //       		if (response.success) {
  //       			AuthenticationService.SetCredentials(vm.username, vm.password);
  //       			$location.path('/');
  //       		} else {
  //       			FlashService.Error(response.message);
  //       			vm.dataLoading = false;
  //       		}
  //       	});
  //       }


}]);