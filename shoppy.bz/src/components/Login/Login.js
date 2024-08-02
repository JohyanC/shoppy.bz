import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import error from '../ErrorBoundrary/404'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  
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

            <button className='login__signInButton' type='submit' onClick={console.log()}>Sign in</button>
          </form>

          <hr/>
          <p>or</p>
          <hr/>

          <button className='login__MS' type='submit' onClick={console.log()}>Microsoft</button>
          <button className='login__GGLE' type='submit' onClick={console.log()}>Google</button>
          {/*<button className='login__META' type='submit' onClick={console.log()}>Facebook</button>*/}

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

            <button className='login__MS' type='submit' onClick={console.log()}>Microsoft</button>
            <button className='login__GGLE' type='submit' onClick={console.log()}>Google</button>
            <button className='logout' type='submit' onClick={console.log()}>Log out</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login