import React from 'react'
import "./Home.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Product from './Product';
import logo from './temp-logo.png';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
              src='https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg'
              alt='idk'
            />
            <div className='home__row'>
              <Product 
                id="000100"
                title='Lenovo Legion 7 Gaming Laptop' 
                price={1499.99} 
                image={logo} 
                rating={4}
              />
              <Product 
                id="000200"
                title='SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, ...' 
                price={1049.99} 
                image="https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_SX679_.jpg" 
                rating={4}
              />
              <Product 
                id="000100"
                title='Lenovo Legion 7 Gaming Laptop' 
                price={1499.99} 
                image={logo} 
                rating={4}
              />
              <Product />
            </div>

            <div className='home__row'>
              <Product />
              <Product />
            </div>

            <div className='home__row'>
              <Product />
            </div>
        </div>
    </div>
  )
}

export default Home