import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import { withRouter } from 'react-router';
import axios from 'axios';


const ManagerUpdateVehicle = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [vehicleState, setVehicleState] = useState([]);
  
  

  useEffect(() => {
   getVehicle();
    let id = props.match.params.id;
  }, []);

  const getVehicle = () => {
    axios
      .get("http://localhost:8080/vehicle/getvehicles/"+props.match.params.id)
      .then(data => {
        setVehicleState(data.data);
        
        


      })
  }




  
 
   
  
  console.log(vehicleState);


  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


const putVehicle=e=>{
  axios
  .put("http://localhost:8080/vehicle/updatevehicle",vehicleState)
  .then(d=>{
    props.history.push("/");
  })
}
  let value;
console.log(value);



const changeMile=(e)=>{
  let simple = e.target.value;
  console.log(simple);
  }



  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Update Vehicle</h1>
              <p> {sessionStorage.getItem('branchName')} Branch</p>
            </div>
          </div>
          <center>
            <div className="charts__rightt">
              

              <form className="charts__rightt__cardss" onSubmit={
                e=>{
                  
                  putVehicle(e);
                }
              }>
                <div className="card-p">
                  <p className="text">Vehical No</p>
                  <input className="data" type="text" value={vehicleState.regiNumner} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: e.target.value,
                      startingMilage: vehicleState.startingMilage,
                      vehicleType: vehicleState.vehicleType,
                      chacieNumber: vehicleState.chacieNumber,
                      licencePayedDate: vehicleState.licencePayedDate,
                      licenceExpireDate: vehicleState.licenceExpireDate,
                      payedDate: vehicleState.payedDate,
                      expireDate: vehicleState.expireDate
                      
                    });
                  }} />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>


                <div className="card-p">
                  <p className="text">Starting Mileage</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Starting Mileage" value={vehicleState.startingMilage} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: vehicleState.regiNumner,
                      startingMilage: e.target.value,
                      vehicleType: vehicleState.vehicleType,
                      chacieNumber: vehicleState.chacieNumber,
                      licencePayedDate: vehicleState.licencePayedDate,
                      licenceExpireDate: vehicleState.licenceExpireDate,
                      payedDate: vehicleState.payedDate,
                      expireDate: vehicleState.expireDate
                      
                    });
                  }} required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Register Date</p>
                  <input className="data" type="date" name="first_name" id="firstname" placeholder="Register Date" />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Vehical type</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Vehical type" value={vehicleState.vehicleType} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: vehicleState.regiNumner,
                      startingMilage: vehicleState.startingMilage,
                      vehicleType: e.target.value,
                      chacieNumber: vehicleState.chacieNumber,
                      licencePayedDate: vehicleState.licencePayedDate,
                      licenceExpireDate: vehicleState.licenceExpireDate,
                      payedDate: vehicleState.payedDate,
                      expireDate: vehicleState.expireDate
                      
                    });
                  }} required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Chessis No</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Chessis No" value={vehicleState.chacieNumber} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: vehicleState.regiNumner,
                      startingMilage: vehicleState.startingMilage,
                      vehicleType: vehicleState.vehicleType,
                      chacieNumber: e.target.value,
                      licencePayedDate: vehicleState.licencePayedDate,
                      licenceExpireDate: vehicleState.licenceExpireDate,
                      payedDate: vehicleState.payedDate,
                      expireDate: vehicleState.expireDate
                      
                    });
                  }} required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
                  <div className="card-p" style={{marginRight: "10px"}}>
                    <p className="text">License starting date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License starting date" value={vehicleState.licencePayedDate} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: vehicleState.regiNumner,
                      startingMilage: vehicleState.startingMilage,
                      vehicleType: vehicleState.vehicleType,
                      chacieNumber: vehicleState.chacieNumber,
                      licencePayedDate: e.target.value,
                      licenceExpireDate: vehicleState.licenceExpireDate,
                      payedDate: vehicleState.payedDate,
                      expireDate: vehicleState.expireDate
                      
                    });
                  }} required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                  <div className="card-p" style={{marginLeft: "0px"}}>
                    <p className="text">License expire date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License expire date" value={vehicleState.licenceExpireDate} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: vehicleState.regiNumner,
                      startingMilage: vehicleState.startingMilage,
                      vehicleType: vehicleState.vehicleType,
                      chacieNumber: vehicleState.chacieNumber,
                      licencePayedDate: vehicleState.licencePayedDate,
                      licenceExpireDate: e.target.value,
                      payedDate: vehicleState.payedDate,
                      expireDate: vehicleState.expireDate
                      
                    });
                  }} required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                </div>

                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>

                  <div className="card-p" style={{marginRight: "10px"}}>
                    <p className="text">Insurance payed date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="Insurance starting date" value={vehicleState.payedDate} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: vehicleState.regiNumner,
                      startingMilage: vehicleState.startingMilage,
                      vehicleType: vehicleState.vehicleType,
                      chacieNumber: vehicleState.chacieNumber,
                      licencePayedDate: vehicleState.licencePayedDate,
                      licenceExpireDate: vehicleState.licenceExpireDate,
                      payedDate: e.target.value,
                      expireDate: vehicleState.expireDate
                      
                    });
                  }} required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                  <div className="card-p" style={{marginLeft: "0px"}}>
                    <p className="text">Insurance expire date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="Insurance expire date" value={vehicleState.expireDate} onChange={ e =>{
                     value = e.target.value;
                    
                    setVehicleState({
                      vechicleId: vehicleState.vechicleId,
                      regiNumner: vehicleState.regiNumner,
                      startingMilage: vehicleState.startingMilage,
                      vehicleType: vehicleState.vehicleType,
                      chacieNumber: vehicleState.chacieNumber,
                      licencePayedDate: vehicleState.licencePayedDate,
                      licenceExpireDate: vehicleState.licenceExpireDate,
                      payedDate: vehicleState.payedDate,
                      expireDate: e.target.value
                      
                    });
                  }} required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                </div>


                <center>
                  <input type="submit" value="Update" className="update-btn" />
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

export default ManagerUpdateVehicle;