# Minimal egurladi app

Esta aplicación es una prueba de concepto con angularjs. Queria hacer algo simple y abarcable, para ir introducciendome en Angularjs. 

La idea se me ocurrio al ver estos [iconos en canvas](https://github.com/darkskyapp/skycons) y este [kit](https://github.com/designmodo/Flat-UI/) para hacer interfaces de usuarios.


## Angularjs y services

Al ser una pruba de concepto el proyecto no tienen nada un formulario que al enviarlo (o darle a enter ) hace una petición a un servicio web que retorna los datos del tiempo por ciudades. Con esos datos comparamos los iconos (lluvia, nieve, sol, etc) con el set de iconos de Troy y los mostamos, todo simple y minimal

## Código del servico
 
```js
'use strict';

angular.module('FavoritosAppServices', ['ngResource'])
  .factory('Tiempo', function ($resource) {
    return $resource('http://api.wunderground.com/api/key/conditions/q/spain/:ciudad.json', {client:'ig', callback:'JSON_CALLBACK'},
      {
        get: {method:'JSONP', params:{ciudad:'madrid'}, isArray: true}
      }
    );
  });
```

## TODO
* Mirarme el sistema de test con karma
* Control del la api para ver cuantas peticiones quedan
* Bugs

##
Aviso, el servicio web es muy limitado, si no rula puede que sea por que ya se ha llegado a la cuota impusta.

