'use strict';

contatoModulo.controller('contatoController', [
  '$scope', '$routeParams','$location', 
  'FlashService','getPessoas', 'getPessoa', 
  'updatePessoa', 'insertPessoa', 'removePessoa', 
  'SimplePaginate', 'updateTelefone',
  '$rootScope','listarProfissao','inserirTelefone',
  function($scope,$routeParams, $location ,
    FlashService,getPessoas, getPessoa ,
    updatePessoa, insertPessoa, removePessoa, 
    SimplePaginate, updateTelefone,$rootScope,  
    listarProfissao, inserirTelefone){

    $scope.contatos = [];

    $scope.contato = {};

    $scope.contato.telefones = [{'idTelefone':1}];

    $rootScope.usuarioId = $routeParams.usuarioId;

    $scope.reloadPage = function(){
     getPessoas.query({usuarioId : $scope.usuarioId},function(response){
       SimplePaginate.configure({
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
    },function(){
      FlashService.Error("Erro ao carregar a lista");
    });
   }

   // $scope.reloadPage();

    //pega um contanto selecionado
    if( $routeParams.contatoId != null){

        getPessoa.get({contatoId : $routeParams.contatoId},function(resposta){

              resposta.profissao = {id : resposta.profissaoId , nome : resposta.profissaoDescricao};  
              $scope.contato = resposta;
              
        },function(){
          FlashService.Error("Usuario informado não foi encontrado");
        });

       
    }

    //remove um contato 
    $scope.removeContato = function(id){

     var resposta = confirm("Deseja remover esse registro?");

     if(resposta == true){
      removePessoa.remove({usuarioId :  $scope.usuarioId, contatoId :  id}, function(){
        $scope.reloadPage()
      },function(erro){
        FlashService.Error("Não foi possivel excluir contato");
      });

    }
  }

    //cria um novo contato 
    $scope.criaNovoContato = function(contato){

   contato.profissaoId = contato.profissao.id;

  if(contato.id == null ){

        insertPessoa.save({usuarioId :  $scope.usuarioId}, contato, function(){
        $location.path('/contato/'+ $scope.usuarioId);

      },function(error){
        FlashService.Error('Erro ao criar contato (Status :' + error.status+')');
      });
      
     }else{

     for (i = 0; i < contato.telefones.length; i++) {
          if(contato.telefones[i].id == null){
            $scope.inserirTelefone(contato.telefones[i]);
          }else{
            $scope.updateTelefone(contato.telefones[i]);
          }
      }

    updatePessoa.update({usuarioId :  $scope.usuarioId, contatoId :  $routeParams.contatoId}, contato, function(){
        $location.path('/contato/'+ $scope.usuarioId);

      },function(erro){
         FlashService.Error("Não foi possivel editar o  contato ");
      });

   } 
 };

  $scope.inserirTelefone = function(telefone){
      inserirTelefone.save({contatoId :  $routeParams.contatoId}, telefone, function(){

      },function(){
           FlashService.Error("Não foi possivel inserir telefone " + telefone );
           return;
      });
 }

 $scope.updateTelefone = function(telefone){
   updateTelefone.update( telefone , function(){},
      function(){
           FlashService.Error("Não foi possivel atualizar telefone " + telefone );
           return;
      });
}

    //adiciona campo para digitar o telefone
    $scope.adicionaTelefone = function() {
      var id = $scope.contato.telefones.length+1;
      $scope.contato.telefones.push({'idTelefone':id});
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
  
  $scope.listarProfissoes = function(){

      listarProfissao.query(function(profissoes){
        $scope.profissoes = profissoes;

      },function(){
        FlashService.Error("Não foi possivel carregar a lista de Profissoes")
      })
  }

  $scope.carregaProfissao = function(profissao){
      $scope.contato.profissao = profissao;
  }

}]);

