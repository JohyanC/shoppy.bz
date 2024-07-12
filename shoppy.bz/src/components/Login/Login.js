import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { app, auth } from '../firebase'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, OAuthProvider, signInWithRedirect, signInWithPopup, signOut, GoogleAuthProvider, getRedirectResult, FacebookAuthProvider } from "firebase/auth";
import error from '../ErrorBoundrary/404'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const msProvider = new OAuthProvider('microsoft.com');
  const ggleProvider = new GoogleAuthProvider();
  const metaProvider = new FacebookAuthProvider();

  //Email login hook
  const emailLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  //Facebook login hook
  const metaLogin = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, metaProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
    
        // ...
      })
  }
  //Microsoft login hook
  const msLogin = async (e) => {
    e.preventDefault();
    msProvider.setCustomParameters({
      // Force re-consent.
      prompt: 'login'
    });
    await signInWithPopup(auth, msProvider)
      .then((result) => {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.

        // Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result);
        console.log(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(error)
      });
  }
  //Google login hook
  const ggleLogin = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, ggleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  //Logout hook
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Sign out successful")
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };
  //Account creation hook
  const handleRegister = async e => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user
        updateProfile(user, {
          displayName: user.email.match(/^([^@]*)@/)[1],
        })
        setUsername(user.displayName)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
        console.log(error)

        if (error.code === 'auth/email-already-in-use')
          alert('email already used')
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
            <label htmlFor='email1'>Email</label>
            <input
              type='email'
              id='email1'
              onChange={e => setEmail(e.target.value)}
              autoComplete='email'
              required={true}
              placeholder='email'
              spellCheck='false' />

            <label htmlFor='pwd'>Password</label>
            <input
              type='password'
              id='pwd'
              onChange={e => setPassword(e.target.value)}
              autoComplete='password'
              required={true}
              placeholder='Password'
              spellCheck='false' />

            <button className='login__signInButton' type='submit' onClick={(e) => emailLogin(e)}>Sign in</button>
          </form>

          <hr/>
          <p>or</p>
          <hr/>

          <button className='login__MS' type='submit' onClick={(e) => msLogin(e)}>Microsoft</button>
          <button className='login__GGLE' type='submit' onClick={(e) => ggleLogin(e)}>Google</button>
          {/*<button className='login__META' type='submit' onClick={(e) => metaLogin(e)}>Facebook</button>*/}

          <p>
            By signing in you agree to Shoppy's Conditions of use & sale. Please see our Privacy Notice, our cookies Notice, and our Internet Based Ads Notice.
          </p>
          
          <p>Don't an account?</p><p>Sign up</p>
        </div>

        <div className='login-container-register'>
          <h1 className='login__text'>Sign up</h1>

          <form>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              autoComplete='name'
              required={true}
              placeholder='Username'
              spellCheck='false' />

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              //value={email} 
              onChange={e => setEmail(e.target.value)}
              autoComplete='email'
              required={true}
              placeholder='Email'
              spellCheck='false' />

            <label htmlFor='pwdNew'>Password</label>
            <input
              type='password'
              id='pwdNew'
              name='p2'
              //value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
              maxLength={32}
              autoComplete='new-password'
              required={true}
              spellCheck='false' />

            <label htmlFor='pwdNewCheck'>Confirm password</label>
            <input
              type='password'
              id='pwdNewCheck'
              name='p2'
              //value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder='Confirm password'
              maxLength={32}
              autoComplete='new-password'
              required={true}
              spellCheck='false' />
            
            <hr/>
            <p>or</p>
            <hr/>

            <button className='login__MS' type='submit' onClick={() => msLogin()}>Microsoft</button>
            <button className='login__GGLE' type='submit' onClick={() => ggleLogin()}>Google</button>
            <button className='logout' type='submit' onClick={() => handleLogout()}>Log out</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login