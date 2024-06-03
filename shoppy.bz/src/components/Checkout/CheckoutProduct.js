import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue();
    
    const removeFromCart = () => {
        //Remove the item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }


  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image'
            src={image}
            alt=''/>

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>
                {title}
            </p>
            <p className='price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>            

            <div className='checkoutProduct__rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromCart}>Remove from cart</button>

        </div>
    </div>
  )
}

export default CheckoutProduct