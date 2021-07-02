import React from 'react';
import '../../App.css';
import './../Company.css';
import Navbar from './../Navbar';

function Company() {
  return (
    <>
    <Navbar />
    <div className="container1">
		  <div className="contact-box1">
			  <div className="left">
			    <img src='images/petlock.png' alt="Logo" width='100%' height='100%'/>
			  </div>
			<div className="right1">
				<h6><big>Warning!!!</big></h6>
        <h4>
        This page is only for company access. Unauthorized people are not allowed to access the page.
        </h4>
        <br/><br/>
        <a className="warning" href="./login">Wish to continue</a>
		  </div>
      </div>
    </div>
    </>
  );

}

export default Company;