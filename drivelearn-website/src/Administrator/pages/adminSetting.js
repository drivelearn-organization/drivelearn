import React, {useState} from 'react';
import '../../App.css';
import './../../BranchManager/Dashboard.css';
import './../../BranchManager/Profile.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';


const AdminSettings = () => {
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
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        <div className="main__greeting">
          <h1>PROFILE</h1>
          <p>Ifra15</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE -->

       <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
        <div className="charts__left__title">
            <div>
              <h1>Administrator of DriveLEARN</h1>
            </div>
        </div>
        <div className="charts__left__picture">
            <center>
              <div className="picture">
              <img src="images/avatar.png" alt=""  width="250" height="255"/>
              </div>
              <br/>
              <p>Ifra15</p>
            </center>
         </div>
         <br/><br/>
          <hr />
          <br/>
          <div className="charts__left__title">
           <div>
              <p>Change Password</p>
            </div>
           </div>
           <form className="charts__right__cardss">
            <div className="card-p">
                <p className="text">Current Password</p>
                <input className="data" type="password" name="first_name" id="firstname" placeholder="Current Password"  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            <div className="card-p">
                <p className="text">New password</p>
                <input className="data" type="password" name="first_name" id="firstname" placeholder="New Password"  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
           
            <div className="card-p">
                <p className="text">Confirm Password</p>
                <input className="data" type="Password" name="first_name" id="firstname" placeholder="Confirm Password" />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <center>
            <input type="submit" value="Update" className="update-btn" />
            &nbsp;&nbsp;&nbsp;
            <input type="Reset" value="Clear" className="reset1-btn" />
            </center>
            </form>
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <p>Basic Details</p>
            </div>
          </div>

          <form className="charts__right__cardss">
            <div className="card-p">
                <p className="text">Full Name</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Full Name" value="Ayaha Ifra"  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            <div className="card-p">
                <p className="text">Address</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Address" value="No.65, Kottegoga Road, weligama."  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
           
            <div className="card-p">
                <p className="text">NIC</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="NIC" value="97799541V"  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Date of Birth</p>
                <input className="data" type="" Value="15/10/1997" name="first_name" id="firstname" placeholder="DOB"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" Value="0767333799" name="first_name" id="firstname" placeholder="DOB"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Email</p>
                <input className="data" type="Email" Value="abc@gmail.com" name="first_name" id="firstname" placeholder="DOB"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <div className="card-p">
                <p className="text">Gender</p>
                <input className="data" type="text" Value="Female" name="first_name" id="firstname" placeholder="DOB"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <center>
            <input type="submit" value="Update" className="update-btn" />
            &nbsp;&nbsp;&nbsp;
            <input type="Reset" value="Clear" className="reset1-btn" />
            </center>
          </form>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
  </div>
);

}
export default AdminSettings;