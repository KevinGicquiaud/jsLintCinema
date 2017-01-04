TP2 - Ionic "Cinemapp"
==============

## Ionic && Angular v1

Terminez, si ce n'est pas déjà fait, le TP1.

### Pull to refresh

Mettez en place un "pull to refresh" sur votre vue Cinemas.
  - Faites en sorte de n'afficher que les 2 premiers cinémas par défaut à l'affichage de cette vue.
  - Mettez en place un "pull to refresh" pour afficher tous les cinémas.

### Popup

Nous allons ici mettre en place un système de commentaire sur les films.

- Mettez en place une page "Commentaires du film" au clic sur un film.
- Mettez en place une liste de commentaires (testez votre affichage avec une variable locale dans le $scope) de votre controlleur.
- Mettez en place un bouton "+" qui permet d'ajouter un commentaire.
- Ouvrez une ``IonicPopup`` au clic sur ce bouton avec un titre et un commentaire.
- Injectez le commentaire et affichez-le

### Appel direct

- Dans le fichier json des cinemas, ajouter un élément ``tel`` avec un numéro de téléphone factice.
- Mettez en place un bouton "appel" dans la description du cinéma

```html
<a href="tel:0601020304"></a>
```

- afin que cela puisse fonctionner depuis le téléphone il est nécessaire de l'autoriser dans le fichier config.xml (il est assez récurrent que pour certaines fonctions, il faille ajouter ce type d'autorisation).


```xml
<access origin="tel:*" launch-external="yes" />
<allow-intent href="tel:*" />
```
- Tester le fonctionnement de l'appel direct.

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
ionic plugin add cordova-plugin-crosswalk-webview
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


### Rapide ? -> Ionic 2

Créer une application Ionic 2.0

```bash
ionic start --sass cinemapp sidemenu
```

- Que constatez-vous dans la structure du projet ?
- Que constatez-vous lors du processus de build/déploiement ?
