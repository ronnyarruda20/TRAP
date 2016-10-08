'use strict';

contatoModulo.controller('contatoController', ['$scope', '$routeParams' ,'contatoServico', 
	function($scope, $routeParams, contatoServico ){

    $scope.contatos = [];

    $scope.contato = [];

    $scope.contato.telefone = [{'id':1}];

    //recebe lista de contatos
    var contatos =  contatoServico.query(function(){

      $scope.contatos  = contatos;

    });

    //pega um cantanto selecionado
    var contato =  contatoServico.get({contatoId : $routeParams.contatoId}, function(){

      $scope.contato  = contato;

    });

    //remove um contato 
    $scope.removeContato = function(id){

      contatoServico.delete({contatoId : id}, function(){

        console.log("Removido com sucesso" + erro);

      },function(erro){
        console.log("Erro ao remover contato " + erro);
      });

    }

    $scope.criaNovoContato = function(contato){

     
      if(contato.id == null){
        contatoServico.save(contato);
      }else{
         contatoServico.update({contatoId : contato.id}, contato);
      } 

    }

    //adiciona campo para digitar o telefone
    $scope.adicionaTelefone = function() {
      var id = $scope.contato.telefone.length+1;
      $scope.contato.telefone.push({'id':id});
    };

    //remove campo do telefone
    $scope.removeTelefone = function() {
     var ultimoValor = $scope.contato.telefone.length-1;
     if(ultimoValor < 1){
      return false;
    }

    $scope.contato.telefone.splice(ultimoValor);
  };

}]);

