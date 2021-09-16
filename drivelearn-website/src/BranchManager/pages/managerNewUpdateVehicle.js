import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import { withRouter } from 'react-router';
import axios from 'axios';
import {Base} from './../../base';


const ManagerUpdateVehicle = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [vehicleState, setVehicleState] = useState([]);



  // useEffect(() => {
  //  getVehicle();
  //   let id = props.match.params.id;
  // }, []);

  // const getVehicle = () => {
  //   axios
  //     .get("http://localhost:8080/vehicle/getvehicles/"+props.match.params.id)
  //     .then(data => {
  //       setVehicleState(data.data);




  //     })
  // }








  console.log(vehicleState);


  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  const putVehicle = e => {
    axios
      .put(Base+"/vehicle/updatevehicle", vehicleState)
      .then(d => {
        props.history.push("/");
      })
  }
  let value;
  console.log(value);



  const changeMile = (e) => {
    let simple = e.target.value;
    console.log(simple);
  }



  return (


    <div className="main__container" >
      <div className="main__title">
        <div className="main__greeting">
          <h1>Update Vehicle</h1>
          <p> {sessionStorage.getItem('branchName')} Branch</p>
        </div>
      </div>
      <center>
        <div className="charts__rightt" style={{ height: "70vh", overflow: "auto" }}>




          <div className="card-p">
            <p className="text">Vehical No</p>
            <input className="data" type="text" value={props.getUpdateVehicle.regiNumner} onChange={(e) => {
              value = e.target.value;

              props.setUpdateVehicle({
                vechicleId:props.getUpdateVehicle.vechicleId,
                regiNumner: e.target.value,
                chacieNumber: props.getUpdateVehicle.chacieNumber,
                addedDate: props.getUpdateVehicle.addedDate,
                startingMilage: props.getUpdateVehicle.startingMilage,
                vehicleType: props.getUpdateVehicle.vehicleType,
                licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                payedDate: props.getUpdateVehicle.payedDate,
                expireDate: props.getUpdateVehicle.expireDate,
                branchName:props.getUpdateVehicle.branchName
              });


            }} />
            {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
            <div className="card-p" style={{ marginRight: "10px" }}>
              <p className="text">Starting Mileage</p>
              <input className="data" type="text" name="first_name" id="firstname" placeholder="Starting Mileage" value={props.getUpdateVehicle.startingMilage} onChange={e => {
                value = e.target.value;

                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: props.getUpdateVehicle.chacieNumber,
                  addedDate: props.getUpdateVehicle.addedDate,
                  startingMilage: e.target.value,
                  vehicleType: props.getUpdateVehicle.vehicleType,
                  licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                  licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                  payedDate: props.getUpdateVehicle.payedDate,
                  expireDate: props.getUpdateVehicle.expireDate,
                  branchName:props.getUpdateVehicle.branchName
                });

              }} required />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>




            <div className="card-p">
              <p className="text">Register Date</p>
              <input className="data" type="date" name="first_name" id="firstname" placeholder="Register Date" value={props.getUpdateVehicle.addedDate} onChange={e => {
                value = e.target.value;

                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: props.getUpdateVehicle.chacieNumber,
                  addedDate: e.target.value,
                  startingMilage: props.getUpdateVehicle.startingMilage,
                  vehicleType: props.getUpdateVehicle.vehicleType,
                  licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                  licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                  payedDate: props.getUpdateVehicle.payedDate,
                  expireDate: props.getUpdateVehicle.expireDate,
                  branchName:props.getUpdateVehicle.branchName

                });

              }} />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
            <div className="card-p" style={{ marginRight: "10px" }}>
              <p className="text">Vehical type</p>
              <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Vehical type" value={props.getUpdateVehicle.vehicleType} onChange={e => {
                value = e.target.value;
                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: props.getUpdateVehicle.chacieNumber,
                  addedDate: props.getUpdateVehicle.addedDate,
                  startingMilage: props.getUpdateVehicle.startingMilage,
                  vehicleType: e.target.value,
                  licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                  licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                  payedDate: props.getUpdateVehicle.payedDate,
                  expireDate: props.getUpdateVehicle.expireDate,
                  branchName:props.getUpdateVehicle.branchName

                });
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
              <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Chessis No" value={props.getUpdateVehicle.chacieNumber} onChange={e => {
                value = e.target.value;
                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: e.target.value,
                  addedDate: props.getUpdateVehicle.addedDate,
                  startingMilage: props.getUpdateVehicle.startingMilage,
                  vehicleType: props.getUpdateVehicle.vehicleType,
                  licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                  licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                  payedDate: props.getUpdateVehicle.payedDate,
                  expireDate: props.getUpdateVehicle.expireDate,
                  branchName:props.getUpdateVehicle.branchName

                });
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

          </div>
          <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>

            <div className="card-p" style={{ marginRight: "10px" }}>
              <p className="text">License starting date</p>
              <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License starting date" value={props.getUpdateVehicle.licencePayedDate} onChange={e => {
                value = e.target.value;
                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: props.getUpdateVehicle.chacieNumber,
                  addedDate: props.getUpdateVehicle.addedDate,
                  startingMilage: props.getUpdateVehicle.startingMilage,
                  vehicleType: props.getUpdateVehicle.vehicleType,
                  licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                  licencePayedDate: e.target.value,
                  payedDate: props.getUpdateVehicle.payedDate,
                  expireDate: props.getUpdateVehicle.expireDate,
                  branchName:props.getUpdateVehicle.branchName

                });
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


            <div className="card-p" style={{ marginLeft: "0px" }}>
              <p className="text">License expire date</p>
              <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License expire date" value={props.getUpdateVehicle.licenceExpireDate} onChange={e => {
                value = e.target.value;
                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: props.getUpdateVehicle.chacieNumber,
                  addedDate: props.getUpdateVehicle.addedDate,
                  startingMilage: props.getUpdateVehicle.startingMilage,
                  vehicleType: props.getUpdateVehicle.vehicleType,
                  licenceExpireDate: e.target.value,
                  licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                  payedDate: props.getUpdateVehicle.payedDate,
                  expireDate: props.getUpdateVehicle.expireDate,
                  branchName:props.getUpdateVehicle.branchName

                });
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

            <div className="card-p" style={{ marginRight: "10px" }}>
              <p className="text">Insurance payed date</p>
              <input className="data" type="date" name="first_name" id="firstname" placeholder="Insurance starting date" value={props.getUpdateVehicle.payedDate} onChange={e => {
                value = e.target.value;
                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: props.getUpdateVehicle.chacieNumber,
                  addedDate: props.getUpdateVehicle.addedDate,
                  startingMilage: props.getUpdateVehicle.startingMilage,
                  vehicleType: props.getUpdateVehicle.vehicleType,
                  licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                  licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                  payedDate: e.target.value,
                  expireDate: props.getUpdateVehicle.expireDate,
                  branchName:props.getUpdateVehicle.branchName

                });
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

            <div className="card-p" style={{ marginLeft: "0px" }}>
              <p className="text">Insurance expire date</p>
              <input className="data" type="date"  name="first_name" id="firstname" placeholder="Insurance expire date" value={props.getUpdateVehicle.expireDate} onChange={e => {
                value = e.target.value;
                props.setUpdateVehicle({
                  vechicleId:props.getUpdateVehicle.vechicleId,
                  regiNumner: props.getUpdateVehicle.regiNumner,
                  chacieNumber: props.getUpdateVehicle.chacieNumber,
                  addedDate: props.getUpdateVehicle.addedDate,
                  startingMilage: props.getUpdateVehicle.startingMilage,
                  vehicleType: props.getUpdateVehicle.vehicleType,
                  licenceExpireDate: props.getUpdateVehicle.licenceExpireDate,
                  licencePayedDate: props.getUpdateVehicle.licencePayedDate,
                  payedDate: props.getUpdateVehicle.payedDate,
                  expireDate: e.target.value,
                  branchName:props.getUpdateVehicle.branchName

                });

              }} required />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>

          </div>


          <center>
            <input type="submit" value="Update" onClick={(e=>props.addpayment(e))} className="update-btn" />
            &nbsp;&nbsp;&nbsp;
            <input type="Reset" value="Cancle" onClick={props.togglemodal} className="reset1-btn" />
          </center>

        </div>
      </center>
    </div>


  );

}

export default ManagerUpdateVehicle;