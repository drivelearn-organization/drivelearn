import React from 'react';
import '../css/PaymentDetails.css';
import ReactDOM from 'react-dom';

function PaymentDetails() {
    return (
        <div className ="emp-card-container">
           <div className="date__picker">
              <div className="date__container">
                <label className=""></label>
                <input type="date" className="date__selecting--box" ></input>
              </div>
              <div className="date__container">
                <label className=""></label>
                <input type="date" className="date__selecting--box" ></input>
              </div>
            </div>
        </div>
       
    )
}

export default PaymentDetails;
