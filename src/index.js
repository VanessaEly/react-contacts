import React from 'react';
import ReactDOM from 'react-dom';
// BrowserRouter > Listens for changes in the URL and makes sure that the correct screen is loaded
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React Scripts >
// installs babel, to allow us to use the latest javascript syntax
// also installs webpack, so we can generate the build
// and installs webpack dev server, which alows auto-reloaded builds

// This line makes the index file render src/app.js into the root element,
// which can be fount in public/index.html
ReactDOM.render(
    // For React Router to work properly, you need to wrap your whole app in a BrowserRouter component.
    // Also, BrowserRouter wraps the history library which makes it possible for your app to be made aware of changes in the URL.
    // When you use BrowserRouter, what you're really doing is rendering a Router component and passing it a history prop
    // history abstracts away the differences in various environments and provides a minimal API
    // that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);

// Yarn is a package manager that's similar to NPM. Yarn was created
// from the ground up by Facebook to improve on some key aspects that are slow or lacking in NPM.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
