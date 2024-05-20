import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
  const [state, dispatch] = useStateValue();

  const addTocart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className='product__info'>
            <img
            src={image}
            alt='product'/>
            
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
            </div>

            
            
            <p>{title}</p>
        </div>
            <button onClick={addTocart}>Add to Cart</button>
    </div>
  )
}

export default Product