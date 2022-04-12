
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDpECjOjQnRpWpDQcFu5gFfX8TmADJyHa0",
    authDomain: "nodedemodb.firebaseapp.com",
    projectId: "nodedemodb",
    storageBucket: "nodedemodb.appspot.com",
    messagingSenderId: "961183575275",
    appId: "1:961183575275:web:3123726135818dc34b22ae"
  };



firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
