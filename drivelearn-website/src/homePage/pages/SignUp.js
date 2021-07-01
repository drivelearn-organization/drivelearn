import React from 'react';
import '../../App.css';
import './../Contact.css';

function Contacts() {
  return (
    <div className="container">
		 <div className="contact-box">
			 <div className="left">
			 <img src='images/phone.jpg' alt="Logo" width='100%' height='100%'/> 
			 </div>
			 <div className="right">
				

				<button className="button1">Send</button>
		    </div>
      </div>
    </div>
  );

}

export default Contacts;
