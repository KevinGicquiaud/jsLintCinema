// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('cinemapp', ['ionic','ngCordova', 'cinemapp.controllers','cinemapp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    //CINEMAS
    .state('app.cinemas', {
      url: '/cinemas',
      views: {
        'menuContent': {
          templateUrl: 'templates/cinemas.html',
          controller: 'CinemasCtrl'
        }
      }
    })

  .state('app.cinema', {
    url: '/cinemas/:cinemaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/cinema.html',
        controller: 'CinemaCtrl'
      }
    }
  })
  .state('app.cinemaloc', {
    url: '/cinemas/:cinemaId/:lat/:long',
    views: {
      'menuContent': {
        templateUrl: 'templates/cinema_loc.html',
        controller: 'CinemaLocCtrl'
      }
    }
  })
  //FILMS
  .state('app.films', {
    url: '/films',
    views: {
      'menuContent': {
        templateUrl: 'templates/films.html',
        controller: 'FilmsCtrl'
      }
    }
  })

  .state('app.film', {
    url: '/films/:filmId',
    views: {
      'menuContent': {
        templateUrl: 'templates/film_comment.html',
        controller: 'FilmCommentCtrl'
      }
    }
  })

  //  PHOTO+
  .state('app.photo', {
    url: '/photo',
    views: {
      'menuContent': {
        templateUrl: 'templates/photo.html',
        controller: 'PhotoCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cinemas');
});
