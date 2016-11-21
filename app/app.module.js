'use strict';

// Define the `trapApp` module
angular.module('trapApp', [
  'ngRoute',
  'contatoModulo',
  'usuarioModulo',
  'loginModulo',
  'profissaoModulo',
  'navbarModulo',
  'especializacaoModulo'
]).

constant("ENV_VARS", {
    "apiUrl": "http://icectrappwebapi.azurewebsites.net/v1",
    "apiToken": "myawesomeapitoken",
    "debug": true,
    "env": "development"
  }

  );
