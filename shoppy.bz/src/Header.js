import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img classname='header_logo'
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
        <div className='header_option'>
            <span className='header_optionLineOne'>Hello Guest</span>
            <span className='header_optionLineTwo'>Sign In</span>
        </div>
        
        <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
        </div>
        
        <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Cart</span>
        </div>

        <Link to='/checkout' className='text-link'>
          <div className='header_optionBasket'>
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