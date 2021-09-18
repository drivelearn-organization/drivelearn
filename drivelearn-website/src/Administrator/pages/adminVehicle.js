import React, { useEffect, useState } from 'react';
import '../../App.css';
// import '../../BranchManager/Table.css';
import '../../BranchManager/filterButton.css';
import Navbar from '../../BranchManager/Navbar';
import Sidebar from '../adminSidebar';
import axios from 'axios';
import '../../BranchManager/dropdown.css';
// import ManagerUpdateVehicle from './managerUpdateVehicle';
import ManagerNewUpdateVehicle from '../../BranchManager/pages/managerNewUpdateVehicle';
import {Base} from './../../base';


const AdminVehicle = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [vehicleState, setVehicleState] = useState([]);
  const [search, getSearch] = useState("");
  const [dropdown, getdrop] = useState("Reg No");
  const [modal,setModal] = useState(false);
  const [getUpdateVehicle,setUpdateVehicle] = useState([]);
 

  useEffect(() => {
    getVehicle();
   
  }, []);


  const togglemodal=(regiNumber,chacieNumber,startingMileage,vehicleType,licenceExpireDate,licencePayedDate,addedDate,payedDate,expireDate,vechicleId)=>{
    setUpdateVehicle({
      regiNumner:regiNumber,
      chacieNumber:chacieNumber,
      startingMilage:startingMileage,
      vehicleType:vehicleType,
      licenceExpireDate:licenceExpireDate,
      licencePayedDate:licencePayedDate,
      addedDate:addedDate,
      payedDate:payedDate,
      expireDate:expireDate,
      vechicleId:vechicleId,
      branchName:sessionStorage.getItem('branchName')

    });
    setModal(!modal);
  }

  const addpayment = () => {

    axios
    .put(Base+"/vehicle/updatevehicle",getUpdateVehicle)
    .then(d=>{
     
    })

    setModal(!modal);
    

   window.location.reload();


  }

  const getVehicle = () => {
    axios
      .get(Base+"/vehicle/getvehicle/1/"+ sessionStorage.getItem('branchId'))
      .then(data => {
        setVehicleState(data.data.reverse());


      })
  }
  


  const deleteVehicle = (id) => {
    console.log(id);
    axios
      .delete(Base+'/vehicle/deletevehicle/' + id)
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



console.log(getUpdateVehicle);

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


          {modal && (
                  <div className="modal" >
                    <div className="overlay" >
                      <div className="modal-content" style={{
                        background: "white"
                      
                      }}>
                        <ManagerNewUpdateVehicle addpayment={addpayment} togglemodal={togglemodal} setUpdateVehicle={setUpdateVehicle} getUpdateVehicle={getUpdateVehicle} />

                      </div>
                    </div>
                  </div>
                )}


          <br /><br />
          <div className="table_responsive">
            <div className="search" >
              <div className="search_box " >


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
                          <a onClick={()=>togglemodal(d.regiNumner,d.chacieNumber,d.startingMilage,d.vehicleType,d.licenceExpireDate,d.expireDate,d.addedDate,d.payedDate,d.expireDate,d.vechicleId)}  className="eye"><i className="fa fa-eye"></i></a>
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

export default AdminVehicle;