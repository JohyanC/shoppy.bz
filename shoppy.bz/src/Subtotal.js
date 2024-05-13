import React from 'react'
import {Currency} from 'react-tender';
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const naviagte = useNavigate();

  return (
    <div className='subtotal'>
        <p>Subtotal ({basket?.length} items) 
          <br/><strong>
          <Currency            
            value={getBasketTotal(basket)}
            currency='BZD'
            locale='en-BZ'
          /> </strong>
        </p>
        
        <button onClick={e => naviagte('payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal