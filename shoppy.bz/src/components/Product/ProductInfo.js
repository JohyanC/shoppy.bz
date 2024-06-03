import React from 'react'
import "./ProductInfo.css"
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis'

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
    <div className='product' >
      <Link to={'${title}/${id}'}>
        <div className='product__info' >
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

            <LinesEllipsis
              text={title}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
            
        </div>
      
      </Link>
            <button onClick={addTocart}>Add to Cart</button>
    </div>
  )
}

export default Product