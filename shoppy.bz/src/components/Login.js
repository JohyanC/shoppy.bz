import React, { useState } from 'react'
import '../style/Login.css'
import logo from '../assets/logo.jpeg'
import { Link, useNavigate  } from 'react-router-dom'
import { app, auth } from './firebase'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = e => (
    e.preventDefault(),
    //Firebase implementation

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      if (user) {
        navigate('/');
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  );

  
  const register = e => (
    e.preventDefault(),
    //Firebase implementation
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
      const user = userCredential.user;
        if (user) {
          window.location.href='/';
        }
        else {
          alert('email already used')
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
  );


      
    


   {/*} auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      alert(auth) 
      if(auth) {
        // eslint-disable-next-line no-restricted-globals
        history.pushState('/')}
      })
    .catch(error => alert(error.message))

    
  const fui {
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
  }
    */}


  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo'
          src={logo}
          alt='Shoppy Logo'
        />
      </Link>
      <div className='login__container'>      
        <h1 className='login__text'>Log in</h1>
        <form>
          <h5>Email</h5>
          <input type='email' value={email} onChange={e=> setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>
          <p>{email}</p>
          <button className='login__signInButton' type='submit' onClick={signIn}>Sign in</button>
        </form>
        <p>
          By signing in you agree to Shoppy's Conditions of use & sale. Please see our Privacy Notice, ourcookies Notice, and our Internet Based Ads Notice.
        </p>
        <button className='login__registerButton' type='submit' onClick={register}>Create your account</button>
      </div>
    </div>
  )
}

export default Login