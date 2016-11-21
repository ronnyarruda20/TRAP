  'use strict';

  contatoModulo.controller('contatoListaController', [
      '$scope', '$routeParams' , '$location', 
      'FlashService', 'getPessoas', 'SimplePaginate', '$http',
      function($scope, $routeParams, $location ,
        FlashService, getPessoas , SimplePaginate, $http){

        getPessoas.query(function(response){
           SimplePaginate.configure({
                // data:response.data.data,
                data:response,
                perPage: 5
            });


           $scope.paginate = {
            result : SimplePaginate.goToPage(0),
            total : SimplePaginate.itemsTotal(),
            totalPaginas : SimplePaginate.pagesTotal(),
            next : function() {
                $scope.paginate.result = SimplePaginate.next();
            },
            prev : function() {
                $scope.paginate.result = SimplePaginate.prev();
            }
        };
    });
        
 // var success = function(response) {
 //            SimplePaginate.configure({
 //                data:response.data.data,
 //                perPage: 10
 //            });

 //            $scope.paginate = {
 //                result : SimplePaginate.goToPage(0),
 //                total : SimplePaginate.itemsTotal(),
 //                next : function() {
 //                    $scope.paginate.result = SimplePaginate.next();
 //                },
 //                prev : function() {
 //                    $scope.paginate.result = SimplePaginate.prev();
 //                }
 //            };
 //        }

 //        $http.get('resource/data.json').then(success);

}]);
