import react from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        {<Header />}
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/checkout" Component={Checkout}/>
          
        </Routes>        
      </div>
    </Router>
    
  );
}

export default App;
