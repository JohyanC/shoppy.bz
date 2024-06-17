import React from 'react'
import Profile from './Profile.js'

function Account() {
  return (
    <><div className='account-sidebar'>
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
          //Implements dedicated page options
          <Profile /></>

  )
}

export default Account