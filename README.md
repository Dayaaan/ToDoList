# Challenge : To-do React-Redux

Encoooore ? C'est la dernière fois promis…  
Challenge : refaire la **todolist**, cette fois-ci en utilisant Redux et React-Redux ! :nerd_face:


## Instructions

* Reprenez la correction du challenge To-do List en React.

* Installez `redux` et `react-redux`.

* Créer un dossier `src/store` :

* `src/store/reducer.js`
  + Encapsuler chaque mutation de state au sein d'une `action`, et créer les actions creators associés.
  + Créer un reducer pour venir modifier le state en fonction de ces actions.

* `src/store/index.js` : créer votre store avec la fonction `createStore` de redux et votre reducer

* Rajouter le composant `Provider` à la racine de notre appli, en lui donnant le `store`.

* Créer les Container Components de tous les composants qui ont besoin de state ou d'actions, avec `connect()` de react-redux.

* Transformer le container racine en composant de présentation.

* Importer les containers à la place des composants.


## Lectures

* http://redux.js.org/docs/introduction/, notamment :
  + http://redux.js.org/docs/introduction/Motivation.html
  + http://redux.js.org/docs/introduction/CoreConcepts.html
  + http://redux.js.org/docs/introduction/ThreePrinciples.html
* http://redux.js.org/docs/basics/, notamment :
  + http://redux.js.org/docs/basics/Store.html
  + http://redux.js.org/docs/basics/UsageWithReact.html
