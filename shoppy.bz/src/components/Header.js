import React from 'react'
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../assets/Logo/Shoppy - Transparent PNG (White).png";
import { Link, Outlet } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{cart, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    }

  return (
    <div className='header'>

      <div className='header__topBar'>
        <span>APP Download</span>
        <span>Follow us on</span>
      </div>

      <div className='header__withSearch'>
        
        <Link to='/'>
          <img classname='header__logo'
            src={logo}
            alt='shoppy logo'
          />
        </Link>  

        <div className='header-search'>
        <form className='header__search'>
          <input className='header__searchInput'
            type='text' />
          <SearchIcon className='header__searchIcon'/>
        </form>
        <div className='header__categories'><span>Categories</span>Gaming PC Headphones</div>
          

        </div>

        
      <div className='header__nav'>
        <Link to={!user && 'login'} className='text-link'>
          <div className='header__option' onClick={handleAuthentication}>
            <span className='header__optionLineOne'>{user ? user.email : 'Hello Guest'}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In' }</span>
          </div>
        </Link>
        <Link to='orders' className='text-link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='checkout' className='text-link'>
          <div className='header__optioncart'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Cart</span>
            </div>

            <ShoppingCartIcon/>
            <span className='header__optionLineTwo header__cartCount'>
              {cart?.length}</span>
          </div>
        </Link>
      </div>
      </div>
      
    </div>
  )
}

export default Header