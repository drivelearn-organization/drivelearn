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
    car: "0",
    bike: "0",
    threewheel: "0",
  });



  const [show, setshow] = useState(true);



  /* const handleChange = (event) => {
     setdrop({
         ...value,
         [event.target.name]: event.target.value,
     });
 } */

  const setdiv = () => {
    if (show === true) {
      setdrop({
        car: "0",
        bike: "0",
        threewheel: "0"

      });


      setshow(false);
    } else {
      setdrop({
        car: "0",
        bike: "0",
        threewheel: "0"

      });


      setshow(true);
    }
  }

  const addpayment = () => {

    let data = {
      userId: props.data.id,
      amount: (parseInt(getdrop.car) + parseInt(getdrop.bike) + parseInt(getdrop.threewheel)) * 1000 + 11000
    }

    console.log(data);
    axios
      .post("http://localhost:8080/payment/addinitialpayment", data)
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
              <p>Name : {props.data.name}</p>
              <p>National ID : {props.data.nid}</p>
              <p>Address : {props.data.address}</p>

            </div>

            <br />



          </div>

          <div className="table_responsive" style={{ marginTop: "1%" }}>
            <button onClick={() => setdiv()}>Light weight</button>
            <button onClick={() => setdiv()}>High weight</button>
          </div>

          <div className="table_responsive" style={{ marginTop: "1%", padding: "1%" }}>
            {
              show ?
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
                        <select onChange={e => {
                          setdrop({
                            car: e.target.value,
                            bike: getdrop.bike,
                            threewheel: getdrop.threewheel
                          });
                        }}>
                          <option value="1">1h</option>
                          <option value="2">2h</option>
                          <option value="3">3h</option>
                          <option value="4">4h</option>
                        </select></td>
                      <td>RS {getdrop.car * 1000}</td>
                    </tr>





                    <tr >
                      <td style={{ padding: "10px" }}>B</td>
                      <td style={{ padding: "10px" }}>M</td>
                      <td style={{ padding: "10px" }}>Motocycle</td>
                      <td style={{ padding: "10px" }}>
                        <select onChange={e => {
                          setdrop({
                            car: getdrop.car,
                            bike: e.target.value,
                            threewheel: getdrop.threewheel

                          });
                        }}>
                          <option value="1">1h</option>
                          <option value="2">2h</option>
                          <option value="3">3h</option>
                          <option value="4">4h</option>
                        </select>
                      </td>
                      <td>RS {getdrop.bike * 1000}</td>
                    </tr>

                    <tr >
                      <td style={{ padding: "10px" }}>G1</td>
                      <td style={{ padding: "10px" }}>T</td>
                      <td style={{ padding: "10px" }}>ThreeWheel</td>
                      <td style={{ padding: "10px" }}>
                        <select onChange={e => {
                          setdrop({
                            car: getdrop.car,
                            bike: getdrop.bike,
                            threewheel: e.target.value
                          });
                        }}>
                          <option value="1">1h</option>
                          <option value="2">2h</option>
                          <option value="3">3h</option>
                          <option value="4">4h</option>
                        </select>

                      </td>
                      <td>RS {getdrop.threewheel * 1000}</td>
                    </tr>

                    <tr >
                      <td style={{ padding: "10px" }}>Exam Fee</td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}>

                      </td>
                      <td>RS 11000</td>
                    </tr>

                    <tr >
                      <td style={{ padding: "10px" }}>Total Fee</td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}>

                      </td>
                      <td>RS {(parseInt(getdrop.car) + parseInt(getdrop.bike) + parseInt(getdrop.threewheel)) * 1000 + 11000}</td>
                    </tr>

                  </table>




                </div>
                :


                <div className="table_responsive" style={{ width: "98%" }}>
                  <div style={{ borderBottom: "1px solid black" }}>
                    <p>Heavy Vehicle</p>
                  </div>
                  <table>

                    <tr >
                      <td style={{ padding: "10px" }}>G1</td>
                      <td style={{ padding: "10px" }}>Bus</td>
                      <td style={{ padding: "10px" }}>Bus</td>
                      <td style={{ padding: "10px" }}>
                        <select onChange={e => {
                          setdrop({
                            car: e.target.value,
                            bike: getdrop.bike,
                            threewheel: getdrop.threewheel
                          });
                        }}>
                          <option value="1">1h</option>
                          <option value="2">2h</option>
                          <option value="3">3h</option>
                          <option value="4">4h</option>
                        </select></td>
                      <td>RS {getdrop.car * 1000}</td>
                    </tr>


                    <tr >
                      <td style={{ padding: "10px" }}>Exam Fee</td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}>

                      </td>
                      <td>RS 11000</td>
                    </tr>

                    <tr >
                      <td style={{ padding: "10px" }}>Total Fee</td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}></td>
                      <td style={{ padding: "10px" }}>

                      </td>
                      <td>RS {(parseInt(getdrop.car)) * 1000 + 11000}</td>
                    </tr>

                  </table>




                </div>

            }
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