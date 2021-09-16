import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import {Base} from './../../base';


const ManagerSessionSelectStudent = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionState, setSessionState] = useState([]);
  const [getStudent, setStudent] = useState([]);
  const [getSessionId, setSessionId] = useState();

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
      .get(Base+"/staffsessioncontroller/getallsession/1")
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
      .post(Base+"/session/book", data)
      .then(d => {
        console.log(d.data);
      })

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





    <div className="main__container" >
      <div className="main__title">
        <div className="main__greeting">
          <h1>Select Students</h1>
          <p> {sessionStorage.getItem('branchName')} Branch</p>
        </div>
      </div>
      <br />
      <div className="table_responsive" style={{ height: "50vh" }}>





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

        </div>


        <br />
        <div style={{ overflow: "hidden" }}>
          <table>
            <thead>
              <tr>
                <th>StudentId</th>
                <th>NIC</th>
                <th>Name</th>
                

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
                    
                  



                    <td>
                      <span className="action_btn">

                        <a className="eye"><i className="fa fa-plus-circle" onClick={() =>
                          props.toggle(d.username)

                        }></i></a>

                      </span>
                    </td>
                  </tr>
                ))
              }

            </tbody>


          </table>
        </div>
        <br />
        {/*<input type="submit" className="add-btn" onClick={() => {
                    sendNotification();

                }} />*/}






      </div>





      <div className="table_responsive" style={{ marginTop: "2%", overflow: "hidden" }}>
        <div style={{ position: "relative"}}>
        
          <button style={{ position: "relative", right: "0px" }} className="reset-btn" onClick={props.toggle}>Close</button>
        </div>
      </div>


    </div>







  );

}

export default ManagerSessionSelectStudent;