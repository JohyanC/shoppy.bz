import React from 'react'
import "./Home.css"
import ProductInfo from '../Product/ProductInfo';
import advert from '../../assets/Adverts/advert-banner-1.jpg'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <div className='home-hero'>
            <img className='home__image'
              src='https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg'
              alt='idk'/>
          </div>
          <div className='home-flash-sale'>
            
          </div>
          <div className='home-recommended'>
            <ProductInfo 
              id="6N7nrmBVSQcITLwJAJpD"/>
            <ProductInfo 
              id="Zj80EhxMZTWiNqopBPB8"/>
            <ProductInfo 
              id="pajNHyext1nKuQ7ITI2I"/>
          </div>
          <div className='home-recommended'>
            <ProductInfo 
              id='aS5yuAyTLtlOOqXbADrk'/>
            <ProductInfo 
              id='aS5yuAyTLtlOOqXbADrk'/>
          </div>
          <div className='home-categories'>
            <div className='h-category-unit'>
              <img className='h-category'
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='idk'/>
              <p>Gaming PC </p>
            </div>            
            <div className='h-category-unit'>
              <img className='h-category'
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='idk'/>
              <p>Clothing</p></div>
            <div className='h-category-unit'>
              <img className='h-category'
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='idk'/>
              <p>Headphones</p></div>
            <div className='h-category-unit'>
              <img className='h-category'
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='idk'/>
              <p>Computers</p></div>
            <div className='h-category-unit'>
              <img className='h-category'
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='idk'/>
              <p>Accessories</p></div>
            <div className='h-category-unit'>
              <img className='h-category'
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='idk'/>
              <p>All Categories</p></div>
          </div>
          <div className='advert-bottom'>
            <div className='advert-banner'>
              <img src={advert}
                alt='sell with us advert'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home