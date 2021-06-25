import React from 'react';
import '../css/PaymentDetails.css';
import ReactDOM from 'react-dom';

function PaymentDetails() {
    return (
        <div className ="emp-card-container">
           <div className="date__picker">
              <div className="date__container">
                <label className="Select__data-lable">From: </label>
                <input type="date" className="date__selecting--box" ></input>
              </div>
              <div className="date__container">
                <label className="Select__data-lable">To: </label>
                <input type="date" className="date__selecting--box" ></input>
              </div>
            </div>
            <div className ="view-payment-datails">
                <div>Stu id</div>
                <div>Name</div>
                <div className="payed__branch">Branch</div>
                <div className="payed__amount">Ammount</div>
               
            </div>

            <div className ="fullCard">
            <div>#1</div>  
            <div>Hasani</div>
            <div>Matara</div>
            <div>Rs.50 000</div>
            
         
        </div>
        </div>
       
    )
}

export default PaymentDetails;
