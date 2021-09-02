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
              <h1>Add Session</h1>
              <p> Kalutara Branch</p>
            </div>
          </div>
          <center>
            <div className="charts__rightt">
              <div className="charts__right__title">
                <div>
                  <p>Basic Details</p>
                </div>
              </div>

              <form className="charts__rightt__cardss">
                <div className="card-p">
                  <p className="text">Instructor Name</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Instructor Name" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Date</p>
                  <input className="data" type="date" name="first_name" id="firstname" placeholder="Date" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Time</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Time" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Number Of Student</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Number Of Student" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Vehical Number</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Vehical Number" required />
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

                <center>
                  <input type="submit" value="Add" className="update-btn" />
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