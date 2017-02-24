import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';
import env from '../env.json';
 
firebase.initializeApp({
	apiKey: env.apiKey,
    authDomain: env.authDomain,
    databaseURL: env.databaseURL,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
