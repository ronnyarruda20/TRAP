'use strict';

contatoModulo.controller('contatoListaTodosController', [
  '$scope', '$location', 'FlashService', 
  'SimplePaginate', 'updateTelefone',  'getTodasPessoas',  
  function($scope, $location, FlashService, 
  SimplePaginate, updateTelefone, getTodasPessoas){


  $scope.reloadPage = function(){
       getTodasPessoas.query(function(response){
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


  }]);
