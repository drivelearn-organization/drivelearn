
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
import Login from './Registration-Login/page/Login';
import Registration from './Registration-Login/page/Registration';


// import Home from './homePage/pages/Home';
// import About from './homePage/pages/About';
// import Contacts from './homePage/pages/Contacts';
// import SignUp from './homePage/pages/SignUp';

function App() {
  const [showNav, setShownav] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  
  const handlesetShownav = () => {
    setShownav(!showNav);
  
    
  }
  const handleetShowDropDown = () => {
    setShowDropDown(!showDropDown);
      
  }

 
  return (
    <>
    <Router>
   
    
    
    
        <header >
        
        <i onClick={()=>setShownav(!showNav)} className="fas fa-bars" ></i>
        <img className="mylogo" src={'images/LogoBoxWhite.png'} width="60" height="60"/>
        <div className="logoutbox">
        <i class="fas fa-bell"></i>
        <div className="logout" href="">
        
        <div className="dropdown">
          S.H.Nimeshika
        </div>
        <i class="fas fa-user-circle"></i>
        <i onClick={()=>setShowDropDown(!showDropDown)} class="fas fa-caret-down"></i>
        </div>
        
        </div>
        
        </header> 
        <div className='header-user__dropdown'>
        <div className={showDropDown ? 'header-user__dropdown-box':'header-user__dropdown-box-hide'}>
        {/* <div className="header-user__dropdown-box"> */}
        <ul>
            <li><i class="fas fa-tachometer-alt"></i> Dashboard</li>
            <li><i class="fas fa-sign-out-alt"></i> logout</li>
            
            
          </ul>
        </div>
          
        </div>
        
      
        {/* {showNav && <Navbar/>} */}

        <Navbar show = {showNav}/>
        <div className={showNav ? 'newmain' : 'main'}>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Login" exact={true} component={Login}/>
          <Route path="/Sign up" exact={true} component={Registration}/>
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
