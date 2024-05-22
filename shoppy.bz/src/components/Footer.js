import React from 'react'
import '../style/Footer.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Footer() {
    const [{cart}, dispatch] = useStateValue();

  return (
    <div className='footer'>
      This is the footer
    </div>
  )
}

export default Footer