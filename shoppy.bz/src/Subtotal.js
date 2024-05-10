import React from 'react'
import {Currency} from 'react-tender';
import './Subtotal.css'

function Subtotal() {
  return (
    <div className='subtotal'>
        <p>Subtotal (1 item) 
          <br/><strong>
          <Currency
            
            value={1000}
            currency='BZD'
            locale='en-BZ'
          /> </strong>
        </p>
        
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal