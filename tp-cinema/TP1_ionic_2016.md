TP1 - Ionic "Cinemapp"
==============

## Ionic && Angular v1

### Création du projet

Nous allons créer un nouveau projet afin de mettre en place avec Ionic l'application
"Cinemapp". Dans un premier temps, nous allons utiliser un "sidemenu" qui affichera les champs "Cinémas" et "Films". A la suite de la sélection d'un lien
nous afficherons la page correspondante (Cinémas et films). Enfin, nous afficherons
le détail de l'item sélectionné ainsi que sa géolocalisation (dans le cas des cinémas).

- Créer un nouveau projet Ionic avec le template sidemenu et avec SASS
```bash
# Créer un projet
ionic start --sass cinemapp sidemenu
cd cinemapp
```

- Ajouter la platforme Android
- Tester son déploiement sur le périphérique et dans votre navigateur


### Refactoring du template de base

- Pour des raisons de clarté, renommer les modules dans ``app.js`` et ``controllers.js`` en utilisant le nom "cinemapp"
- Effectuer tous les changements nécessaires dans le reste de l'application

- Dans le router de l'application : supprimer les routes search et browse ainsi que les
templates correspondants
- Modifier le menu en conséquence (remarquez ici la structure du menu et des listes Ionic utilisant une directive)

### Vue Films

- Concevoir le code (router/controller/view) qui permettra d'afficher la liste des films (titre + description). Vous récupérez les données depuis le fichier json ``data/films.json``

#### Récupérer les données JSON

- Créer un service ``filmsService`` dans le fichier services/services.js  (créer le dossier, le fichier et le module cinemapp.service)
- Créer la fonction qui récupère la liste des films.

```javascript
angular.module('cinemapp.services', [])
  // factory ... filmsService
  // factory ... cinemasService
]);
```

### vues "Cinéma"

Nous souhaitons obtenir une première vue qui liste les cinémas, puis une seconde qui affiche les détails de chaque cinéma. Enfin une dernière page affichera une carte qui géolocalisera l'utilisateur et le cinéma considéré (voir images exemples sur Moodle)
- Réfléchissez aux controlleurs et aux routes qui vous sont nécessaires. N'oubliez pas de prévoir comment seront gérés les échanges d'informations (paramètres).
- Modifier view/controllers/router pour transformer le template en "cinemasList". Nous utiliserons "cinema" pour la vue affichant les détails de chaque cinema.
- Copier le fichier ``cinema.json`` dans data

- Créer les fonctions qui retournent la liste des cinémas (getCinemasList) et les détails des cinémas.
- Ajouter le service à l'application
- Depuis votre controlleur "CinemasListCtrl", utiliser le service et afficher la liste des cinémas dans la vue correspondante.


### Vue localiser

- Créer la vue/route/controller nécessaire pour afficher la localisation.
- Ajouter un bouton Localiser dans la vue de détail des cinéma qui pointe vers la nouvelle page.
- Créer une balise div avec l'id map
- Installer le plugin geolocalisation

```bash
bower install ngCordova
```
- Ajouter un lien vers ``lib/ngCordova/dist/ng-cordova.js`` dans votre fichier index.html
- Injecter la dépendance ``ngCordova`` à votre application
- Ajouter le plugin geolocation

```bash
cordova plugin add cordova-plugin-geolocation
 ```
- Activer sass (``ionic setup sass``) et donner une taille à la balise map
```css
.scroll {
    height: 100%;
}
#map {
    width: 100%;
    height: 100%;
}
```
- Ajouter la variable ``$cordovaGeolocation`` au controlleur de votre page "localiser"
- Vous pouvez désormais récupérer la position de l'utilisateur

```javascript
// Options de la map
var options = {timeout: 10000, enableHighAccuracy: true};
//Récupérer la position utilisateur (promise)
$cordovaGeolocation.getCurrentPosition(options).then(function(position){
  // Dans cette fonction
  // Créer la map
  // Ajouter la position de l'utilisateur (centrer la map sur ce point)
  // Ajouter la position du cinéma choisi par l'utilisateur
  // Ajouter un pop up "Vous êtes ici !" lorsque l'utilisateur clic sur son point.
}
```


### Utilisation des modules Cordova (pour les plus rapides)


#### Module Camera

Ici, nous allons utiliser les modules Cordova pour permettre à l'utilisateur de prendre une photo durant sa visite.

- Préparer une vue et un controlleur "Prendre une photo". Ajouter un lien dans le menu.
- Ajouter le plugin camera de cordova à votre application  (le module est téléchargé via npm)
```bash
# à la racine de votre application
cordova plugin add cordova-plugin-camera
```
- Créer un bouton dans votre vue "Prendre une photo" et la fonction correspondante dans le controlleur qui déclenchera a prise de photo. Regardez la documentation de [ngCordova](http://ngcordova.com/docs/plugins/camera/) pour comprendre le fonctionnement du module Camera dans Angular.


### Performances

Les performances des applications Cordova/Ionic peuvent ne pas être satisfaisante (surtout pour les animations). Le composant Webview avec lequel cordova fonctionne peut être remplacé par des alternatives plus performantes. Il est fortement recommandé d'installer crosswalk pour les versions < 4.3 d'Android. Pour les versions récentes, Crosswalk peut aussi apporter des gains de performances notables.

- Installer Crosswalk, Ionic fournit un outil d'installation automatique de Crosswalk.

```bash
ionic browser add crosswalk
```

- Supprimer l'application du périphérique de test (afin d'éviter une erreur lors du déploiement)
- Tester sur le périphérique l'application avec Crosswalk


### Modifier le style Ionic avec Sass

[Sass](http://sass-lang.com/) (tout comme Less très utilisé également) est un préprocesseur css. Il permet grâce à une syntaxe très proche du CSS classique d'ajouter à ce language la gestion des variables, fonctions, mixins... Il est très utile pour accélèrer le développements de vos feuilles de style.

- Installer et configurer Sass pour Ionic automatiquement

```bash
ionic setup sass
```

- Dans le fichier ``./scss/ionic.app.scss``, modifier les variables pour changer les background-colors de la barre de menu.
