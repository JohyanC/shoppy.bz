import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { getBasketTotal, getbasketInfo } from './reducer';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            {/*<img className='checkout__ad' alt=''/>*/}
            
          <div>
              <h2 className='checkkout__title'>Your Shopping Cart</h2>
          </div>

          {getbasketInfo(basket)}

        </div>


        <div className='checkout__right'>
            <Subtotal />
        </div>
        
    </div>    
  )
}

export default Checkout