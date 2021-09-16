import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import {Base} from './../../base';


const ManagerAddStudents = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getVehicleType, setVehicleType] = useState([]);
  const [getEmployeeType, setEmployeeType] = useState([]);
  const [getEmpName, setEmpName] = useState();

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    getVehicleTypeState();
    getEmployeeTypeState();

  }, []);


  const getVehicleTypeState = () => {
    axios
      .get(Base+"/vehicletype/showtype")
      .then(data => {
        setVehicleType(data.data);


      })
  }

  const getEmployeeTypeState = () => {
    let id = sessionStorage.getItem('branchId');
    console.log(id);
    axios
      .get(Base+"/vehicletype/getemployeetype/" + id)
      .then(data => {
        setEmployeeType(data.data);


      })
  }

  


  const submit = e => {



    for (let i = 0; i < getEmployeeType.length; i++) {
      if (getEmployeeType[i].empid == e.target[0].value) {
        console.log(getEmployeeType[i].username);
        setEmpName(getEmployeeType[i].username);

      }

    }

    let trainerId = e.target[0].value;
    let date = e.target[1].value;
    let startTime = e.target[2].value;
    let status = 1;
    let branchName = sessionStorage.getItem('branchName');
    let numOfStudent = e.target[3].value;
    let vehicleType = e.target[4].value;
    let managerId = sessionStorage.getItem('empId');
    let trainerUsername = getEmpName;


    let data = {
      trainerId,
      date,
      startTime,
      numOfStudent,
      branchName,
      vehicleType,
      status,
      managerId,
      trainerUsername


    };
    console.log(data);


    postSession(data);

  }

  const postSession = (data) => {
    axios
      .post(Base+"/session/addSession", data)
      .then(d => {
        console.log(d);
      })
  }

  return (

    <div className="main__container">
      <div className="main__title">
        <div className="main__greeting">
          <h1>Update Session</h1>
          <p>  {sessionStorage.getItem('branchName')} Branch</p>
        </div>
      </div>
      <center>
        <div className="charts__rightt" style={{width: "100%",height: "70vh"}}>
        

        
            <div className="card-p">
              <p className="text">Instructor Name</p>
              <select>
                <option value={props.updateDetails.empid}>{props.updateDetails.trainerName}</option>
                {
                  getEmployeeType.map(d => (

                    <option key={d.empid} value={d.empid}> {d.fullName} </option>

                  ))}




              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

              <div className="card-p">
                <p className="text">Date</p>
                <input className="data" type="date" name="first_name" id="firstname" value={props.updateDetails.date} onChange={props.handleChange} onChange={(e)=>{
                    props.setUpdateDetails({
                  sessionId: props.updateDetails.sessionId,
                  trainerName: props.updateDetails.trainerName,
                  date: e.target.value,
                  startTime: props.updateDetails.startTime,
                  numOfStudent: props.updateDetails.numOfStudent,
                  empid: sessionStorage.getItem('empId'),
                  vehicleType: props.updateDetails.vehicleType
                });
                }
              
              } placeholder="Date" required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
              </div>

              <div className="card-p">
                <p className="text">Time</p>
                <input className="data" type="text" name="first_name" id="firstname" value={props.updateDetails.startTime} onChange={(e)=>{
                    props.setUpdateDetails({
                  sessionId: props.updateDetails.sessionId,
                  trainerName: props.updateDetails.trainerName,
                  date: props.updateDetails.date,
                  startTime: e.target.value,
                  numOfStudent: props.updateDetails.numOfStudent,
                  empid: sessionStorage.getItem('empId'),
                  vehicleType: props.updateDetails.vehicleType
                });
                }
              
              } placeholder="Time" required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
              </div>
            </div>
            <div className="card-p">
              <p className="text">Number Of Student</p>
              <input className="data" type="text" name="first_name" id="firstname" value={props.updateDetails.numOfStudent} onChange={(e)=>{
                props.setUpdateDetails({
                  sessionId: props.updateDetails.sessionId,
                  trainerName: props.updateDetails.trainerName,
                  date: props.updateDetails.date,
                  startTime: props.updateDetails.startTime,
                  numOfStudent: e.target.value,
                  empid: sessionStorage.getItem('empId'),
                  vehicleType: props.updateDetails.vehicleType
                });
              }
                
              } placeholder="Number Of Student" required />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>


            <div className="card-p">
              <p className="text">Vehical type</p>

              <select>
                <option value={props.updateDetails.vehicleType} onChange={(e)=>{
                props.setUpdateDetails({
                  sessionId: props.updateDetails.sessionId,
                  trainerName: props.updateDetails.trainerName,
                  date: props.updateDetails.date,
                  startTime: props.updateDetails.startTime,
                  numOfStudent: props.updateDetails.numOfStudent,
                  empid: sessionStorage.getItem('empId'),
                  vehicleType:e.target.value
                });
              }
                
              }> {props.updateDetails.vehicleType} </option>
                {
                  getVehicleType.map(d => (

                    <option key={d.typeId} value={d.typeName} onChange={(e)=>{
                      props.setUpdateDetails({
                        sessionId: props.updateDetails.sessionId,
                        trainerName: props.updateDetails.trainerName,
                        date: props.updateDetails.date,
                        startTime: props.updateDetails.startTime,
                        numOfStudent: props.updateDetails.numOfStudent,
                        empid: sessionStorage.getItem('empId'),
                        vehicleType:e.target.value
                      });
                    }
                      
                    }> {d.typeName} </option>

                  ))}




              </select>

            </div>

            <center style={{padding: "10px"}}>
              <input type="submit" value="Update" onClick={()=>props.putSession()} className="update-btn" />
              &nbsp;&nbsp;&nbsp;
              <input type="Reset" value="Cancle" className="reset1-btn" onClick={props.toggleupdate}/>
              
            </center>
   
        </div>
      </center>
    </div>

  );

}

export default ManagerAddStudents;