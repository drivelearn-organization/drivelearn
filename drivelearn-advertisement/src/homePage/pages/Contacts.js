import React from 'react';
import '../../App.css';
import './../Contact.css';
import Navbar from './../Navbar';

function Contacts() {
  return (
	<>
    <Navbar/>
    <div className="container">
	     <form>
		 <div className="contact-box">
			 <div className="left">
			 <img src='images/Contact1.jpg' alt="Logo" width='100%' height='100%'/> 
			 </div>
			 <div className="right">
				<h2>Contact Us</h2>
				<input type="text" className="field" placeholder="Your Name" required />
				<input type="text" className="field" placeholder="Your Email" required/>
				<input type="text" className="field" placeholder="Phone" />
				<textarea placeholder="Message" className="field"></textarea>
				<button className="button1">Send</button>
		    </div>
      </div>
	  </form>
    </div>
	</>
  );

}

export default Contacts;
