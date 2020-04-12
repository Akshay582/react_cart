import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// My web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBadf-csbOHWnZLFbE0ftUw_AVK8GWST0c",
  authDomain: "cart-933cf.firebaseapp.com",
  databaseURL: "https://cart-933cf.firebaseio.com",
  projectId: "cart-933cf",
  storageBucket: "cart-933cf.appspot.com",
  messagingSenderId: "461726152380",
  appId: "1:461726152380:web:d378ecd44ebe226cc902b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
