import React, {useState, useEffect} from 'react';
import '../../App.css';
import './../../BranchManager/Dashboard.css';
import './../../BranchManager/Profile.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';

const AdminSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getData, setGetData] = useState([]);
  const[state, setState] = useState({
    
    username: sessionStorage.getItem('username'),
    fullName:'',
    nid: '',
    registerDate: '',
    moNumber: '',
    branch: '',
    empid: '',
    
    
}); 

const[newPassword, setNewPassword] = useState({
    
  username: sessionStorage.getItem('username'),
  password: '',
  password2: '',
  password3: ''
  
}); 



  const openSidebar = () => {
     setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
 };

 useEffect(()=>{
  axios.get('http://localhost:8080/drivelearn/settingProfile/'+sessionStorage.getItem('username'))
  .then(response =>{
    setGetData(response.data)
    console.log(response.data);

    setState({
    fullName:response.data.fullName,
    nid: response.data.nid,
    username: sessionStorage.getItem('username'),
    registerDate: response.data.registerDate,
    moNumber: response.data.moNumber,
    branch: response.data.branch,
    empid:response.data.empid,
    
    })
  })


  
 },[]);

 const handleChange = (e) => {
  setState({
      ...state,
      [e.target.name]: e.target.value
  }) 

}

const handleSubmit = (e) =>{
  e.preventDefault()
  axios.post('http://localhost:8080/drivelearn/settingMyProfile',state)
  console.log(state);
 
}

const handleChangePassword = (e) => {
  setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value
  }) 

}

const handleSubmitPassword = (e) =>{
  e.preventDefault()
  axios.post('http://localhost:8080/drivelearn/settingMyProfilePassword',newPassword)
  
 
}

 
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
           <form className="charts__right__cardss" onSubmit={handleSubmitPassword}>
            <div className="card-p">
                <p className="text">Current Password</p>
                <input className="data" type="password" name="password" id="firstname" placeholder="Current Password" value={newPassword.password} onChange={handleChangePassword}/>
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            <div className="card-p">
                <p className="text">New password</p>
                <input className="data" type="password" name="password2" id="firstname" placeholder="New Password" value={newPassword.password2} onChange={handleChangePassword}/>
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
           
            <div className="card-p">
                <p className="text">Confirm Password</p>
                <input className="data" type="Password" name="password3" id="firstname" placeholder="Confirm Password" value={newPassword.password3} onChange={handleChangePassword}/>
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

          <form className="charts__right__cardss" onSubmit={handleSubmit}>
            <div className="card-p">
                <p className="text">Full Name</p>
                <input className="data" type="text" name="fullName" id="firstname" placeholder="Full Name" value={state.fullName} onChange={handleChange}  required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            {/* <div className="card-p">
                <p className="text">Address</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Address" value="No.65, Kottegoga Road, weligama."  /> */}
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            {/* </div> */}
           
            <div className="card-p">
                <p className="text">NIC</p>
                <input className="data" type="text" name="nid" id="firstname" placeholder="NIC" value={state.nid} onChange={handleChange}  required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Registered Date</p>
                <input className="data" type="" name="registerDate" id="firstname" placeholder="DOB"  value={getData.registerDate} required/>
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" name="moNumber" id="firstname" placeholder="DOB"  value={state.moNumber} onChange={handleChange}  required/>
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
          
            <div className="card-p">
                <p className="text">Branch</p>
                <select className="data" type="text"  name="branch" id="firstname" placeholder="DOB"  value={state.branch} onChange={handleChange}  required >
                <option value ="mathugama">mathugama</option>
                <option value ="kaluthatara">kaluthatara</option>
                <option value ="Aluthgama">Aluthgama</option>
                </select>
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