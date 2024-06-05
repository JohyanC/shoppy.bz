import React, { useState } from 'react'
import { app, auth } from '../firebase'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, OAuthProvider, signInWithRedirect, signOut, GoogleAuthProvider, getRedirectResult } from "firebase/auth";


//const navigate = useNavigate();
const msProvider = new OAuthProvider('microsoft.com');
const ggleProvider = new GoogleAuthProvider()

const useHandleLogin = async (loginType) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (loginType === 'email') {

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      
      console.log(user)      
      window.location.href='/'
    })
  } else if (loginType === 'msOAuth') {

    signInWithRedirect(auth, msProvider)
    getRedirectResult(auth)
    .then((result) => {
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.

      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result)
      const accessToken = credential.accessToken
      const idToken = credential.idToken

      window.location.href='/'
      console.log(credential)
    })
    .catch((error) => {
      // Handle error.
    });
  }
  else if (loginType === 'ggleOAuth'){
    signInWithRedirect(auth, ggleProvider)
    getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken

      // The signed-in user info.
      const user = result.user
      // IdP data available using getAdditionalUserInfo(result)
      window.location.href='/'
      console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
    });
  }
};

const useHandleLogout = async () => {

    signOut(auth)
    .then (() => {
      alert("Sign out successful")
      window.location.href='/'
    })
    .catch((error) => {
      console.log(error)
    });
};  

const useHandleRegister = async e => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    //e.preventDefault()
    //Firebase implementation
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
      const user = userCredential.user

        if (user) {
          updateProfile(user, {
            displayName: user.email.match(/^([^@]*)@/)[1],
          })
          setUsername(user.displayName)
          window.location.href='/';
        }
        else {
          alert('email already used')
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
};

export { useHandleLogin, useHandleLogout, useHandleRegister};