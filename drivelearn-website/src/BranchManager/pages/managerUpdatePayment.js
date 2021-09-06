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
              <h1>Update Payment</h1>
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
                  <p className="text">Student Name</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Student Name" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">NIC</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="NIC" value="" required />
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
                  <p className="text">Course Fee</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Course fee" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Paid Fee</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Paid fee" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Rest Amount</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Rest Amount" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Amount</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Amount" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
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