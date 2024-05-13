import react, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Footer from "./Footer";
import Home from './Home';
import Checkout from "./Checkout";
import Login from './Login';
import NoMatch from './404';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

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
          </Route>
          <Route>
          </Route>
          <Route path="login" element={<Login/>}/> 
          <Route path="*" element={<NoMatch />}/> 
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