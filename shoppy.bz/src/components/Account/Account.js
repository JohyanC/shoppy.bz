import React from 'react'
import './Account.css'
import Profile from './Profile.js'
import Security from './Security.js'

function Account() {
  return (
    <div className='account-container'>
        <div className='account-sidebar'>
          <div className='account-sidebar-categories'>
              <div className='account-category'>
                  Profile
              </div>
              <div className='account-category'>
                  Sign-in & Security
              </div>
              <div className='account-category'>
                  Payment History
              </div>
              <div className='account-category'>
                  Lorem Ipsum
              </div>
              <div className='account-category'>
                  Lorem Ipsum
              </div>
          </div>
      </div>

      <div className='account-details'>
          //Implements dedicated page options
          <Profile />
          <Security />

      </div>    
    </div>

  )
}

export default Account