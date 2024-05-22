import React from 'react'
import '../style/Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { db } from './firebase'
import { getcartTotal } from './reducer'
import { collection, setDoc, Timestamp } from 'firebase/firestore'

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();
    const navigate = useNavigate();
    var currentdate = new Date(); 

    const makePayment = async e => {
        /*var datetime = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();*/
        //Enter payment processor info here


        try {
            const docRef = await setDoc(collection(db, "users"), {
                user: user?.uid                
            })
            await setDoc(collection(db, 'users', 'orders'), {
                pid: 'ENTER PAYMENT ID HERE',
                cart: ({
                    cart:cart,
                    amount: getcartTotal(cart),
                    created: Timestamp.fromDate(new Date())

                })
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        /*db
            .collection('users')
            .doc(user?.id)
            .collection('orders')
            .doc('ENTER PAYMENT ID HERE')
            .set ({
                cart:cart,
                amount: getcartTotal(cart),
                created: Timestamp.fromDate(new Date())
            })*/

        dispatch({
            type: 'EMPTY_CART',
        })        
        navigate('/orders');


    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link className='text-link' to='/checkout'>{cart?.length} items</Link>)
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>15 Prarie Lane</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {cart.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                      />
                    ))}
                </div>
                
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <p>Belize Bank<br/>Atlantic Bank</p>
                    <button onClick={makePayment}>Pay Now</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Payment