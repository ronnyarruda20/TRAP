'use strict';

 especializacaoModulo.controller('especializacaoController', 
 	['$scope', '$routeParams' , 'FlashService', 'getTodasPessoas', 'inserirEspecializacao',
 	function($scope, $routeParams, FlashService, getTodasPessoas, inserirEspecializacao){
 
  $scope.especializacoes = [{}];

  getTodasPessoas.get({contatoId : $routeParams.contatoId}, function(response){
      $scope.contato = response;
  },function(){

  });

 	// $scope.especializacoes = [{'idTelefone':1}];

 	// $scope.inserirEspecializacao = function(especializacao){
 	// 	inserirEspecializacao.save({contatoId : $routeParams.contatoId}, especializacao,function(){},
 	// 		function(){
 	// 			FlashService.Error("Não foi possivel salvar")
 	// 		});
 	// }

 	$scope.adicionaEsp = function() {
      $scope.especializacoes.length+1;
      if( $scope.especializacoes.length > 4){
        return;
      }
      verificaEspecializacao();
      $scope.especializacoes.push({});
      console.log($scope.especializacoes);
    };

  $scope.removeEsp = function() {
     var ultimoValor = $scope.especializacoes.length-1;
       if(ultimoValor < 1){
      	return false;
    	}
    		$scope.especializacoes.splice(ultimoValor);
 		};

 }]);

  var verificaEspecializacao = function() {
      for (var i = $scope.especializacoes.length; i >= 0; i++) {
            if($scope.especializacoes[i].id =! null && $scope.especializacoes[i].id == ''){
                $scope.inserirEspecializacao($scope.especializacoes[i])
            }
      }
  } 


 var inserirEspecializacao = function(especializacoo){
      inserirEspecializacao.save( especializacoo , function(response){
              
      },function(){
          FlashService.Error("Não foi possivel incluir essa especializacao");
      });
  }