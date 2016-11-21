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
    "apiUrl": "http://192.168.0.5:8090/v1",
    "apiToken": "myawesomeapitoken",
    "debug": true,
    "env": "development"
  }

  );
