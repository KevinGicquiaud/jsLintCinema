angular.module('cinemapp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// CINEMAS LIST

.controller('CinemasCtrl', function($scope, cinemasService) {
  cinemasService.getCinemasList().then(function(response){
    $scope.cinemas = response.data.slice(0,2);
  });
  $scope.doRefresh = function() {
    cinemasService.getCinemasList().then(function(response){
      $scope.cinemas = response.data;
    })
      .finally(function() {
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
  };

})
// CINEMA DETAIL
.controller('CinemaCtrl', function($scope, $stateParams, cinemasService) {
  cinemasService.getCinemasList().then(function(response){
    var pos = $stateParams.cinemaId - 1;
    $scope.cinema = response.data[pos];
  });
})

//LOCALISATION
.controller('CinemaLocCtrl', function($scope, $stateParams,$cordovaGeolocation) {
  //Draw Map
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var user_latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var cinema_latLng = new google.maps.LatLng($stateParams.lat,$stateParams.long)
    //map Options
    var mapOptions = {
      center: user_latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Wait map loading
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
      //User marker
      var user_marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: user_latLng
      });
  //    Info pop-up
      var infoWindow = new google.maps.InfoWindow({
        content: "Vous êtes ici !"
      });
      google.maps.event.addListener(user_marker, 'click', function () {
        infoWindow.open($scope.map, user_marker);
      });
  //  Cinema marker
      var cinema_marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: cinema_latLng
      });

    },function(error){
      console.log("Could not get location");
    });
  });
  //Add Cinema point marker
  // $scope.lat = $stateParams.lat;
  // $scope.long = $stateParams.long;
})

// FILMS
.controller('FilmsCtrl', function($scope,filmsService) {
  filmsService.getFilmsList().then(function(response){
    $scope.films = response.data;
  });
})

// FILM DETAILS
.controller('FilmCommentCtrl', function($scope, $ionicPopup, $stateParams,filmsService) {
  $scope.comments = [];
  filmsService.getFilmsList().then(function(response){
    var pos = $stateParams.filmId -1;
    $scope.film = response.data[pos];
  });

  $scope.create = function() {
    $ionicPopup.prompt({
      title: 'Nouveau commentaire',
      inputType: 'text'
    }).then(function(result) {
      if(result != undefined) {
        if(result !== "") {
          // Little security that rocks, if comments var not declared in scope for whatever reason...
          if($scope.hasOwnProperty("comments") !== true) {
            $scope.comments = [];
          }
          //HERE POST
          $scope.comments.push({content:result});
        } else {
          console.log("Hmm, bad ! ");
        }
      }
    });
  };
})


// DETAILS - Problematic in Android N ...
.controller('PhotoCtrl', function($scope, $stateParams,$cordovaCamera) {

  $scope.getPhoto = function () {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('Image');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
      console.log(err);
    });
  }
});

