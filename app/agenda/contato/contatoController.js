'use strict';

contatoModulo.controller('contatoController', [
  '$scope', '$routeParams' , '$location', 
  'FlashService', 'getPessoas', 'getPessoa', 'updatePessoa', 
  'insertPessoa', 'removePessoa', 'SimplePaginate', 'updateTelefone',
  function($scope, $routeParams, $location ,
    FlashService, getPessoas, getPessoa ,
    updatePessoa, insertPessoa, removePessoa, SimplePaginate, updateTelefone){

    $scope.contatos = [];

    $scope.contato = [];

    $scope.contato.telefones = [{'id':1}];


    $scope.reloadPage = function(){
     getPessoas.query(function(response){
       SimplePaginate.configure({
                // data:response.data.data,
                data:response,
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
    });
   }

   $scope.reloadPage();

    //pega um contanto selecionado
    if($routeParams.contatoId != null ){

      getPessoa.get({contatoId : $routeParams.contatoId}, function(contato){

        $scope.contato  = contato;

      },function(error){
    
        FlashService.Error("Contato selecionado não foi encontrado");

      });
    }

    //remove um contato 
    $scope.removeContato = function(id){

     var resposta = confirm("Deseja remover esse registro?");

     if(resposta == true){

      removePessoa.remove({contatoId : id}, function(){
        $scope.reloadPage()

      },function(erro){
        FlashService.Error("Não foi possivel excluir contato");
      });

    }
  }

    //cria um novo contato 
    $scope.criaNovoContato = function(contato){


     var listaTelefone = contato.telefones;

     if(contato.id == null ){

      var contatoEntrada =  JSON.stringify({
        nome: contato.nome,
        telefones: listaTelefone});

      insertPessoa.save(contatoEntrada, function(){
        $location.path('/contato');
      },function(error){
        FlashService.Error('Erro ao criar contato (Status :' + error.status+')');
      });
      
    }else{

    updateTelefone.save({contatoId :  contato.id}, contato.telefones, function(){},function(erro){
      console.log(erro.data.message);
      FlashService.Error("Não foi possivel editar o  telefone ");
      return false;
    })

     updatePessoa.update({contatoId :  contato.id}, contato, function(){
      $location.path('/contato');

    },function(erro){

      FlashService.Error("Não foi possivel editar o  contato ");

    });

   } 
 };


    //adiciona campo para digitar o telefone
    $scope.adicionaTelefone = function() {
      var id = $scope.contato.telefones.length+1;
      $scope.contato.telefones.push({'id':id});
    };

    //remove campo do telefone
    $scope.removeTelefone = function() {
     var ultimoValor = $scope.contato.telefones.length-1;
     if(ultimoValor < 1){
      return false;
    }

    $scope.contato.telefones.splice(ultimoValor);
  };


  var dummyContent = $('.dummy-content').children(),
      i;


    $('#add-content').click(function(e){
      e.preventDefault();

      if($(dummyContent[0]).is(":visible")){
        for(i=0;i<dummyContent.length;i++){
          $(dummyContent[i]).fadeOut(600);
        }
      }
      else{
        for(i=0;i<dummyContent.length;i++){
          $(dummyContent[i]).delay(600*i).fadeIn(600);
        }
      }

    });
  

}]);

