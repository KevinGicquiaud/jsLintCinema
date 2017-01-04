Partie&nbsp;2&nbsp;&mdash; Premier test
=======================================

Dans cette partie, nous allons réaliser un premier test unitaire sur
votre application qui consistera à valider l'ajout d'un commentaire.

Pour cela, nous allons procéder à l'écriture d'un fichier *boilerplate*
qui pourra vous servir pour d'autres projets du même type.

## Installation de `angular-mocks`

Vous aurez besoin d'utiliser `angular-mocks`. Il faut l'installer avec
bower.

```
bower install --save-dev angular-mocks
```

## Configuration de Karma

Plaçons nos tests dans `tests/comments.js`.

Il vous fait éditer `karma.conf.js` pour charger la liste `files` afin
qu'elle contienne&nbsp;:

- L'ensemble des fichiers chargés par `index.html`
- `angular-mocks.js`
- Les fichiers de test, soit `tests/comments.js`

## Éléments spécifiques à Angular

Dans votre fichier de test, vous aurez besoin des blocs suivants à
l'intérieur de chaque `describe()`.

Le chargement du module que vous souhaitez tester

```javascript
beforeEach(module('cinemapp.services'));
```

La mise à disposition du HTTP Backend

```javascript
var $httpBackend;

beforeEach(inject(function ($injector) {
  $httpBackend = $injector.get('$httpBackend');
}));
```

Et le nettoyage des requêtes HTTP en attente

```javascript
afterEach(function () {
  $httpBackend.verifyNoOutstandingExpectation();
  $httpBackend.verifyNoOutstandingRequest();
});
```

Vous pouvez ensuite écrire vos tests de la manière suivante

```javascript
it('returns a list of theaters', inject(function (cinemasService) {
  var out = undefined,
    cinemas;

  cinemas = [
    {
      "id": 1,
      "name": "CGR Dragon",
      "adress": "8, Cours des Dames",
      "cp": "17000",
      "ville": "La Rochelle",
      "latitude": "46.1577",
      "longitude": "-1.15359"
    }
  ];

  $httpBackend.expectGET('data/cinemas.json').respond(200, cinemas);

  cinemasService.getCinemasList().then(function (res) {
    out = res.data;
  });

  $httpBackend.flush();
  expect(out).toEqual(cinemas);
}));
```

## Test de l'ajout de commentaire

Sur la base de votre projet, réalisez un test unitaire qui valide le
contrôleur en charge de l'ajout de commentaire.

Instancier un contrôleur dans les tests unitaires, vous pouvez vous
en référer à cet exemple tiré de la documentation d'Angular:

```javascript
describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
});
```
