import react from "react";
import './App.css';
import Header from './Header';
import Footer from "./Footer";
import Home from './Home';
import Checkout from "./Checkout";
import Login from './Login';
import NoMatch from './404';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"

function App() {
  return (
    // BEM
    <Router future={{v7_startTransition:true}}>
      <div className="app">
        <Routes element={<><Header /><Footer /></>}>          
          <Route path="/" element={<Home/>}>
            <Route index element={<Home/>}/>  
            <Route path="*" element={<NoMatch />}/>
            <Route path="checkout" element={Checkout}/>
            <Route path="login" element={Login}/>    

          </Route>            
          
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