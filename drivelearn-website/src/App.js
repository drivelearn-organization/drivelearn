
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './adminComponents/Navbar';
import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './adminComponents/pages/Home';
import AboutUs from './adminComponents/pages/AboutUs';
import ContactUs from './adminComponents/pages/ContactUs';
import PaymentDetails from './adminComponents/pages/PaymentDetails';
import ManageEmployees from './adminComponents/pages/ManageEmployees';
import RequestEmplyee from './adminComponents/pages/RequestEmplyee';
import UserDetailsForm from './adminComponents/pages/UserDetailsForm';
import ProfileSetting from './adminComponents/pages/ProfileSetting';


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
        <div className="logout"><i class="fas fa-bell"></i></div>
        </header> 
   
      
        {/* {showNav && <Navbar/>} */}

        <Navbar show = {showNav}/>
        <div className={showNav ? 'newmain' : 'main'}>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/AboutUs" exact={true} component={AboutUs}/>
          <Route path="/ContactUs" exact={true} component={ContactUs}/>
          <Route path="/PaymentDetails" exact={true} component={PaymentDetails}/>
          <Route path="/ManageEmployees" exact={true} component={ManageEmployees}/>
          <Route path="/ManageRequest" exact={true} component={RequestEmplyee}/>
          <Route path="/View" exact={true} component={UserDetailsForm}/>
          <Route path="/Settings" exact={true} component={ProfileSetting}/>
        </div>
      
    </Router>
    </>
    
  );
  
}

export default App;
