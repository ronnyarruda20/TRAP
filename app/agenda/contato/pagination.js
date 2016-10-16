 'use strict';

contatoModulo.service('SimplePaginate',
	function(){
	      //variáveis de configuração
        var data = {}; //os dados a paginar
        var current = 0; //página atual
        var perPage = 5; //quantidade de itens por página

        //Seta a configuração da paginação
        var configure = function(config) {
            if (config.perPage !== undefined) {
                perPage = config.perPage;
            }
            if (config.data !== undefined) {
                data = config.data;
            }
        }

        //Informa o total de registros com base em um array
        var itemsTotal = function () {
            return data.length;
        }

        //Calcula o total de páginas da paginação
        var pagesTotal =  function () {
            return Math.ceil(itemsTotal() / perPage);
        }

        //vai para uma página específica
        var goToPage = function (indice) {
            current = indice;

            if (indice > 0) {
                indice = indice*perPage;
            }
            var final = indice+perPage;

            if (final > itemsTotal()) {
                final = itemsTotal();
            }

            return {
                data: data.slice(indice, final),
                from: indice+1,
                to: final
            };
        }

        //avança paginação se possível
        var next = function() {
            if (current+1 == pagesTotal()) {
                return goToPage(current);
            }
            current++;
            return goToPage(current);
        }

        //volta paginação se possível
        var prev = function() {
            if (current == 0) {
                return goToPage(current);
            }
            current--;
            return goToPage(current);
        }

        //passo os métodos para o service
        this.configure = configure;
        this.itemsTotal  = itemsTotal;
        this.pagesTotal = pagesTotal;
        this.goToPage = goToPage;
        this.next = next;
        this.prev = prev;

});