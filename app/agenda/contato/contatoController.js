'use strict';

contatoModulo.controller('contatoController', ['$scope', '$routeParams' ,'pessoaServico', 'pessoaServico2',
	function($scope, $routeParams, pessoaServico , pessoaServico2){

    $scope.contatos = [];


      // $routeParams.contatoId;

      pessoaServico.listaContatos(function(contatos){

        $scope.contatos  = contatos;

      });


      pessoaServico.contatoSelecionado({contatoId : $routeParams.contatoId}, function(contatoSel){
        // debugger;
        $scope.contatoSel  = contatoSel;

      });

    }]);

