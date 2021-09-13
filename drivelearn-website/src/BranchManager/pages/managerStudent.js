import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import './../modal.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';

import ManagerNewPayment from './managerNewPayment';


const ManagerStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getStudent, setStudent] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);




  const toggleModal = (id, name, address, nid) => {
    setData(
      {
        id: id,
        name: name,
        address: address,
        nid: nid

      }
    );

    setModal(!modal);
  };

  console.log(data.name);



  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(() => {
    Student();
  }, [])


  const Student = () => {
    axios
      .get("http://localhost:8080/drivelearn/branchstudents/"+sessionStorage.getItem('branchName'))
      .then(d => {
        setStudent(d.data);
      })
  }

  console.log(getStudent);

  const openSidebar = () => {

    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Manage Students</h1>
              <p>{sessionStorage.getItem('branchName')} Branch</p>
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
                  <a href="./manageraddstudent"><i className="fa fa-plus-circle"></i></a>
                  <br />
                  <p>Add student</p>
                </div>
              </div>
            </div>


            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <ManagerNewPayment data={data} toggleModal={toggleModal} />

                </div>
              </div>
            )}


            <br />
            <table>
              <thead>
                <tr>
                  <th>Reg No</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>NIC</th>
                  <th>Mobile</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {

                  getStudent.map(data => (


                    <tr>

                      <td>{data.stuID}</td>
                      <td>{data.name}</td>
                      <td>{data.address}</td>
                      <td>{data.nid}</td>
                      <td>{data.contact}</td>
                      <td><button onClick={() => {
                        toggleModal(data.stuID, data.name, data.address, data.nid)
                      }}><i className="fa fa-trash"></i></button></td>
                      <td>
                        <span className="action_btn">
                          <a href={'./managerviewstudent/' + data.stuID} className="eye"><i className="fa fa-eye"></i></a>
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
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );

}

export default ManagerStudents;