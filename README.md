# Documentation

Doc React : Installation de [React](https://create-react-app.dev/docs/getting-started/)

## Projet-Front

Mettre en place un front simple et dynamique avec React.

### Etape de coding

1) Mettre en place l'architecture du projet. **Ok**

> Trouver documention concernant une architecture simple d'une application React
> Resultat trouver : [Source 1 : Reactjs.org](https://fr.reactjs.org/docs/faq-structure.html) -  [Source 2 : Wanadev](https://www.wanadev.fr/203-react-js-1-comment-architecturer-son-projet-react-js/)

- components = Servira à stocker des modèles des truck comme un bouton, une par de navigation etc..
    **OK**
- services = Comportera "Store" - "Security" - "api"
    **OK**
- views = comportera les modèles des pages à afficher (home - loginPage - signInPage - etc..)
    **OK**

> Découverte de Material-UI pour simplifié notre CSS (alternative à BuutStrap) [documentation utilisé](https://mui.com/material-ui/getting-started/usage/)
> source de [matrial-ui](https://mui.com/material-ui/react-button/)

2) Mettre en place les routes

- "yarn add react-router-dom" **OK**
- Déplacement des "App" dans le views et remplacement des routes App.js -> "import Home from './home';" **OK**
- Test d'utilisation de Material-UI **OK**
- Création de thème "custom" pour la couleur d'élément **OK**
- Mettre en place le système de routing (chercher balise \<Route> et balise \<link> sur la documentation de React) **OK**
- Une fois mise en place Intégré les balise \<Link src=""> dans la navBar \</Link>

