'use strict';

contatoModulo.controller('contatoController', ['$scope', '$routeParams' ,'contatoServico', '$location',
	function($scope, $routeParams, contatoServico, $location ){

    $scope.contatos = [];

    $scope.contato = [];

    $scope.contato.telefone = [{'id':1}];

    //variavel para tratamento de erro no tela.
    $scope.messengerErro;

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

    //cria um novo contato 
    $scope.criaNovoContato = function(contato){

     if(contato.id == null){
      contatoServico.save(contato, function(){
        console.log("criado com sucesso" + erro);
        $location.path('/contato');
      });
      
    }else{

     contatoServico.update({contatoId : contato.id}, contato, function(){

      console.log("editado com sucesso" + erro);
      $location.path('/contato');

    },function(erro){
        $scope.messengerErro = "Não foir possivel editar o  contato " + erro.value;
    });
     
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

