import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{cart,user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            {/*<img className='checkout__ad' alt=''/>*/}
            
          <div>
              <h3>Hello, {user?.email}</h3>
              <h2 className='checkkout__title'>Your Shopping Cart</h2>
          </div>

          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}          

        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>        
    </div>    
  )
}

export default Checkout