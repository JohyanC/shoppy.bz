import React from 'react'
import "./Product.css"
import ProductInfo from './ProductInfo';
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';

function Product({id, title, image, price, rating}) {

    const item = {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      };

    return (
        <div className='product'>
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
    
                
                
                <p>{title}</p>
            </div>
        </div>
    )    
}

export default Product