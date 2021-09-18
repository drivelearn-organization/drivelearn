import React, { useEffect, useState } from 'react';
import '../../App.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';
import Popup from './Popup';
import { Base } from './../../base';
const AdminStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getData, setGetData] = useState([]);
  const [modal, setModal] = useState(false);
  const [getdropmenu, setgetdropmenu] = useState("Reg No");
  const [search, getSearch] = useState("");
  const [deactivate, setDeactivate] = useState({
    empid: ''
  });

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const [state, setState] = useState({

    fullName: ''

  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

  }

  const handleChangeActiveStatus = () => {
    setModal(true);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(Base + '/drivelearn/serchTrainer', state)
      .then(response => {
        setGetData(response.data)

      })

  }

  useEffect(() => {
    axios.get(Base + '/drivelearn/trainer')
      .then(response => {
        setGetData(response.data.reverse())
        console.log(getData);
      })
    // axios.post('http://192.168.56.1:8080/drivelearn/deactiveEmployee',deactivate)
  }, []);

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        {modal && <Popup closeModal={setModal} empid={deactivate} location='/admininstructor' />}
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Manage Instructors</h1>
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
                  <a href="./adminaddinstructor"><i className="fa fa-plus-circle"></i></a>
                  <br />
                  <p>Add instructors</p>
                </div>
              </div>
            </div>

            <br />
            <table>
              <thead>
                <tr>
                  <th>Reg No</th>
                  <th>Full Name</th>
                  {/* <th>Address</th> */}
                  <th>NIC</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  getData.filter((value) => {


                    if (search === "") {
                      return value;
                    } else if (value.empid.toString().toLowerCase().includes(search.toLowerCase()) && getdropmenu.includes("Reg No")) {
                      return value;
                    } else if (value.fullName.toString().toLowerCase().includes(search.toLowerCase()) && getdropmenu.includes("Full Name")) {
                      return value;
                    } else if (value.nid.toString().toLowerCase().includes(search.toLowerCase()) && getdropmenu.includes("NIC")) {
                      return value;
                    }
                  }).map(data => {


                    return (

                      <tr>

                        <td>{data.empid}</td>
                        <td>{data.fullName}</td>
                        {/* <td>No.65, Kottegoda, Weligama.</td> */}
                        <td>{data.nid}</td>
                        <td>{data.moNumber}</td>
                        <td>
                          <span className="action_btn">
                            <a href={'./adminviewinstructor/' + data.empid} className="eye"><i className="fa fa-eye"></i></a>
                            <a href="#" className="trash" onClick={() => { setDeactivate({ empid: data.empid }); handleChangeActiveStatus(); }}><i className="fa fa-trash"></i></a>
                          </span>
                        </td>
                      </tr>

                    )

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