# LEKTIO

LEKTIO est une application de liseuse d’eBooks se voulant accessible et personnalisable.

Elle permet à chaque utilisateur d’adapter l’interface à ses besoins, notamment concernant la dyslexie, la lisibilité, la luminosité ou encore la langue de l’application.

## Ressources

Pour ce projet d’examen, les données sont fournies via des fichiers JSON.

Ils contiennent :

- les données des livres ;
- les traductions des différents éléments de l’interface en français, anglais et espagnol.

Des images sont également fournies pour les couvertures des livres présents dans la bibliothèque.

## Fonctionnalités

L’application est organisée autour de trois pages principales et utilise React Router pour gérer la navigation.

### Bibliothèque

Page d’accueil de l’application présentant les livres fournis.

Elle permet :

- d’afficher les livres de la bibliothèque ;
- de rechercher un livre par titre ou auteur grâce à un filtrage en direct ;
- d’accéder à un livre pour commencer ou continuer sa lecture.

Cette page est accessible depuis la barre de navigation située en bas de l’écran, depuis la flèche retour de la page Lecture ainsi que depuis le logo de l’application.

### Lecture

Page permettant de lire le contenu d’un livre, représenté par du Lorem Ipsum dans le cadre du projet.

Elle affiche :

- le titre du livre ;
- son auteur ;
- une barre de progression de lecture ;
- le chapitre en cours;
- un overlay contenant les réglages de lecture.

### Préférences

Page permettant de personnaliser l’application.

L’utilisateur peut modifier :

- la langue ;
- le thème ;
- la couleur d’accentuation ;
- la police ;
- la taille du texte ;
- l’interlignage ;
- l’espacement des caractères ;
- la largeur du contenu.

Les différents réglages sont sauvegardés dans le `localStorage` afin d’être conservés après le rechargement de l’application.

Une fonction de réinitialisation permet également de revenir aux valeurs par défaut.

L’application comporte également des composants React réutilisables.

Les composants principaux gèrent notamment :

- l’affichage de la bibliothèque ;
- la recherche de livres ;
- les cartes de présentation ;
- la navigation ;
- la progression de lecture ;
- les réglages d’apparence et de typographie.

Les données et états globaux sont centralisés dans deux Contexts :

- `LivresContext` : gestion des livres et de la recherche ;
- `PreferencesContext` : gestion des traductions, thèmes, couleurs, langue, typographie et sauvegarde dans le `localStorage`.


## Technologies utilisées

- React
- Vite
- React Router
- JavaScript
- JSX
- CSS
- localStorage
- fichiers JSON