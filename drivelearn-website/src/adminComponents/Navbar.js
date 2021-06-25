import React, { useState,useEffect } from 'react';
import './css/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar({show}) {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
           <ul className='NanIcon'>
               <li>
                    <Link to="/">Home</Link>
               </li>
               <li>
                    <Link to="/AbutUs">PROFILE</Link>
               </li>
               <li>
                    <Link to="/ContactUs">CONTACT US</Link>
               </li>
               <li>
                    <Link to="/PaymentDetails">PAYMENT DETAILS</Link>
               </li>
               <li>
                    <Link to="/ManageEmployees">MANAGE EMPLOYEE</Link>
               </li>
              
           </ul> 
        </div>
    )
}

export default Navbar
