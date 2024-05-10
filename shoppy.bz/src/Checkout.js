import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            {/*<img className='checkout__ad' alt=''/>*/}
            
        <div>
            <h2 className='checkkout__title'>Your Shopping Cart</h2>
        </div>
        </div>


        <div className='checkout__right'>
            <Subtotal />
        </div>
        
    </div>    
  )
}

export default Checkout