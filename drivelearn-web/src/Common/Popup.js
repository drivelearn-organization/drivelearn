import React from 'react';
import './../App.css';
import './Popup.css';
import Nav from './../HomePage/Nav';

function Popup() {
    return (
          <div className="popup-background">
          <Nav />
          <div className="login-wrapper">
            <a href="#popup" className="popup">Click here</a>

            <div id="popup">
                <form action="" className="popup-bg" >
                <a href="./popup" className="close">&times;</a> 
                <h2><center>Are you sure want to cantinue?</center></h2>
                <br/><br/><br/>
                <p><center>The next page looks amazing. Hope you want to go there!</center></p>
                <br/><br/>
                <center>
                <input type="submit" value="Cancel" class="popup-cancel-btn" /> 
                <input type="submit" value="Continue" class="popup-continue-btn" /> 
                </center>
                </form>  
            </div>
  </div>  
  </div>
);

}

export default Popup;