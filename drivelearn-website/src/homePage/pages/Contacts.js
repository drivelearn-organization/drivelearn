import React from 'react';
import '../../App.css';
import './../Contact.css';

function Contacts() {
  return (
    <div className="container">
		 <div className="contact-box">
			 <div className="left"></div>
			 <div className="right">
				<h2>Contact Us</h2>
				<input type="text" class="field" placeholder="Your Name" />
				<input type="text" class="field" placeholder="Your Email" />
				<input type="text" class="field" placeholder="Phone" />
				<textarea placeholder="Message" class="field"></textarea>
				<button className="btn">Send</button>
		    </div>
      </div>
    </div>
  );

}

export default Contacts;
