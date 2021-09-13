import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import './../dropdown.css';
import ManagerUpdateVehicle from './managerUpdateVehicle';


const ManagerVehicle = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [vehicleState, setVehicleState] = useState([]);
  const [search, getSearch] = useState("");
  const [dropdown, getdrop] = useState("Reg No");
 

  useEffect(() => {
    getVehicle();
   
  }, []);

  

  const getVehicle = () => {
    axios
      .get("http://localhost:8080/vehicle/getvehicle/1/1")
      .then(data => {
        setVehicleState(data.data);


      })
  }
  


  const deleteVehicle = (id) => {
    console.log(id);
    axios
      .delete('http://localhost:8080/vehicle/deletevehicle/' + id)
      .then(d => {
        console.log(d);
      })
  }



 



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
              <h1>Manage Vehicles</h1>
              <p>{sessionStorage.getItem('branchName')} Branch</p>
            </div>
          </div>

          <br /><br />
          <div className="table_responsive">
            <div className="search">
              <div className="search_box ">


                <select id="dropdown" className="drop-down" onChange={e=>{
                  getdrop(e.target.value);
                }}>

                  <option className="option-style" value="Reg No">Reg No</option>
                  <option className="option-style" value="Chessi No">Chassis No</option>

                </select>


                <div className="search_field search-drop">
                  <input type="text" className="input" placeholder="Search" onChange={(e)=>{
                    getSearch(e.target.value);
                  }} />
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div className="create-button">
                <div className="create_btn">
                  <a href="./manageraddvehicle"><i className="fa fa-plus-circle"></i></a>
                  <br />
                  <p>Add vehicle</p>
                </div>
              </div>
            </div>

            <br />
            <table>
              <thead>
                <tr>
                  <th>Reg No</th>
                  <th>Chassis No</th>
                  <th>Starting Miles(km)</th>
                  <th>Vehicle Type</th>
                  <th>License expire</th>
                  <th>Insurance expire</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {

                  vehicleState.filter((value)=>{
                    if(search===""){
                      return value;
                    }else if(value.regiNumner.toLowerCase().includes(search.toLowerCase()) && dropdown.includes("Reg No")){
                      return value;
                    }else if(value.chacieNumber.toLowerCase().includes(search.toLowerCase()) && dropdown.includes("Chessi No")){
                      return value;
                    }
                  }).map(d => (




                    <tr>

                      <td>{d.regiNumner}</td>
                      <td>{d.chacieNumber}</td>
                      <td>{d.startingMilage}</td>
                      <td>{d.vehicleType}</td>
                      <td>{d.licenceExpireDate}</td>
                      <td>{d.expireDate}</td>

                      <td>
                        <span className="action_btn">
                          <a href={'./managerupdatevehicle/' + d.vechicleId} className="eye"><i className="fa fa-eye"></i></a>
                          <a href="#" className="trash" onClick={() => {
                            deleteVehicle(d.vechicleId);
                          }}
                          ><i className="fa fa-trash"></i></a>
                         
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