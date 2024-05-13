// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Add the Firebase products that you want to use
var firestore = require("firebase/firestore");
var firebaseui = require('firebaseui')
require('firebase/auth');

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ-mrHU7HSCkYsHmqgiqbMVtKy7mDp6Fg",
  authDomain: "shoppy-bz.firebaseapp.com",
  projectId: "shoppy-bz",
  storageBucket: "shoppy-bz.appspot.com",
  messagingSenderId: "147406576741",
  appId: "1:147406576741:web:57449ea369a3c615db7a8c",
  measurementId: "G-2HF30MCC59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const analytics = getAnalytics(app);
// Initialize the FirebaseUI Widget using Firebase.


export { auth, app };









/*
const firebaseConfig = {
    apiKey: "AIzaSyCQ-mrHU7HSCkYsHmqgiqbMVtKy7mDp6Fg",
    authDomain: "shoppy-bz.firebaseapp.com",
    projectId: "shoppy-bz",
    storageBucket: "shoppy-bz.appspot.com",
    messagingSenderId: "147406576741",
    appId: "1:147406576741:web:57449ea369a3c615db7a8c",
    measurementId: "G-2HF30MCC59"
  };

  const firebaseapp = firebase.firestore(firebaseConfig);
 const db = firebaseapp.getFirebase();
  const auth = firebase.auth();

  export { auth};
  
  
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    }
  ],
  // Other config options...
  
});
  
  
  
  
  
  
  
  
  
  
  */
  