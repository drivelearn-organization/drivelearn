
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './adminComponents/Navbar';
import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './adminComponents/pages/Home';
import AboutUs from './adminComponents/pages/AboutUs';
import ContactUs from './adminComponents/pages/ContactUs';


// import Home from './homePage/pages/Home';
// import About from './homePage/pages/About';
// import Contacts from './homePage/pages/Contacts';
// import SignUp from './homePage/pages/SignUp';

function App() {
  const [showNav, setShownav] = useState(false);
  
  const handlesetShownav = () => {
    setShownav(!showNav);
  
    
  }
  

 
  return (
    <>
    <Router>
   
    
    
    
        <header >
        
        <i onClick={()=>setShownav(!showNav)} className="fas fa-bars" ></i>
        <img className="mylogo" src={'images/LogoBoxWhite.png'} width="60" height="60"/>
        <p className="logout">huwdhuih</p>
        </header> 
   
      
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
