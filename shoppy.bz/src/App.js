import react, { useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Header/Footer";
import Home from './components/Home/Home';
import Checkout from "./components/Checkout/Checkout";
import Login from './components/Login/Login';
import NoMatch from './components/ErrorBoundrary/404';
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import Product from "./components/Product/Product";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [{User},dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once with this component loads...
    onAuthStateChanged(auth, (user) => {

      if (user) {
        //The user is logged in, or logs in
        const uid = user.uid;
        dispatch({
          type:'SET_USER',
          user: {
            username: user.displayName,
            email: user.email
          }
        })
      }
      else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router future={{v7_startTransition:true}}>
      <div className="app">
        <Routes >  
          <Route element={<><Header /><Outlet/><Footer /></>}> 
            <Route index element={<Home/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="/checkout/payment" element={<Payment/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='product' />
            <Route path=':itemName/:itenId' element={<Product/>}/>
          </Route>
          <Route>
          </Route>
          <Route path="login" element={<Login/>}/> 
          <Route path="*" element={<NoMatch/>}/> 
        </Routes> 
      </div>
    </Router>
    
  );
}

export default App;

/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} loader={rootLoader} action={rootAction} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path="contacts/:contactId" element={<Contact />}loader={contactLoader}action={contactAction}/>
        <Route path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
*/