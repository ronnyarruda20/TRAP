'use strict';

contatoModulo.controller('contatoController', [
  '$scope', '$routeParams' ,'contatoServico', '$location', 'FlashService',
  function($scope, $routeParams, contatoServico, $location , FlashService){

    $scope.contatos = [];

    $scope.contato = [];

    $scope.contato.telefone = [{'id':1}];

    $scope.tamanhoDaLista = 0;



    // recebe lista de contatos
    contatoServico.query(function(contatos){
      $scope.contatos = contatos;
      $scope.tamanhoDaLista = contatos.length;
    });

     // $scope.tamanhoDaLista =  $scope.contatos.data.length;

     // console.log($scope.contatos.data.length)

    //pega um contanto selecionado
    if($routeParams.contatoId !== null){


      var contacts =   contatoServico.query(function(){

        $scope.contato  = contacts[$routeParams.contatoId];

      }, function(error) {

        FlashService.Error("Contato selecionado não foi encontrado");
      });

   // for (var i = 0; i < contatosArray.length; i++) {
   //    console.log( $scope.contatos[i]);
   // }
     //  var contato =  contatoServico.get({contatoId : $routeParams.contatoId}, function(){

     //    $scope.contato  = contato;

     //  },function(error){
     //    FlashService.Error("Contato selecionado não foi encontrado");
     // });

   }

    //remove um contato 
    $scope.removeContato = function(id){

      contatoServico.delete({contatoId : id}, function(){


      },function(erro){
        FlashService.Error("Não foi possivel excluir contato");
      });

    };

    //cria um novo contato 
    $scope.criaNovoContato = function(contato){

     if(contato.id === null){
      contatoServico.save(contato, function(){
        FlashService.Success('Contato criado com sucesso', true);
        $location.path('/contato');
      },function(){
        FlashService.Error('Erro ao criar contato');
      });
      
    }else{

     contatoServico.update({contatoId : contato.id}, contato, function(){

      console.log("editado com sucesso");
      $location.path('/contato');

    },function(erro){
      FlashService("Não foir possivel editar o  contato " + erro.value);
    });
     
   } 
 };


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

 //  var c = [];
 //  $scope.totalPorPagina = 10;
 //  $scope.totalRegistro = c.length;
 //  $scope.pagina = [];
 //  var p = $scope.totalRegistro > $scope.totalPorPagina ? Math.ceil($scope.totalRegistro / $scope.totalPorPagina) : 1;
 //  for (var i = 0; i < p; i++) {
 //   $scope.pagina.push(c.splice(0, $scope.totalPorPagina));
 // }
 // $scope.lista = $scope.pagina[0];
 // //insira o código aqui
 //  //função chamada no ngClick;
 //  $scope.loadListPagination = function (i) {
 //    $scope.lista = $scope.pagina[i];
 //  };

}]);

