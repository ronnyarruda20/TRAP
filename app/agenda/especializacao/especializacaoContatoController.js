'use strict';

 especializacaoModulo.controller('especializacaoContatoController', 
 	['$scope', '$routeParams' , 'FlashService', 
  'getTodasPessoas', 'inserirEspecializacao', 
  'listaEspecializacao', 'SimplePaginate',
 	function($scope, $routeParams, FlashService, 
    getTodasPessoas, inserirEspecializacao, 
    listaEspecializacao, SimplePaginate){

    $scope.listaEspecializacao = function(){
      listaEspecializacao.query(function(especializacoes){
             SimplePaginate.configure({
                  data:especializacoes,
                  perPage: 5
                });


         $scope.paginate = {
          result : SimplePaginate.goToPage(0),
          total : SimplePaginate.itemsTotal(),
          next : function() {
            $scope.paginate.result = SimplePaginate.next();
          },
          prev : function() {
            $scope.paginate.result = SimplePaginate.prev();
          }
        };
      },function(){
        FlashService.Error("Erro ao carregar a lista");
      });
 }
 
  $scope.especializacoes = [{}];

$scope.listaContatos = function(){
  getTodasPessoas.get({contatoId : $routeParams.contatoId}, function(response){
      $scope.contato = response;
  },function(){

  });
}

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

  $scope.inserir = function(profissao){


    if(profissao.id != null){

      alterarProfissao.update(JSON.stringify(profissao), function(){
        $scope.listaProfissoes();
        FlashService.Success("Foi alterado com sucesso");
        $scope.profissao = null;
      },function(){
        FlashService.Error("Não foi possivel alterar está profissão");
      })


    }else{

    inserirProfissao.save(profissao, function(){

      $scope.listaProfissoes();
      $scope.profissao.nome = '';

    },function(){
        FlashService.Error("Não foi possivel incluir essa especializacao");
    });
    }

    
  }


  $scope.remover = function(profissaoId){

    removerProfissao.remove({profissaoId : profissaoId}, function(){
      $scope.listaProfissoes();
    },function(){
        FlashService.Error("Não foi possivel remover esta profissão");
    })
  }






}]);