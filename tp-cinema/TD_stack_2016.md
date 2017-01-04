TD Installation Cordova / Ionic
==============


## Installation des outils Cordova & Ionic

- Télécharger et installer [node.js](http://nodejs.org).
- Installer les outils CLI Cordova et Ionic via NPM
```bash
sudo npm install -g cordova ionic
# Verifier le bon fonctionnement des outils
cordova -v
# 6.4.0
ionic -v
# 2.1.12
```



### Outils pour Android

- Installer le JDK Java (7+)
- Ajouter la variable d'environnement JAVA_HOME
```bash
# OS X
echo export "JAVA_HOME=\$(/usr/libexec/java_home)" >> ~/.bash_profile
# Restart your shell (or source ~/.bash_profile)
```
- Installer le Android SDK ([standalone](https://developer.android.com/studio/index.html#downloads))
- Ajouter les dossiers ``tools`` et ``platform-tools`` du sdk dans la variable $PATH.
```bash
# OS X
echo export "PATH=${PATH}:/Users/alassus/Library/Android/sdk/platform-tools:/Users/alassus/Library/Android/sdk/tools" >> ~/.bash_profile
# Restart your shell (or source ~/.bash_profile)
```
- Installer les SDK packages
```bash
android
```
- Si nécessaire, régler les paramètres du proxy dans ``tools``

- Installer l' ``API 23`` (Android 6.0) et les SDK ``build-tools``

- Ajouter un émulateur : Tools -> Manage AVDs -> Selectionner une configuration -> Create AVD.
    Les émulateurs Android sont très lents et en pratique quasi-inutilisables. Il existe cependant des [alternatives](https://www.genymotion.com/) nettement plus puissantes, mais parfois payantes.

### Outils pour iOS

- Installer Xcode
- Installer les CLI Xcode Preferences -> Downloads -> Command Line Tools
- Installer les ``deploy tools``
```bash
  npm install -g ios-sim
  npm install -g ios-deploy
```

## Prise en main des outils Ionic

- Créer un projet
```bash
# Liste des commandes Ionic
ionic
# Créer un projet
ionic start projet_test
cd projet_test
```

- Architecture d'une application cordova/Ionic
    - /www -> Code html/js/css
    - /plugins -> Plugins cordova (accès aux api natives)
    - /resources -> Ressources par plateforme (splash screens ...)
    - /platforms -> Librairies spécifiques aux plateformes

- Ajouter la plateforme Android à l'application
```bash
ionic platform add android
```

- Tester l'application dans le navigateur
```bash
ionic serve
```

### Tester l'application sur une tablette
- Vérifier que la tablette est en mode développement
- Brancher la tablette et accepter l'empreinte de la machine
- Utiliser ``adb`` pour vérifier que la tablette est correctement reconnue
```bash
adb devices
# List of devices attached
# 0123456abc  device
```
- Déployer l'application test sur la tablette
```bash
ionic run android
```

#### Debug

Il existe plusieurs solutions de debug (navigateur, ide ...). Pour débugger l'application tournant sur un périphérique ``chrome://inspect`` dans la barre d'adresse de Chrome est un outil intéressant.
