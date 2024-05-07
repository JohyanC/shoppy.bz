import React from 'react'

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>The lean startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>

            <div className='product__rating'>
                <p>⭐</p>
                <p>⭐</p>
            </div>

            <img
            src='https://th.bing.com/th/id/OIP.rK1tzrl1v-_ivLBlGNlxJAHaJm?rs=1&pid=ImgDetMain'></img>
            
            <button>Add to Cart</button>
            
        </div>
    </div>
  )
}

export default Product