'use strict';

 profissaoModulo.controller('profissaoController', 
 	['$scope', 'inserirProfissao', 'listarProfissao', 'removerProfissao',
 	 'FlashService', 'SimplePaginate', 'alterarProfissao',
 	function($scope, inserirProfissao, listarProfissao, removerProfissao, 
 		FlashService, SimplePaginate, alterarProfissao){

 	$scope.profissoes = [];

 	// $scope.profissao = [];
 
 	$scope.listaProfissoes = function(){
 		listarProfissao.query(function(profissoes){
 		       SimplePaginate.configure({
                // data:response.data.data,
                data:profissoes,
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

	$scope.listaProfissoes();

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
 		  	FlashService.Error("Não foi possivel inserir uma profissão");
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

 	$scope.obterEdicao = function(profissao){
 		$scope.profissao = profissao ;
 	}

 }]);