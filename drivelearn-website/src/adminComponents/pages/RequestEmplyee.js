import React from 'react';
import '../css/RequestEmployee.css';

function RequestEmplyee() {
    return (
        <div className ="emp-card-container">
            <div className="date__container">
                <label className="Select__data-lable">Pick date: </label>
                <input type="date" className="date__selecting--box" ></input>
            </div>
            <div className ="view-payment-datails">
                <div className="view-payment-datails__name">Name</div>
                <div className="view-payment-datails__email">Email</div>
                <div className="view-payment-datails__contact">Contact No.</div>
                <div className="view-payment-datails__position">Position</div>
              
            </div>
            <div className ="fullCard">
                <div>Hasani</div>  
                <div className="fullCard__email">Hasani1997nim@gmail.com</div>
                <div>0712444718</div>
                <div>Branch manager</div>
                <a href="" className="btn btn-box-active margin-r-s btn__accept">Accept</a>
                <a href="" className="btn btn-box-active margin-r-s btn__reject">Reject</a>
               
            </div>
            <div className ="fullCard">
                <div>Hasani</div>  
                <div className="fullCard__email">Hasani1997nim@gmail.com</div>
                <div>0712444718</div>
                <div>Instructor</div>
                <a href="" className="btn btn-box-active margin-r-s btn__accept">Accept</a>
                <a href="" className="btn btn-box-active margin-r-s btn__reject">Reject</a>
               
            </div>
            
        </div>
    )
}

export default RequestEmplyee;
