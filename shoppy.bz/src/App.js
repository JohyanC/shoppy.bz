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
    <Router>
      <Routes>
          <Route path="/login" element={Login}/>
      </Routes>
      <Header/> 
      <div className="app">
        <Routes>          
          <Route path="/" element={<Header/><Outlet/><Footer/>}>

          </Route>
          
          
          <Route path="*" element={<NoMatch />} />
          <Route index element={<Home/>}/>
          <Route path="checkout" element={Checkout}/>
          
        </Routes>        
      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;
