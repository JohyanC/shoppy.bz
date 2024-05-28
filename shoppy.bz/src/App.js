import react, { useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './components/Home';
import Checkout from "./components/Checkout";
import Login from './components/Login';
import NoMatch from './components/404';
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once with this component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>>>>", authUser);

      if (authUser) {
        //The user is logged in, or logs in
        dispatch({
          type:'SET_USER',
          user:authUser
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
          </Route>
          <Route>
          </Route>
          <Route path="login" element={<Login/>}/> 
          <Route path="*" element={<NoMatch />}/> 
          <Route path='/facebook' />
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