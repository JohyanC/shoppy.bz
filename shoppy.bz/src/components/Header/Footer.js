import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Footer() {
    const [{cart}, dispatch] = useStateValue();

  return (
    <div className='footer'>
      <div className='footer-div'>
        Site map:
      </div>

      <div className='footer-div'>
        Find us at:
        <div className='footer-socials'>
          <Link to='https://www.instagram.com/'>
            Instagram
            <InstagramIcon/></Link>
          <Link to={'https://www.facebook.com/'}>
            Facebook
            <FacebookIcon/></Link>
          <Link>
          WhatsApp
          <WhatsAppIcon/></Link>
        </div>
      </div>


      <div className='footer-div'>
        About us:
      </div>

      <div className='footer-div'>
        <NavigateNextIcon/>
        Back to top
      </div>

    </div>
  )
}

export default Footer