import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './logoSmall.jpeg';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { Outlet } from 'react-router-dom';

function Header() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img classname='header_logo'
          src={logo}
          alt='shoppy logo' />
      </Link>


      <div className='header_search'>
        <input className='header_searchInput'
          type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <Link to='login' className='text-link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Hello Guest</span>
            <span className='header_optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <Link className='text-link'>
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

            <ShoppingCartIcon />
            <span className='header_optionLineTwo header_basketCount'>
              {basket?.length}</span>
          </div>
        </Link>

      </div>
      <Outlet/>
      {/*</div><div className='footer'>
        This is the footer
  </div>*/}
  </div>


  )
}

export default Header