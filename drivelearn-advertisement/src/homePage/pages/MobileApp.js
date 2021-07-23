import React from 'react';
import '../../App.css';
import './../Mobile-app.css';
import Navbar from '../Navbar';

function MobileApp() {
  return (
    <>
    <Navbar />
    <div className="container">
		  <div className="contact-box">
			  <div className="left">
			    <img src='images/phone.jpg' alt="Logo" width='100%' height='100%'/>
          
			  </div>
			<div className="right">
				<h1><big>Welcome to DriveLEARN!</big></h1>
        <p>
        Register Now To Take Driver Education Right From Your Own Home.
        </p>
        <br/>
        <h4>Start Driving</h4>
        <br/><br/>
        <button className="install-app"><i class="fab fa-google-play"></i>&nbsp;&nbsp; Get it on Google play</button>
        <br/><br/>
        <button className="install-app"><i class="fab fa-apple"></i>&nbsp;&nbsp;Download on the Apple store</button>
		  </div>
      </div>
    </div>
    </>
  );

}

export default MobileApp;
