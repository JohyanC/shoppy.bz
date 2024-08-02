import { useEffect, useState, React } from 'react'
import "./ProductInfo.css"
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
//import LinesEllipsis from 'react-lines-ellipsis'



function ProductInfo(item) {
  //console.log(item.id)
  let [{product}, setProduct] = useStateValue([]);

 
  
  {/*const querySnapshot = await getDocs(collection(db, "inventory"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

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
  };*/}


  return ( 
    <div className='product' >
      <Link to={'${title}/${id}'}>
        <div className='product__info' >
            <img
            //src={}
            alt='product'/>
            
            <p className='product__price'>
                <small>$</small>
                <strong>{product.price}</strong>
            </p>

            <div className='product__rating'>
                {Array(product.rating).fill().map((_, i) => (<p>⭐</p>))}
                <p>{product.title}</p>
            </div>

            {/*<LinesEllipsis
              //text={getItemInfo.title}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'
  /       >*/}
            {/*<button onClick={addTocart}>Add to Cart</button>
        </div>*/} 
            
        </div>
      
      </Link>
    </div>
  )
}

export default ProductInfo