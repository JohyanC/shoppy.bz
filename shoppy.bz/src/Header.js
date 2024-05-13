import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './logoSmall.jpeg';
import { Link, Outlet } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    }

  return (
    <div className='header'>
      <Link to='/'>
        <img classname='header__logo'
          src={logo}
          alt='shoppy logo'
        />
      </Link>


      <div className='header_search'>
        <input className='header_searchInput'
          type='text' />
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header_nav'>
        <Link to={!user && 'login'} className='text-link'>
          <div className='header_option' onClick={handleAuthentication}>
            <span className='header_optionLineOne'>{user ? user.email : 'Hello Guest'}</span>
            <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In' }</span>
          </div>
        </Link>
        <Link to='orders' className='text-link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='checkout' className='text-link'>
          <div className='header_optionBasket'>
            <div className='header_option'>
              <span className='header_optionLineOne'>Your</span>
              <span className='header_optionLineTwo'>Cart</span>
            </div>

            <ShoppingCartIcon/>
            <span className='header_optionLineTwo header_basketCount'>
              {basket?.length}</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header