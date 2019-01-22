import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React Scripts >
// installs babel, to allow us to use the latest javascript syntax
// also installs webpack, so we can generate the build
// and installs webpack dev server, which alows auto-reloaded builds

// This line makes the index file render src/app.js into the root element,
// which can be fount in public/index.html
ReactDOM.render(<App />, document.getElementById('root'));

// Yarn is a package manager that's similar to NPM. Yarn was created
// from the ground up by Facebook to improve on some key aspects that are slow or lacking in NPM.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
