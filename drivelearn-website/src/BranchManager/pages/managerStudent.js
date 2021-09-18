import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import './../modal.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';

import ManagerNewPayment from './managerNewPayment';
import { Base } from './../../base';

const ManagerStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getStudent, setStudent] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [getdrop, setdrop] = useState({
    car: "0",
    bike: "0",
    threewheel: "0",
  });
  const [enrol, setenrol] = useState();
  const [getdropmenu, setgetdropmenu] = useState("Reg No");
  const [search, getSearch] = useState("");




  const toggleModal = (id, name, address, nid, username) => {
    setData(
      {
        id: id,
        name: name,
        address: address,
        nid: nid,
        username: username

      }

    );

    //setusername(username);
    payemntStatus(username);

    setModal(!modal);
  };

  //console.log(data.name);



  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(() => {
    Student();
    payemntStatus();
  }, [])


  const Student = () => {
    axios
      .get(Base + "/drivelearn/branchstudents/" + sessionStorage.getItem('branchName'))
      .then(d => {
        setStudent(d.data.reverse());
      })
  }

  const payemntStatus = (name) => {
    console.log(name);
    let userdata = {
      username: name
    }
    axios
      .post(Base + "/course/isenroll", userdata)
      .then(d => {
        console.log(d.data);
        setenrol(d.data);

      })
  }

  console.log(search);


  console.log(getStudent);

  const openSidebar = () => {

    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };



  // const addpayment = () => {

  //   let data = {
  //     userId: data.id,
  //     amount: (parseInt(getdrop.car) + parseInt(getdrop.bike) + parseInt(getdrop.threewheel)) * 1000 + 11000
  //   }

  //   console.log(data);
  //   axios
  //     .post(Base+"/payment/addinitialpayment", data)
  //     .then(d => {
  //       console.log(props.data.id);
  //     })

  // }







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
              <div className="search_box " >


                <select id="dropdown" className="drop-down" onChange={e => {
                  setgetdropmenu(e.target.value);
                }}>

                  <option className="option-style" value="Reg No">Reg No</option>
                  <option className="option-style" value="Full Name">Full Name</option>
                  <option className="option-style" value="NIC">NIC</option>

                </select>


                <div className="search_field search-drop">
                  <input type="text" className="input" placeholder="Search" onChange={(e) => {
                    getSearch(e.target.value);
                  }} />
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
                <div className="overlay">
                  <div className="modal-content">
                    <ManagerNewPayment enrol={enrol} data={data} toggleModal={toggleModal} setdrop={setdrop} />

                  </div>
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

                  getStudent.filter((value) => {

                    console.log(value.stuID.toString().toLowerCase());
                    console.log(value.name.toString().toLowerCase());
                    if (search === "") {
                      return value;
                    } else if (value.stuID.toString().toLowerCase().includes(search.toLowerCase()) && getdropmenu.includes("Reg No")) {
                      return value;
                    } else if (value.name.toString().toLowerCase().includes(search.toLowerCase()) && getdropmenu.includes("Full Name")) {
                      return value;
                    } else if (value.nid.toString().toLowerCase().includes(search.toLowerCase()) && getdropmenu.includes("NIC")) {
                      return value;
                    }
                  }).map(data => (


                    <tr>

                      <td>{data.stuID}</td>
                      <td>{data.name}</td>
                      <td>{data.address}</td>
                      <td>{data.nid}</td>
                      <td>{data.contact}</td>
                      <td>

                        <span className="action_btn">

                          <a className="eye"><i className="fa fa-plus-circle" onClick={() =>
                            toggleModal(data.stuID, data.name, data.address, data.nid, data.username)

                          }></i></a>

                        </span>

                        {/* <button onClick={() => {
                          toggleModal(data.stuID, data.name, data.address, data.nid, data.username)
                        }}><i className="fa fa-trash"></i></button> */}

                      </td>

                      <td>
                        <span className="action_btn">
                          <a href={'./managerviewstudent/' + data.stuID} className="eye"><i className="fa fa-eye"></i></a>
                          {/* <a href="#" className="trash"><i className="fa fa-trash"></i></a> */}
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