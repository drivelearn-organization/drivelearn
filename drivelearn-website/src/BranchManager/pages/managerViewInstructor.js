import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import Errorbox from './../../Administrator/pages/errorbox';
import SuccessfulyMsgBox from './../../Administrator/pages/successfulyMsgBox'
import {Base} from './../../base';
const ManagerViewInstructors = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getData, setGetData] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [modal, setModal] = useState(false);
  const [Msg, setMsg] = useState({
    errorMsg: ''
  });

  const [errMsg, seterrMsg] = useState({
    errorMsg: ''
  });


  const[state, setState] = useState({
    fullName:'',
    nid: '',
    registerDate: '',
    moNumber: '',
    branch: '',
    empid: ''
    
    
    
});



  const openSidebar = () => {
     setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
 };

 useEffect(()=>{
  axios.get(Base+'/drivelearn/trainer/'+props.match.params.id)
  .then(response =>{
    setGetData(response.data)
    setState({
      fullName:response.data.fullName,
      nid: response.data.nid,
      registerDate: response.data.registerDate,
      moNumber: response.data.moNumber,
      branch: response.data.branch,
      empid: response.data.empid
     
      
      })
    console.log(getData);
  })
  
  
 },[]);

 const handleChange = (e) => {
  setState({
      ...state,
      [e.target.name]: e.target.value
  }) 
  setDisabled(false);
}

const handleSubmit = (e) =>{
  e.preventDefault()
  axios.post(Base+'/drivelearn/updateEmployee',state)
  .then(response => {
      
    if(response.data === "Update successfully")
    {
      console.log(response.data);
      settoggle(true);
      setMsg({
        errorMsg: response.data
      })
      window.location = '/managerinstructor';
      
    }else{
     
      setModal(true);
      seterrMsg({
        errorMsg: response.data
      })
    }
  })
 
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
              <h1>View Instructor</h1>
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

        <form className="charts__rightt__cardss" onSubmit={handleSubmit}>
          <div className="card-p">
              <p className="text">Full Name</p>
              <input className="data" type="text" name="fullName" id="firstname" placeholder="Full Name" value={state.fullName} onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
          
         
          <div className="card-p">
              <p className="text">NIC</p>
              <input className="data" type="text" name="nid" id="firstname" placeholder="NIC" value={state.nid}  onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
        
          <div className="card-p">
              <p className="text">Registered Date</p>
              <input className="data" type="" name="registerDate" id="firstname" placeholder="DOB"  value={getData.registerDate}/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
       
          <div className="card-p">
              <p className="text">Mobile</p>
              <input className="data" type="text" name="moNumber" id="firstname" placeholder="DOB"  value={state.moNumber}  onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
        
          
          <div className="card-p">
              <p className="text">Branch</p>
              <select className="data" type="text"  name="branch" id="firstname" placeholder="DOB" value={state.branch}  onChange={handleChange}  required>
              <option value ="mathugama">mathugama</option>
              <option value ="kaluthatara">kaluthatara</option>
              <option value ="Aluthgama">Aluthgama</option>
              </select>
          </div>
          <center>
          <input type="submit" value="Update" className="update-btn" disabled={disabled} style = {{ opacity: disabled ? "0.7":"1"}}/>
          &nbsp;&nbsp;&nbsp;
          <input type="Reset" value="Clear" className="reset1-btn" />
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
  
  export default ManagerViewInstructors;


  