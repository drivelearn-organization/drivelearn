import React, { useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import { width } from 'dom-helpers';
import axios from 'axios';


const ManagerNewPayment = (props) => {

  const [getdrop, setdrop] = useState({
    paymentId: "",
    amount: "",
    userId: "",
  });



  const [show, setshow] = useState(true);




  /* const handleChange = (event) => {
     setdrop({
         ...value,
         [event.target.name]: event.target.value,
     });
 } */

  

  const addpayment = () => {


   
    axios
      .post("http://localhost:8080/payment/addinstalmentpayment", getdrop)
      .then(d => {
        console.log(props.data.id);
      })

  }

  console.log(props.data);
  console.log(getdrop);



  return (
    <div className="container" style={{ height: "80vh", width: "100%" }}>

      <main>
        <div className="main__container">
          <div className="main__title">

          </div>
          <br /><br />
          <div className="table_responsive">


            <div>
              <p>Payement ID : {props.data.paymentId}</p>
              <p>Student ID : {props.data.id}</p>
              <p>Student Name : {props.data.name}</p>
              <p>National ID : {props.data.nic}</p>

            </div>

            <br />



          </div>



          <div className="table_responsive" style={{ marginTop: "1%", padding: "1%" }}>

            <p>Course Amount : {props.data.amount}</p>
            <p>Paid Amount : {parseInt(props.data.amount) - parseInt(props.data.rest)}</p>
            <p>Rest Amount : {props.data.rest}</p>
          </div>

          <div className="table_responsive" style={{ marginTop: "1%", padding: "1%" }}>
            <p>Pay amount</p>
            <input type="text" placeholder="Amount" onChange={(e) =>
              setdrop({
                paymentId: props.data.paymentId,
                amount: e.target.value,
                userId: props.data.id,
              })

            } />

          </div>



        </div>



        <div>
          <button className="update-btn" onClick={addpayment}>Add</button>
          <button className="reset-btn" onClick={props.toggleModal}>Close</button>
        </div>



      </main>



    </div>
  );

}

export default ManagerNewPayment;