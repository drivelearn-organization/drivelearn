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
                    <Link to="/AbutUs">About us</Link>
               </li>
               <li>
                    <Link to="/ContactUs">Contact us</Link>
               </li>
               <li>
                    <Link to="/PaymentDetails">Payment Details</Link>
               </li>
               <li>
                    <Link to="/ManageEmployees">Manage Employees</Link>
               </li>
               <li>
                    <Link to="/ManageRequest">Manage Request</Link>
               </li>
               <li>
                    <Link to="/View">view</Link>
               </li>
              
           </ul> 
        </div>
    )
}

export default Navbar