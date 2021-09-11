import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';


const ManagerVehicle = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionState, setSessionState] = useState([]);
  const [getStudent, setStudent] = useState([]);
  const [getSessionId,setSessionId] = useState();

  console.log(getStudent);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  useEffect(() => {
    getSession();
    Student();
  }, []);

  const getSession = () => {
    axios
      .get("http://localhost:8080/staffsessioncontroller/getallsession/1")
      .then(data => {
        setSessionState(data.data);



      })
  }


  const addsession = (username) => {

    let data = {
      sessionId: getSessionId,
      StudentUsername: username
    }

    console.log(data);
    axios
      .post("http://localhost:8080/session/book", data)
      .then(d => {
        console.log(d.data);
      })

  }


  const Student = () => {
    axios
      .get("http://localhost:8080/drivelearn/students")
      .then(d => {
        setStudent(d.data);
      })
  }

  console.log(sessionState)

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Manage Session</h1>
              <p> Kalutara Branch</p>
            </div>
          </div>
          <br /><br />
          <div className="table_responsive">
            <div className="search">
              <div className="search_box">
                <div className="dropdown">
                  <div className="default_option">All</div>
                  {/* <ul>
                         <li>All</li>
                         <li>Recent</li>
                         <li>Popular</li>
                       </ul> */}
                </div>
                <div className="search_field">
                  <input type="text" className="input" placeholder="Search" />
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div className="create-button">
                <div className="create_btn">
                  <a href="./manageraddsession"><i className="fa fa-plus-circle"></i></a>
                  <br />
                  <p>Add Session</p>
                </div>
              </div>
            </div>

            <br />
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Instructor Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>No of Student</th>
                  <th>Vehicle No</th>
                  <th>Current On</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {
                  sessionState.map(d => (
                    <tr>
                      <td>{d.sessionId}</td>
                      <td>{d.trainerUsername}</td>
                      <td>{d.date}</td>
                      <td>{d.startTime}</td>
                      <td>{d.numOfStudent}</td>
                      <td>{d.vehicleType}</td>
                      <td>Empty</td>
                      <td>{d.status}</td>

                      <td>
                        <span className="action_btn">
                          <a href="./managerupdatesession" className="eye"><i className="fa fa-eye"></i></a>
                          <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                        </span>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>





        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Add Student</h1>
              <p> Kalutara Branch</p>
            </div>
          </div>
          <br /><br />
          <div className="table_responsive">
            <div className="search">
              <div className="search_box">
                <div className="dropdown">
                  <div className="default_option">All</div>
                  {/* <ul>
                         <li>All</li>
                         <li>Recent</li>
                         <li>Popular</li>
                       </ul> */}
                </div>
                <div className="search_field">
                  <input type="text" className="input" placeholder="Search" />
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div className="create-button">

              </div>
            </div>

            <br />
            <table>
              <thead>

                <tr>
                  <th>StudentId</th>
                  <th>NIC</th>
                  <th>Name</th>
                  <th>Total Hour</th>
                  <th>Completed</th>
                  <th>Session id</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {

                  getStudent.map(d => (
                    <tr>
                      <td>{d.stuID}</td>
                      <td>{d.nid}</td>
                      <td>{d.name}</td>
                      <td>empty</td>
                      <td>empty</td>
                      <td> <input type="text" onChange={(e)=>{
                        setSessionId(e.target.value);
                      }} /> </td>


                      <td>
                        <span className="action_btn">

                          <a  className="eye"><i className="fa fa-plus-circle" onClick={()=>
                          addsession(d.username)

                          }></i></a>

                        </span>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>


      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>



  );

}

export default ManagerVehicle;