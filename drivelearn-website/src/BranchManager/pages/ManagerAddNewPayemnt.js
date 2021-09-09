import React, { useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import { width } from 'dom-helpers';


const ManagerAddNewPayment = (props) => {


  const [a, b] = useState("");

  console.log(props.data);
  //console.log(getDrop)



  return (
    <div className="container" style={{ height: "80vh", width: "100%" }}>

      <main>
        <div className="main__container">
          <div className="main__title">

          </div>
          <br /><br />
          <div className="table_responsive">


            <div>
              <p>Name : {props.data.name}</p>
              <p>National ID : {props.data.nid}</p>
              <p>Address : {props.data.address}</p>

            </div>

            <br />

          </div>
          <div className="table_responsive" style={{ marginTop: "1%", padding: "1%" }}>
            <div className="table_responsive" style={{ width: "98%" }}>
              <div style={{ borderBottom: "1px solid black" }}>
                <p>Light Vehicle</p>
              </div>
              <table>

                <tr >
                  <td style={{ padding: "10px" }}>A1</td>
                  <td style={{ padding: "10px" }}>Car</td>
                  <td style={{ padding: "10px" }}>Auto/Maual</td>
                  <td style={{ padding: "10px" }}>
                    <select name="cars" id="cars">
                      <option value="1">1h</option>
                      <option value="2">2h</option>
                      <option value="3">3h</option>
                      <option value="4">4h</option>
                    </select></td>
                  <td>Price</td>
                </tr>





                <tr >
                  <td style={{ padding: "10px" }}>B</td>
                  <td style={{ padding: "10px" }}>M</td>
                  <td style={{ padding: "10px" }}>Motocycle</td>
                  <td style={{ padding: "10px" }}>
                    <select name="cars" id="cars">
                      <option value="1">1h</option>
                      <option value="2">2h</option>
                      <option value="3">3h</option>
                      <option value="4">4h</option>
                    </select>
                  </td>
                  <td>Price</td>
                </tr>

                <tr >
                  <td style={{ padding: "10px" }}>G1</td>
                  <td style={{ padding: "10px" }}>T</td>
                  <td style={{ padding: "10px" }}>TreeWheel</td>
                  <td style={{ padding: "10px" }}>
                    <select onChange={e => {
                      // setDrop({car: e.target.value});
                    }}>
                      <option value="1">1h</option>
                      <option value="2">2h</option>
                      <option value="3">3h</option>
                      <option value="4">4h</option>
                    </select>

                  </td>
                  <td>Price</td>
                </tr>

                <tr >
                  <td style={{ padding: "10px" }}>Exam Fee</td>
                  <td style={{ padding: "10px" }}></td>
                  <td style={{ padding: "10px" }}></td>
                  <td style={{ padding: "10px" }}>

                  </td>
                  <td>1000</td>
                </tr>

                <tr >
                  <td style={{ padding: "10px" }}>Total Fee</td>
                  <td style={{ padding: "10px" }}></td>
                  <td style={{ padding: "10px" }}></td>
                  <td style={{ padding: "10px" }}>

                  </td>
                  <td>20 000</td>
                </tr>

              </table>


            </div>

          

          </div>
        </div>







      </main>



    </div>
  );

}

export default ManagerAddNewPayment;