angular.module('cinemapp.services', [])

  .factory('cinemasService', ['$http', function($http) {

    var service={};

    // Return list of cinema
    service.getCinemasList = function (){
      return $http.get('data/cinemas.json');
    };

    // service.getCinema = function(id){
    //   var cinemas = $http.get('data/cinemas.json');
    //   var pos = id - 1;
    //   return cinemas[pos]
    // };

    // // Return cinema by Id
    // service.getParcoursById = function (id){
    //   return $http.get('data/parcours'+id+'.json');
    // };

    return service;

  }]).factory('filmsService', ['$http', function($http) {

  var service={};

  // Return list of cinema
  service.getFilmsList = function (){
    return $http.get('data/films.json');
  };

  // service.getCinema = function(id){
  //   var cinemas = $http.get('data/cinemas.json');
  //   var pos = id - 1;
  //   return cinemas[pos]
  // };

  // // Return cinema by Id
  // service.getParcoursById = function (id){
  //   return $http.get('data/parcours'+id+'.json');
  // };

  return service;

}]);



