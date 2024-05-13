import React, { useState } from 'react'
import './Login.css'
import logo from './logo.jpeg'
import { Link } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => (
    e.preventDefault()
    //Firebase implementation
  );

  const register = e => (
    e.preventDefault(),
    alert(email, password),
    //Firebase implementation
   {/*} auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      alert(auth) 
      if(auth) {
        // eslint-disable-next-line no-restricted-globals
        history.pushState('/')}
      })
    .catch(error => alert(error.message))
    */}
  )

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