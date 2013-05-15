'use strict';

angular.module('favoritosApp')
  .controller('MainCtrl', function ($scope, Tiempo) {
    var icons = new Skycons({color: 'white'});
    icons.add('fog', Skycons.FOG);
    icons.play();
    $scope.init = 'Minimal app del tiempo';

    $scope.update = function (ciudad) {
	    $scope.tiempo = Tiempo.get({ciudad: ciudad}, function (datos) {
	    	if(typeof(datos[0].error) != "undefined"){
		   		$scope.ciudad = "Busca otra ciudad u otro nombre";
		   		$scope.init = "Busca otra ciudad u otro nombre"
		   	}else{
		    	var iconoFin = _comparaIconos(datos[1].icon);
		   		$scope.init = datos[1].temp_c+'º '+ciudad;
		   		$scope.ciudad = "";
	    	}
	    });
    }

    $scope.keypressCallback = function($event) {
	    $scope.tiempo = Tiempo.get({ciudad: ciudad.value},function(datos){
	    	if(typeof(datos[0].error) != "undefined"){
		   		$scope.ciudad = "";
		   		$scope.init = "Error:¿Existe esa ciudad? "
	    	}else{
		   		var iconoFin =_comparaIconos(datos[1]['icon']);
		   		$scope.init = datos[1]['temp_c']+'º '+ciudad.value;
		   		$scope.ciudad = "";
	    	}
	    });
		$event.preventDefault();
	};

  	var _comparaIconos =function(icon){
  		if(icon ==='clear'){
  			icons.remove("fog");
		  	icons.set("fog", Skycons.CLEAR_DAY);
		  	icons.play();
  		}else if(icon ==='mostlycloudy'){
  			icons.remove("fog");
		  	icons.set("fog", Skycons.PARTLY_CLOUDY_NIGHT);
		  	icons.play();
  		}else if(icon ==='partlycloudy'){
  			icons.remove("fog");
		  	icons.set("fog", Skycons.CLOUDY);
		  	icons.play();
  		}else if(icon ==='fog'){
  			icons.remove("fog");
		  	icons.set("fog", Skycons.FOG);
		  	icons.play();
  		}else if(icon ==='rain'){
  			icons.remove("fog");
		  	icons.set("fog", Skycons.RAIN);
		  	icons.play();
  		}else if(icon ==='snow'){
  			icons.remove("fog");
		  	icons.set("fog", Skycons.SNOW);
		  	icons.play();
  		}else if(icon ==='sunny'){
  			icons.remove("fog");
		  	icons.set("fog", Skycons.CLEAR_DAY);
		  	icons.play();
  		}
  	}
  });
