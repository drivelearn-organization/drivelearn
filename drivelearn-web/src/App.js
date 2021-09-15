import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';

function App() {
  const [showNav, setShownav] = useState(false);
  
  const handlesetShownav = () => {
    setShownav(!showNav);
  
    
  }
  

 
  return (
    <>
    <Router>
   
    
    
    
        <header ><i onClick={()=>setShownav(!showNav)} className="fas fa-bars" ></i></header> 
   
      
        {/* {showNav && <Navbar/>} */}

        <Navbar show = {showNav}/>
        <div className={showNav ? 'newmain' : 'main'}>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/AboutUs" exact={true} component={AboutUs}/>
          <Route path="/ContactUs" exact={true} component={ContactUs}/>
        </div>
      
    </Router>
    </>
    
  );
  
}

export default App;
