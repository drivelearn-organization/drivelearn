import React, { useEffect, useState } from 'react';
import '../../App.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';
import Errorbox from './errorbox';
import Popup from './Popup';
import { Base } from './../../base';
const AdminStudents = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getData, setGetData] = useState([]);
  const [searchStudent, setSearchStudent] = useState(false);
  const [getdropmenu, setgetdropmenu] = useState("Reg No");
  const [search, getSearch] = useState("");
  const [deactivate, setDeactivate] = useState({

    stuID: ''

  });
  const [state, setState] = useState({

    name: ''


  });

  const handleSearchStudent = () => {
    setSearchStudent(!searchStudent);
  }

  const handleChangeActiveStatus = () => {
    alert("Are you sure");
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(Base + '/drivelearn/serchStudent', state)
      .then(response => {
        setGetData(response.data)
        console.log(getData);
      })

  }



  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  useEffect(() => {
    axios.get('http://localhost:8080/drivelearn/students')
      .then(response => {
        setGetData(response.data.reverse())
        console.log(getData);
      })
    // axios.post('http://192.168.56.1:8080/drivelearn/deactiveStudent',deactivate) 
  }, []);



  return (

    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      <main>

        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Manage Students</h1>
              <p>DriveLEARN</p>
            </div>
          </div>
          <br /><br />
          <div className="table_responsive">
            <div className="search">
              <form action="" onSubmit={handleSubmit}>
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
              </form>

              <div className="create-button">
                <div className="create_btn">
                  <a href="./adminaddstudent"><i className="fa fa-plus-circle"></i></a>
                  <br />
                  <p>Add student</p>
                </div>
              </div>
            </div>

            <br />
            <table>
              <thead>

                <tr>
                  <th>Reg No</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>NIC</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {

                  getData.filter((value) => {

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
                  }).map(data => {
                    if (data.name && data.address && data.nid && data.contact) {

                      return (

                        <tr>

                          <td>{data.stuID}</td>
                          <td>{data.name}</td>
                          <td>{data.address}</td>
                          <td>{data.nid}</td>
                          <td>{data.contact}</td>
                          <td>
                            <span className="action_btn">
                              <a href={'./adminviewstudent/' + data.stuID} className="eye"><i className="fa fa-eye"></i></a>
                              {/* <a href="#" className="trash" onClick = {()=>{ setDeactivate({stuID:data.stuID}); handleChangeActiveStatus(); }}><i className="fa fa-trash"></i></a> */}
                            </span>
                          </td>
                        </tr>

                      )
                    }

                  })
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

export default AdminStudents;