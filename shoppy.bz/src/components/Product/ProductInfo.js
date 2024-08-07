import { useEffect, useState, React } from 'react'
import "./ProductInfo.css"
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
//import LinesEllipsis from 'react-lines-ellipsis'
import { db } from '../firebase';
import { doc, getDoc, collection, where, query, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, child, listAll } from "firebase/storage";



function ProductInfo(item) {
  console.log(item.id)
  let [{product}, setProduct] = useStateValue([]);

  const storage = getStorage();
  const fileName = `products/${item.id}/`;
  console.log(fileName);
  
  const productsRef = ref(storage, fileName); 
  listAll(productsRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      console.log(itemRef);
    })
  })

  getDownloadURL(productsRef).then((url) => { 
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
    console.log(url);

  });


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
    getItemRef();
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
      <Link to={`${item.id}`}>
        <div className='product__info' >
            <img
            id='myimg'
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