'use strict';

 especializacaoModulo.controller('especializacaoController', 
 	['$scope', '$routeParams' , 'FlashService', 
    'SimplePaginate',  'listaEspecializacao', 
    'inserirEspecializacao', 'alterarEspecializacao','deletarEspecializacao',
 	function($scope, $routeParams, FlashService, 
     SimplePaginate, listaEspecializacao, 
     inserirEspecializacao, alterarEspecializacao , deletarEspecializacao){

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

$scope.especializacao = {};


$scope.inserirEspecializacao = function(especializacoo){

      if(especializacoo.id != null){
          alterarEspecializacao.update(especializacoo , function(){
            $scope.listaEspecializacao();
            FlashService.Success("Alterado com sucesso");
          },
            function(){
               FlashService.Error("Não foi possivel incluir essa especializacao");
            });
        }else{
          inserirEspecializacao.save( especializacoo , function(response){
             $scope.listaEspecializacao();
          },
          function(){
              FlashService.Error("Não foi possivel incluir essa especializacao");
          })
         
        }
  }
    

  $scope.remover = function(especializacao){
    deletarEspecializacao.remove({especializacaoId : especializacao.id}, function(){
      $scope.listaEspecializacao();
    },function(){
        FlashService.Error("Não foi possivel remover esta especialização");
    })
  }

  $scope.obterEdicao = function(especializacao){
    $scope.especializacao = especializacao;
  }


}]);