import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../../assets/Logo/Shoppy - Transparent PNG (White).png";
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase'

function Header() {
    const [{cart, user}, dispatch] = useStateValue();
    
  const navigate = useNavigate();

    const handleAuthentication = () => {
      if (user) {
        auth.signOut()
        
      alert("Sign out successful")
      navigate('/')
      }
    }

  return (
    <div className='header'>

      <div className='header-topbar'>
        <div className='h-topbar-App'>APP Download</div>
        <div className='h-topbar-text'>Follow us on</div>
        <div className='h-topbar-Socials'>
          <Link to='https://www.instagram.com/'>
            <InstagramIcon/></Link>
          <Link to={'https://www.facebook.com/'}>
          <FacebookIcon/></Link>
          <WhatsAppIcon/>
        </div>
        <div className='h-spacer'/>
        <div className='h-topbar-info'>
          <p><NotificationsNoneIcon/>Notifications</p>
          <p><HelpOutlineIcon/>Help</p>
        </div>
      </div>

      <div className='header__withSearch'>
        
        <Link to='/'>
          <img className='header__logo'
            src={logo}
            alt='shoppy logo'
          />
        </Link>  

        <div className='header-search'>
        <form className='header__search'>
          <input 
            className='header__searchInput'
            placeholder='Search'
            type='text' />
          <SearchIcon className='header__searchIcon'/>
        </form>
        <div className='header__categories'>
          <div className='h-categories'>Categories <NavigateNextIcon/></div>
          <div className='h-categories'>Gaming PC</div>
          <div className='h-categories'>Headphones</div>
          <div className='h-categories'>Clothing</div>
          <div className='h-categories'>Computers</div>
          <div className='h-categories'>Accessories</div>
        </div>
          

        </div>

        
        <div className='header__nav'>
          <Link to={!user && 'login'} className='text-link'>
            <div className='header__option' onClick={handleAuthentication}>
              <span className='header__optionLineOne'>{user ? user.username : 'Hello Guest'}</span>
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