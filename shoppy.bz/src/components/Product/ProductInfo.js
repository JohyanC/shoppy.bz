import React, { useEffect } from 'react'
import "./ProductInfo.css"
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
//import LinesEllipsis from 'react-lines-ellipsis'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { useState } from 'react';



function Product(id) {
  const [state, dispatch] = useStateValue();
  
  const getItemInfo =  async () => {
    const docRef = doc(db, 'inventory', id.id);
    const docSnap =  await getDoc(docRef);
  
    if (docSnap.exists) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    return docSnap;
  
  }

  useEffect(() => {
    getItemInfo();
  });
  
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
            //src={getItemInfo.img}
            alt='product'/>
            
            <p className='product__price'>
                <small>$</small>
                <strong>{getItemInfo.price}</strong>
            </p>

            <div className='product__rating'>
                {Array(getItemInfo.rating).fill().map((_, i) => (<p>⭐</p>))}
            </div>

            {/*<LinesEllipsis
              //text={getItemInfo.title}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'
  />*/}
            
        </div>
      
      </Link>
            {/*<button onClick={addTocart}>Add to Cart</button>*/}
  </div>
  )
}

export default Product