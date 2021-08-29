import React, { useState } from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';


const ManagerAddStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <h1>Update Vehicle</h1>
              <p> Kalutara Branch</p>
            </div>
          </div>
          <center>
            <div className="charts__rightt">
              

              <form className="charts__rightt__cardss">
                <div className="card-p">
                  <p className="text">Vehical No</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Vehical No" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Starting Mileage</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Starting Mileage" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Register Date</p>
                  <input className="data" type="date" name="first_name" id="firstname" placeholder="Register Date" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Vehical type</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Vehical type" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Chessis No</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Chessis No" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
                  <div className="card-p" style={{marginRight: "10px"}}>
                    <p className="text">License starting date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License starting date" required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                  <div className="card-p" style={{marginLeft: "0px"}}>
                    <p className="text">License expire date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License expire date" required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                </div>

                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>

                  <div className="card-p" style={{marginRight: "10px"}}>
                    <p className="text">Insurance starting date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="Insurance starting date" required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                  <div className="card-p" style={{marginLeft: "0px"}}>
                    <p className="text">Insurance expire date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="Insurance expire date" required />
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

export default ManagerAddStudents;