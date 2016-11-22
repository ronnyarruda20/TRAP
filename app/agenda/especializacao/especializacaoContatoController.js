'use strict';

 especializacaoModulo.controller('especializacaoContatoController', 
 	['$scope', '$routeParams' , 'FlashService', 
  'getTodasPessoas', 'inserirEspecializacao', 
  'listaEspecializacao', 'SimplePaginate', 'listaPorPessoaEspecializacao',
  'inserirPessoaEspecializacao',
 	function($scope, $routeParams, FlashService, 
    getTodasPessoas, inserirEspecializacao, 
    listaEspecializacao, SimplePaginate, listaPorPessoaEspecializacao,
    inserirPessoaEspecializacao){

    $scope.especializacoesPorPessoas = [];

    $scope.especializacoes = [];

    listaPorPessoaEspecializacao.query({pessoaId : $routeParams.contatoId},function(especializacoesPorPessoas){

            $scope.especializacoesPorPessoas = especializacoesPorPessoas;
      },function(){
        FlashService.Error("Erro ao carregar a lista");
      });
  
      listaEspecializacao.query(function(especializacoes){
          $scope.especializacoes = especializacoes;
          for (var i = 0; i < $scope.especializacoesPorPessoas.length; i++) {
            for (var i = 0; i <  $scope.especializacoes.length; i++) {
               if($scope.especializacoesPorPessoas[i].nome == $scope.especializacoes[i].nome){
                    $scope.especializacoes.splice($scope.especializacoesPorPessoas[i], 1);
               }
            }
          }
             $scope.carregarLista($scope.especializacoes);
        
      },function(){
        FlashService.Error("Erro ao carregar a lista");
      });


  //pegar uma especialização
  $scope.pegarEspecializacao = function(key, especializacao){
    $scope.especializacoes.splice(key, 1);
    $scope.adicionaEspecializacaoPessoa(especializacao);
    $scope.carregarLista($scope.especializacoes);
  }
 
 $scope.adicionaEspecializacaoPessoa = function(especializacao){
    $scope.especializacoesPorPessoas.push(especializacao);
 }
  getTodasPessoas.get({contatoId : $routeParams.contatoId}, function(response){
      $scope.contato = response;
  },function(){

  });

  $scope.carregarLista = function(especializacoe){
      SimplePaginate.configure({
                  data:especializacoe,
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
  }

  $scope.removerPessoaEspecializacao = function(especializacoe){

    var resposta = confirm("Deseja remover esse registro?");

     if(resposta == true){

     }
  }

  $scope.inserirPessoaEspecializacao = function(especializacoesPorPessoas){
    for (var i = 0; i < especializacoesPorPessoas.length; i++) {

      inserirPessoaEspecializacao.save({pessoaId : $routeParams.contatoId , 
            especializacaoId : especializacoesPorPessoas[i].id },function(){

      },
      function(){
            FlashService.Error("Não foi possivel inserir especialização para esta pessoa");
            return;
      });
      
    }
  }

}]);