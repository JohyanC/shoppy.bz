import React from 'react'
import "../style/ProductInfo.css"
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';

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
        <div className='product__info' onClick={() => <Link to={'${title}/${id}'}/>}>
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