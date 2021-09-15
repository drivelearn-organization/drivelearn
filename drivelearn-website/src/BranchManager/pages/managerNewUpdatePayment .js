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
        console.log(d);
      })

  }

  //console.log(props.data);
  //console.log(getdrop);



  return (
    <div style={{ height: "80vh", width: "100%",overflow: "auto" }}>


      <div className="main__container">
        <div className="main__title">

        </div>
        <br /><br />
        <div className="table_responsive">


          <div>
            <table>
              <thead>
              <tr>
                  <th>Student Name :</th>
                  <th style={{ background: "white", color: "black" }}>{props.data.name}</th>
                </tr>

                <tr>
                  <th>National ID : </th>
                  <th style={{ background: "white", color: "black" }}>{props.data.nic}</th>
                </tr>
                
               
                <tr>
                  <th>Student ID :</th>
                  <th style={{ background: "white", color: "black" }}>{props.data.id}</th>
                </tr>
               



              </thead>
            </table>


          </div>


        </div>



        <div className="table_responsive" style={{ marginTop: "1%", padding: "1%" }}>

          <table>
            <thead>
              <tr>
                <th>Payment Id</th>
                <th>Course Amount</th>
                <th>Paid Amount</th>
                <th>Rest Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.data.paymentId}</td>
                <td>{props.data.amount}</td>
                <td>{parseInt(props.data.amount) - parseInt(props.data.rest)}</td>
                <td>{props.data.rest}</td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className="table_responsive" style={{ marginTop: "1%", padding: "1%" }}>
          <table>
            <thead>
              <tr>
                <th > Amount : </th>
                <th style={{ background: "white", color: "black" }}><input type="text" placeholder="Amount" onChange={(e) =>
                  setdrop({
                    paymentId: props.data.paymentId,
                    amount: e.target.value,
                    userId: props.data.id,
                  })

                } /></th>

              </tr>
            </thead>
          </table>


        </div>

        <div className="table_responsive" style={{ marginTop: "1%", padding: "1%" }}>

          <button className="update-btn" onClick={addpayment}>Add</button>
          <button className="reset-btn" onClick={props.toggleModal}>Close</button>
        </div>

      </div>


    </div>
  );

}

export default ManagerNewPayment;