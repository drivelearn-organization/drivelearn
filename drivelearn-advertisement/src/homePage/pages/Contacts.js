import React from 'react';
import '../../App.css';
import './../Contact.css';
import Navbar from './../Navbar';

function Contacts() {
  return (
	<>
    <Navbar/>
    <div className="container">
		 <div className="contact-box">
			 <div className="left">
			 <img src='images/Contact1.jpeg' alt="Logo" width='100%' height='100%'/> 
			 </div>
			 <div className="right">
				<h2>Contact Us</h2>
				<input type="text" class="field" placeholder="Your Name" />
				<input type="text" class="field" placeholder="Your Email" />
				<input type="text" class="field" placeholder="Phone" />
				<textarea placeholder="Message" class="field"></textarea>
				<button className="button1">Send</button>
		    </div>
      </div>
    </div>
	</>
  );

}

export default Contacts;
