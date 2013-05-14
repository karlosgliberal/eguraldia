'use strict';

angular.module('FavoritosAppServices', ['ngResource'])
  .factory('Tiempo', function ($resource) {
    return $resource('http://api.wunderground.com/api/f6e44d8ed487abe6/conditions/q/spain/:ciudad.json', {client:'ig', callback:'JSON_CALLBACK'},
      {
        get: {method:'JSONP', params:{ciudad:'madrid'}, isArray: true}
      }
    );
  });

