import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import './../modal.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import ManagerSessionSelectStudent from './managerSessionSelectStudent';
import ManagerSessionDeactive from './managerPopUpDeactivateSession';

import ManagerSessionUpdate from './manageSessionUpdate';
import {Base} from './../../base';


const ManagerSession = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionState, setSessionState] = useState([]);
  const [getStudent, setStudent] = useState([]);
  //const [getSessionId, setSessionId] = useState();
  const [modal, setmodal] = useState(false);
  const [getSessionId, setSessionId] = useState();
  const [getmodalupdate, setmodalupdate] = useState(false);
  const [updateDetails, setUpdateDetails] = useState([]);
  const [getdata, setdata] = useState([]);
  const [deactive,setDeactive] = useState(false);
  const [deactiveId,setDeactiveState]=useState();
  const [state, setState] = useState({
    sessionId: "",
    trainerName: "",
    date: "",
    startTime: "",
    numOfStudent: "",
    empid: "",
    vehicleType: ""
  });


  console.log(getStudent);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {

    setSidebarOpen(false);
  };


const deactivepopup = (sessionId) =>{

  setDeactiveState(sessionId);
  setDeactive(!deactive);
}


  const toggleupdate = (sessionId, trainerName, date, startTime, numOfStudent, trainerId, vehicleType) => {


    setUpdateDetails(
      {
        sessionId: sessionId,
        trainerName: trainerName,
        date: date,
        startTime: startTime,
        numOfStudent: numOfStudent,
        trainerId: trainerId,
        vehicleType: vehicleType

      }
    );

    setdata(
      {
        sessionId: sessionId,
        trainerId: trainerId,
        date: date
      }
    )

    setmodalupdate(!getmodalupdate);
  }

  console.log(updateDetails);


  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }


  //console.log(state);


  const toggleSessionId = (sessioId) => {
    setSessionId(sessioId);
    setmodal(!modal);
  }

  const toggle = (username) => {

    let data = {
      studentUsername: username,
      sessionId: getSessionId
    }
    setmodal(!modal);
    booksession(data);


  }

  useEffect(() => {
    getSession();
    Student();
  }, []);

  const getSession = () => {
    axios
      .get(Base+"/staffsessioncontroller/getallsession/" + sessionStorage.getItem('branchId'))
      .then(data => {
        setSessionState(data.data.reverse());



      })
  }


  const deleteSession = () => {
    //console.log(id);
    axios
      .put(Base+'/staffsessioncontroller/makeclose/' + deactiveId )

      .then(d => {
        console.log(d);
      })

      window.location.reload();
      setDeactive(!deactive);
  }


  const booksession = (data) => {

    console.log(data);
    axios
      .post(Base+"/session/book", data)
      .then(d => {
        console.log(d.data);
      })

    window.location.reload();

  }


  const putSession = () => {

    //console.log(updateDetails.sessionId);
    // let data = {
    //   sessionId:updateDetails.sessionId,
    //   trainerId:updateDetails.empid,
    //   date:updateDetails.date

    // }

    console.log(getdata);
    axios
      .put(Base+"/staffsessioncontroller/updatesession", updateDetails)
      .then(d => {

      })

    window.location.reload();
    setmodalupdate(!getmodalupdate);
  }


  const Student = () => {
    axios
      .get(Base+"/drivelearn/students")
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
              <p> {sessionStorage.getItem('branchName')} Branch</p>
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

              {modal && (
                <div className="modal">
                  <div className="overlay">
                    <div className="modal-content" style={{
                      background: "white",
                      zIndex: "0"
                    }}>
                      <ManagerSessionSelectStudent toggle={toggle} />

                    </div>
                  </div>
                </div>
              )}

              {getmodalupdate && (
                <div className="modal">
                  <div className="overlay">
                    <div className="modal-content" style={{
                      background: "white",
                      zIndex: "0"
                    }}>
                      <ManagerSessionUpdate putSession={putSession} setUpdateDetails={setUpdateDetails} toggleupdate={toggleupdate} updateDetails={updateDetails} setState={setState} handleChange={handleChange} />

                    </div>
                  </div>
                </div>
              )}



{deactive && (
                <div className="modal">
                  <div className="overlay">
                    <div className="modal-content" style={{
                      background: "white",
                      width: "10%",
                      height: "60vh"
                    }}>
                      <ManagerSessionDeactive setDeactive={setDeactive} deleteSession={deleteSession} />

                    </div>
                  </div>
                </div>
              )}


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
                  <th>Add Student</th>
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


                      <td>

                        <span className="action_btn">

                          <a className="eye"><i className="fa fa-plus-circle" onClick={() =>
                            toggleSessionId(d.sessionId)

                          }></i></a>

                        </span>
                      </td>

                      <td>
                        <span className="action_btn">
                          <a className="eye"><i className="fa fa-eye" onClick={() => toggleupdate(d.sessionId, d.trainerUsername, d.date, d.startTime, d.numOfStudent, d.trainerId, d.vehicleType)}></i></a>
                          <a className="trash" onClick={()=>deactivepopup(d.sessionId)}><i className="fa fa-trash"></i></a>
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

export default ManagerSession;