import { useEffect, useState, React } from 'react'
import "./ProductInfo.css"
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
//import LinesEllipsis from 'react-lines-ellipsis'
import { db } from '../firebase';
import { doc, getDoc, collection, where, query, getDocs } from "firebase/firestore";



function ProductInfo(item) {
  //console.log(item.id)
  let [{product}, setProduct] = useStateValue([]);

  const document = async () => {
    const docRef = doc(db, 'inventory', item.id);
    
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists) {
      console.log("Document data:", docSnap.data());
      
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    return docSnap.data();
  }

  const document2 = async () => {
    

    const q = query(collection(db, 'inventory'), where('price', '==', true));
      const newRef = await getDocs(q)

       
    if (newRef.exists) {
      //console.log("Document data:", docSnap.data());
      newRef.forEach((doc) => {
        console.log(doc.id, '=>', doc.data)
      })
      
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

      console.log(newRef.data)

  }

  const getItemRef = async () => {
    const docRef = doc(db, 'inventory', item.id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists) {
      console.log("Document data:", docSnap.data());
      
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    return docSnap.data();
  }

  useEffect(() => {
    //getItemRef();
    async function getItem() {
      const docRef = doc(db, 'inventory', item.id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists) {
        console.log("Document data:", docSnap.data());
        product = [{
          key: docSnap.id,
          id: docSnap.id,
          title: docSnap.get('title'),
          price: docSnap.get('price'),
          rating: docSnap.get('rating')
        }]
        
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getItem();
  })
  
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
            src={getItemRef()}
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