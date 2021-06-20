## Credits :

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is based on [this tutorial app](https://medium.com/weekly-webtips/use-react-with-json-server-and-create-simple-crud-app-b2bf58cd4558).

## To get started :

After cloning the repository, go to the root directory and run:
### `json-server --watch db.json --port 3002`

To launch the app, run:
### `npm install`
and then
### `npm start`

If there is an error finding react-scripts, run these 3 commands:
### `npm install react-scripts`
### `npm install`
### `node_modules/.bin/react-scripts start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Issues :

Il y a trois principaux problèmes avec ce projet que je n'ai pas pu résoudre :
1. Il n'y a pas de fonctionnalité de recherche.
2. La modale ne reste pas ouverte après un update/create/delete. J'ai essayé en vain de retirer `data-dismiss="modal"` et de `preventdefault()` mais cela n'a rien changé, la fonction appelée lors du `onClick` insiste pour retirer la modale.
3. Si l'on clique sur un contact pour le mettre à jour mais qu'on quitte la modale sans prendre d'action, le formulaire pour créer un nouveau contact sera pré-rempli avec les informations de ce contact.
