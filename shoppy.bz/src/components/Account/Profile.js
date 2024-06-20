import React from 'react'
import {auth} from '../firebase'
import { useStateValue } from '../StateProvider';

function Profile() {

    const [{user}, dispatch] = useStateValue();

  return (
    <div className='account-profile'>
        {/*Username*/}
        <div className='account-title'>
            <strong>Username:</strong>
        </div>
        <div className='account-option'>
            <p>user.username</p>
        </div>

        {/*Full Name*/}
        <div className='account-title'> 
            <strong>First Name:</strong>
        </div>
        <div className='account-option'>
            <p>user.firstName</p>
        </div>
        <div className='account-title'>
            <strong>Last Name:</strong>
        </div>
        <div className='account-option'>
            <p>user.lastName</p>
        </div>

        {/*Email*/}
        <div className='account-title'>
            <strong>Email:</strong>
        </div>
        <div className='account-option'>
            <p>user.email</p>
        </div>

        {/*Phone Number*/}
        <div className='account-title'>
            <strong>Phone Number:</strong>
        </div>
        <div className='account-option'>
            <p>user.number</p>
        </div>


    </div>
  )
}

export default Profile