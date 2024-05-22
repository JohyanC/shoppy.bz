import React from 'react'
import {Currency} from 'react-tender';
import '../style/Subtotal.css'
import { useStateValue } from './StateProvider';
import { getcartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{cart}, dispatch] = useStateValue();
  const naviagte = useNavigate();

  return (
    <div className='subtotal'>
        <p>Subtotal ({cart?.length} items) 
          <br/><strong>
          <Currency            
            value={getcartTotal(cart)}
            currency='BZD'
            locale='en-BZ'
          /> </strong>
        </p>
        
        <button onClick={e => naviagte('payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal