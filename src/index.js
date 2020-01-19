import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from './contexts/auth0-contexts';
import App from './App';

ReactDOM.render(
    <Auth0Provider>
        <App />
    </Auth0Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
