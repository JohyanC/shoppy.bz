import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { app, auth } from '../firebase'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, OAuthProvider, signInWithRedirect, signOut, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import error from '../ErrorBoundrary/404'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const msProvider = new OAuthProvider('microsoft.com');
  const ggleProvider = new GoogleAuthProvider();

  {/*const signIn = e => {
    e.preventDefault()
    //Firebase implementation

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      if (user) {
        navigate('/');_CART
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  };*/}

  const handleLogin = async (loginType) => {

    if (loginType === 'email') {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user

          alert(user)
          //window.location.href = '/';
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === 'auth/wrong-password')
            alert("Incorrect password")
          console.log(error)
        });
    } else if (loginType === 'msOAuth') {

      signInWithRedirect(auth, msProvider)
      await getRedirectResult(auth)
        .then((result) => {
          // User is signed in.
          // IdP data available in result.additionalUserInfo.profile.

          // Get the OAuth access token and ID Token
          const credential = OAuthProvider.credentialFromResult(result)
          const accessToken = credential.accessToken
          const idToken = credential.idToken

          window.location.href = '/'
          console.log(credential)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === 'auth/wrong-password')
            alert("Incorrect password")
          console.log(error)
        });
    }
    else if (loginType === 'ggleOAuth') {
      signInWithRedirect(auth, ggleProvider)
      await getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken

          // The signed-in user info.
          const user = result.user
          // IdP data available using getAdditionalUserInfo(result)
          console.log(user)
          navigate('/');
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

  const handleLogout = async () => {

    signOut(auth)
      .then(() => {
        alert("Sign out successful")
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const handleRegister = async e => {
    e.preventDefault()
    //Firebase implementation

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user


        updateProfile(user, {
          displayName: user.email.match(/^([^@]*)@/)[1],
        })
        setUsername(user.displayName)
        window.location.href = '/';

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
              //value={email} 
              onChange={e => setEmail(e.target.value)}
              autoComplete='email'
              required={true}
              placeholder='email'
              spellCheck='false' />

            <label htmlFor='pwd'>Password</label>
            <input
              type='password'
              id='pwd'
              //value={password} 
              onChange={e => setPassword(e.target.value)}
              autoComplete='password'
              required={true}
              placeholder='Password'
              spellCheck='false' />

            <p>{email}</p>

            <button className='login__signInButton' type='submit' onClick={() => handleLogin("email")}>Sign in</button>
          </form>
          <p>
            By signing in you agree to Shoppy's Conditions of use & sale. Please see our Privacy Notice, ourcookies Notice, and our Internet Based Ads Notice.
          </p>
          <button className='login__registerButton' type='submit' onClick={handleRegister}>Create your account
          </button>
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

            <p>{email}</p>
            <button className='login__MS' type='submit' onClick={() => handleLogin("msOAuth")}>Microsoft</button>

            <button className='logout__MS' type='submit' onClick={() => handleLogin("ggleOAuth")}>Google</button>

            <button className='logout__MS' type='submit' onClick={() => handleLogout()}>Log out</button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Login