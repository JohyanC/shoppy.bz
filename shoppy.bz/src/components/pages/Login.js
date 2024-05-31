import React, { useState } from 'react'
import '../../style/Login.css'
import logo from '../../assets/logo.jpeg'
import { Link, useNavigate  } from 'react-router-dom'
import { app, auth } from '../firebase'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, OAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import error from '../404'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { instance } = useMsal();
  const provider = new OAuthProvider('microsoft.com');

  const signIn = e => {
    e.preventDefault()
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
  };

  const handleLogin = (loginType) => {

    if (loginType === 'email') {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      if (user) {
        navigate('/');
      }
    })
  } else if (loginType === 'msOAuth') {

    signInWithRedirect(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        console.log(credential);

        instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      })
    });
  }
};

const handleLogout = (loginType) => {

  if (loginType === 'email') {
    signOut(auth)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    if (user) {
      navigate('/');
    }
  })
} 
};  

  const register = e => {
    e.preventDefault()
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
    };

 
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo'
          src={logo}
          alt='Shoppy Logo'
        />
      </Link>
      <div className='login__container'> 
        <div className='login-container-login'>
          <h1 className='login__text'>Log in</h1>
          <form>
            
            <label for='email1'>Email</label>
            <input 
              type='email'
              id='email1' 
              //value={email} 
              onChange={e=> setEmail(e.target.value)}
              autoComplete='email'
              required='true'
              placeholder='Username'
              spellCheck='false'/>

            <label for='pwd'>Password</label>
            <input 
              type='password' 
              id='pwd'
              //value={password} 
              onChange={e=> setPassword(e.target.value)}
              autoComplete='password'
              required='true'
              placeholder='Password'
              spellCheck='false'/>

            <p>{email}</p>

            <button className='login__signInButton' type='submit' onClick={() => handleLogin("email")}>Sign in</button>
          </form>
          <p>
            By signing in you agree to Shoppy's Conditions of use & sale. Please see our Privacy Notice, ourcookies Notice, and our Internet Based Ads Notice.
          </p>
        <button className='login__registerButton' type='submit' onClick={register}>Create your account
        </button>
        </div>
        <div className='login-container-register'>
        <h1 className='login__text'>Sign up</h1>

          <form>
            <label for='username'>Username</label>
            <input 
              type='text'
              id='username'
              autoComplete='name'
              required='true'
              placeholder='Username'
              spellCheck='false'/>


            <label for='email'>Email</label>
            <input 
              type='email' 
              id='email'
              //value={email} 
              onChange={e=> setEmail(e.target.value)}
              autoComplete='email'
              required='true'
              placeholder='Email'
              spellCheck='false'/>

            <label for='pwdNew'>Password</label>
            <input 
              type='password' 
              id='pwdNew'
              name='p2'
              //value={password} 
              onChange={e=> setPassword(e.target.value)}
              placeholder='Password'
              maxLength={32}
              autoComplete='new-password'
              required='true'
              pellCheck='false'/>
            
            <label for='pwdNewCheck'>Confirm password</label>
            <input 
              type='password' 
              id='pwdNewCheck'
              name='p2'
              //value={password} 
              onChange={e=> setPassword(e.target.value)}
              placeholder='Confirm password'
              maxLength={32}
              autoComplete='new-password'
              required='true'
              spellCheck='false'/>

            <p>{email}</p>
            <button className='login__MS' type='submit' onClick={() => handleLogin("msOAuth")}>Microsoft</button>
            <button className='logout__MS' type='submit' onClick={() => handleLogout("msOAuth")}>Log out</button>
          </form>

        </div>
        
      </div>
    </div>
  )
}

export default Login