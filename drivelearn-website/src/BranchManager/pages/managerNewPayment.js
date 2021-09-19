import React, { useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import { width } from 'dom-helpers';
import axios from 'axios';
import { Base } from './../../base';


const ManagerNewPayment = (props) => {

  const [getdrop, setdrop] = useState({
    car: 0,
    bike: 0,
    threewheel: 0,
    carAuto: 0,
    exam: 0,
    heavyV: 0
  });



  const [show, setshow] = useState(true);



  /* const handleChange = (event) => {
     setdrop({
         ...value,
         [event.target.name]: event.target.value,
     });
 } */

  const setdiv = (state) => {
    if (state == 0) {

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
      .post(Base + "/payment/addinitialpayment", data)
      .then(d => {
        console.log(props.data.id);
      })


    setCource(parseInt(getdrop.threewheel), parseInt(getdrop.bike), 0, parseInt(getdrop.car), parseInt(getdrop.heavyV), 0);

    props.toggleModal();
    //window.location.reload();

  }


  //console.log(props.data.name);

  const setCource = (wheeler, bikes, carAuto, carMan, heavyV, exam) => {

    let traPos = 1;

    if (wheeler === 0 && bikes === 0 && carAuto === 0 && carMan === 0 && heavyV === 0) {
      traPos = 1;
    } else if (wheeler === 0 && bikes === 0 && carAuto === 0 && carMan === 0) {
      traPos = 3;
    } else if (wheeler === 0 && bikes === 0 && carAuto === 0 && heavyV === 0) {
      traPos = 5;
    } else if (wheeler === 0 && carAuto === 0 && carMan === 0 && heavyV === 0) {
      traPos = 7;
    } else if (bikes === 0 && carAuto === 0 && carMan === 0 && heavyV === 0) {
      traPos = 6;
    } else if (bikes === 0 && wheeler === 0 && carMan === 0 && heavyV === 0) {
      traPos = 4;
    } else {
      traPos = 2;
    }

    let data = {
      username: props.data.username,
      transportState: traPos,
      exam: exam,
      bike: bikes,
      carManual: carMan,
      carAuto: carAuto,
      wheeler: wheeler,
      heavy: heavyV
    }


    console.log(data);

    axios
      .post(Base + "/course/addcource", data)
      .then(d => {
        // console.log(props.data.id);
      })


    console.log("for testing");
  }


  console.log(props.data);
  console.log(getdrop);
  console.log("testing", props.enroll);



  return (
    <div style={{ height: "80vh", width: "100%" }}>


      <div className="main__container" >
        <div className="main__title">

        </div>
        <br /><br />
        <div className="table_responsive">

          <table>
            <thead>

              <tr>
                <th >Name : </th>
                <th style={{ background: "white", color: "black" }}>{props.data.name}</th>
              </tr>
              <tr>
                <th>National ID : </th>
                <th style={{ background: "white", color: "black" }}> {props.data.nid}</th>
              </tr>
              {/* <tr>
                <th>Address : </th>
                <th style={{ background: "white", color: "black" }}>{props.data.address}</th>
              </tr> */}





            </thead>
          </table>


        </div>
        <div style={{ height: "38vh", overflow: "auto", width: "102%" }}>


          <div className="table_responsive" style={{ marginTop: "1%" }}>
            <button className="update-btn" style={{ width: "50%", color: "white" }} onClick={() => setdiv(1)}>Light weight</button>
            <button className="update-btn" style={{ width: "50%", color: "white" }} onClick={() => setdiv(0)}>Heavy weight</button>
          </div>
          <div className="table_responsive">
            <div style={{ background: "red", marginTop: "5px", display: props.enrol ? "block" : "none" }}>
              <p style={{ color: "white", padding: "10px", border: "5px solid white" }}>This student has already selected a course .</p>
            </div>
          </div>
          <div className="table_responsive" style={{ marginTop: "1%", padding: "1%", background: "white" }}>
            {
              show ?
                <div className="table_responsive" style={{ width: "98%" }}>
                  <div style={{ borderBottom: "1px solid black" }}>
                    <p>Light Vehicle</p>
                  </div>
                  <table>

                    <tr >
                      <td style={{ padding: "10px" }}>A1</td>
                      <td style={{ padding: "10px" }}><i class="fas fa-car"></i></td>
                      <td style={{ padding: "10px" }}>Auto/Maual</td>
                      <td style={{ padding: "10px" }}>
                        <select onChange={e => {
                          setdrop({
                            car: e.target.value,
                            bike: getdrop.bike,
                            threewheel: getdrop.threewheel,
                            carAuto: 0,
                            exam: 0,
                            heavyV: 0
                          });
                        }}>
                          <option value="0">0h</option>
                          <option value="1">1h</option>
                          <option value="2">2h</option>
                          <option value="3">3h</option>
                          <option value="4">4h</option>
                        </select></td>
                      <td>RS {getdrop.car * 1000}</td>
                    </tr>





                    <tr >
                      <td style={{ padding: "10px" }}>B</td>
                      <td style={{ padding: "10px" }}><i class="fas fa-motorcycle"></i></td>
                      <td style={{ padding: "10px" }}>Motocycle</td>
                      <td style={{ padding: "10px" }}>
                        <select onChange={e => {
                          setdrop({
                            car: getdrop.car,
                            bike: e.target.value,
                            threewheel: getdrop.threewheel,
                            carAuto: 0,
                            exam: 0,
                            heavyV: 0

                          });
                        }}>
                          <option value="0">0h</option>
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
                      <td style={{ padding: "10px" }}><i class="fa fa-subway" aria-hidden="true"></i>
                      </td>
                      <td style={{ padding: "10px" }}>ThreeWheel</td>
                      <td style={{ padding: "10px" }}>
                        <select onChange={e => {
                          setdrop({
                            car: getdrop.car,
                            bike: getdrop.bike,
                            threewheel: e.target.value,
                            carAuto: 0,
                            exam: 0,
                            heavyV: 0
                          });
                        }}>
                          <option value="0">0h</option>
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
                      <td style={{ padding: "10px" }}>H</td>
                      <td style={{ padding: "10px" }}><i class="fas fa-truck"></i></td>
                      <td style={{ padding: "10px" }}>Lorry</td>
                      <td style={{ padding: "10px" }}>
                        <select onChange={e => {
                          setdrop({
                            car: getdrop.car,
                            bike: getdrop.bike,
                            threewheel: getdrop.threewheel,
                            carAuto: 0,
                            exam: 0,
                            heavyV: e.target.value
                          });
                        }}>
                          <option value="0">0h</option>
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

      </div>
      <div className="table_responsive">
        <button className="update-btn" disabled={props.enrol} style={!props.enrol ? { display: "inline" } : { display: "none" }} onClick={addpayment}>Add</button>
        <button className="reset-btn" onClick={props.toggleModal}>Close</button>
      </div>


    </div>
  );

}

export default ManagerNewPayment;