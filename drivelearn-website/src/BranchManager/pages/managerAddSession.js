import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import {Base} from './../../base';

const ManagerAddStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getVehicleType, setVehicleType] = useState([]);
  const [getEmployeeType,setEmployeeType] = useState([]);
  const [getEmpName,setEmpName]= useState();

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
    let id=sessionStorage.getItem('branchId');
    console.log(id);
    axios
      .get(Base+"/vehicletype/getemployeetype/"+ id)
      .then(data => {
        setEmployeeType(data.data);


      })
  }


  

  const submit = e => {

  

    for (let i = 0; i < getEmployeeType.length; i++) {
      if(getEmployeeType[i].empid == e.target[0].value){
         console.log(getEmployeeType[i].username);
         setEmpName(getEmployeeType[i].username);
         
      }
     
    }

    let trainerId = parseInt(e.target[0].value);
    let date = e.target[1].value;
    let startTime = e.target[2].value;
    let status = 1;
    let branchName = sessionStorage.getItem('branchName');
    let numOfStudent = parseInt(e.target[3].value);
    let vehicleType = e.target[4].value;
    let managerId = parseInt(sessionStorage.getItem('empId'));
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
      .then(response=> {
        console.log(response.data);
        if(response.data === "Added Successfully"){
          window.location = '/managersession';
        }
      })
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Add Session</h1>
              <p> Kalutara Branch</p>
            </div>
          </div>
          <center>
            <div className="charts__rightt">
              <div className="charts__right__title">
                <div>
                  <p>Basic Details</p>
                </div>
              </div>

              <form className="charts__rightt__cardss"
              
              onSubmit={e => {
                e.preventDefault();
                submit(e);
              }}
>
                <div className="card-p">
                  <p className="text">Instructor Name</p>
                  <select>
                    <option value="0"> Select Instructor</option>
                    {
                      getEmployeeType.map(d => (

                        <option key={d.empid} value={d.empid}> {d.fullName} </option>

                      ))}




                  </select>
                </div>

                

                <div className="card-p">
                  <p className="text">Date</p>
                  <input className="data" type="date" name="first_name" id="firstname" placeholder="Date"  required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Time</p>
                  <input className="data" type="time" name="first_name" id="firstname" placeholder="Time" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Number Of Student</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Number Of Student"  required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                
                <div className="card-p">
                  <p className="text">Vehical type</p>

                  <select>
                    <option value="0"> Select Vehicle Type </option>
                    {
                      getVehicleType.map(d => (

                        <option key={d.typeId} value={d.typeName}> {d.typeName} </option>

                      ))}




                  </select>

                </div>

                <center>
                  <input type="submit" value="Add" className="update-btn" />
                  &nbsp;&nbsp;&nbsp;
                  <input type="Reset" value="Cancle" className="reset1-btn" />
                </center>
              </form>
            </div>
          </center>
        </div>
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );

}

export default ManagerAddStudents;