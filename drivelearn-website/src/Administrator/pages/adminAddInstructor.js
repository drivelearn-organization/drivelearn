import React, {useState} from 'react';
import '../../App.css';
import './../../BranchManager/managerViewStudent.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';
import Errorbox from './errorbox';
import SuccessfulyMsgBox from './successfulyMsgBox'
import {Base} from './../../base';
const AdminAddInstructors = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [errMsg, seterrMsg] = useState({
      errorMsg: ''
    });
    const [toggle, settoggle] = useState(false);
    const [Msg, setMsg] = useState({
      errorMsg: ''
    });
  
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };

   const[state, setState] = useState({
    moNumber:'',
    fullName: '',
    username: '',
    password: '',
    branch: '',
    nid: '',
    role: 2
});

const handleChange = (e) => {
  setState({
      ...state,
      [e.target.name]: e.target.value
  }) 

}

const handleSubmit = (e) =>{
  e.preventDefault()
  axios.post(Base+'/drivelearn/addInstructors',state)
  .then(response => {
      
    if(response.data === "Added Successfully")
    {
      console.log(response.data);
      settoggle(true);
      setMsg({
        errorMsg: response.data
      })
      window.location = '/adminmanager';
    }else{
     
      setModal(true);
      seterrMsg({
        errorMsg: response.data
      })
    }
  })
  console.log(state);
 
}
  
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
      {modal && <Errorbox closeModal={setModal} errorMsg={errMsg}/>}
      {toggle && <SuccessfulyMsgBox closeModal={settoggle} errorMsg={Msg}/>}
         <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                <h1>Add Instructor</h1>
                <p>DriveLEARN</p>
                </div>
            </div>
          <center>
          <div className="charts__rightt">
          <div className="charts__right__title">
            <div>
              <p>Basic Details</p>
            </div>
          </div>

          <form className="charts__rightt__cardss" onSubmit={handleSubmit}>
            <div className="card-p">
                <p className="text">Full Name</p>
                <input className="data" type="text" name="fullName" id="firstname" placeholder="Full Name" value={state.fullName} onChange={handleChange} required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
           
           
            <div className="card-p">
                <p className="text">NIC</p>
                <input className="data" type="text" name="nid" id="firstname" placeholder="NIC" value={state.nid} onChange={handleChange} required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
           
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" name="moNumber" id="firstname" placeholder="Mobile" value={state.moNumber} onChange={handleChange} required  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>


            <div className="card-p">
                <p className="text">Username</p>
                <input className="data" type="text" id="firstname" placeholder="Username" name="username" value={state.username} onChange={handleChange}  required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <div className="card-p">
                <p className="text">Password</p>
                <input className="data" type="password"  name="password" id="firstname" placeholder="******" value={state.password} onChange={handleChange} required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
           

            <div className="card-p">
                <p className="text">Branch</p>
                <select className="option1" name="branch" onChange={handleChange} required>
                <option disabled="disabled" selected="selected">--Choose Option--</option>
                <option value ="mathugama">mathugama</option>
                <option value ="kaluthatara">kaluthatara</option>
                <option value ="Aluthgama">Aluthgama</option>
               </select>
            </div>
            <center>
            <input type="submit" value="Add" className="update-btn" />
            &nbsp;&nbsp;&nbsp;
            <input type="Reset" value="RESET" className="reset1-btn" />
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
  
  export default AdminAddInstructors;