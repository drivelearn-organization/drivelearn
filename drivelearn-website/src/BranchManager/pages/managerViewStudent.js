import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import Errorbox from './../../Administrator/pages/errorbox';
import SuccessfulyMsgBox from './../../Administrator/pages/successfulyMsgBox'

const ManagerViewStudents = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getData, setGetData] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [modal, setModal] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [Msg, setMsg] = useState({
      errorMsg: ''
  });
  
  const [errMsg, seterrMsg] = useState({
      errorMsg: ''
  });
  const[state, setState] = useState({
    name:'',
    address: '',
    username: '',
    contact: '',
    stuID: '',
    branch: '',
    nid:'',
    dob:'',
    count:'',
    password:'',
    
}); 



  const openSidebar = () => {
     setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
 };

 useEffect(()=>{
  axios.get('http://localhost:8080/drivelearn/student/'+props.match.params.id)
  .then(response =>{
    // setGetData(response.data)
    

    setState({
    name:response.data.name,
    address: response.data.address,
    username: response.data.username,
    contact: response.data.contact,
    stuID: response.data.stuID,
    branch: response.data.branch,
    nid:response.data.nid,
    dob:response.data.dob,
    count:response.data.count,
    password:response.data.password,
    
    })
    console.log(state)
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
  axios.post('http://localhost:8080/drivelearn/updateStudent',state)
  .then(response => {
      
    if(response.data === "update successfully")
    {
      console.log(response.data);
      settoggle(true);
      setMsg({
        errorMsg: response.data
      })
      window.location = '/managerstudent';
      
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
              <h1>View Student</h1>
              <p> DriveLEARN</p>
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
              <input className="data" type="text" name="name" id="firstname" placeholder="Full Name" value={state.name} onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
          
          <div className="card-p">
              <p className="text">Address</p>
              <input className="data" type="text" name="address" id="firstname" value={state.address} onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
         
          <div className="card-p">
              <p className="text">NIC</p>
              <input className="data" type="text" name="nid" id="firstname" placeholder="NIC" value={state.nid} onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
        
          <div className="card-p">
              <p className="text">Date of Birth</p>
              <input className="data" type="date" Value={state.dob} name="dob" id="firstname" placeholder="DOB" onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>
       
          <div className="card-p">
              <p className="text">Mobile</p>
              <input className="data" type="text" Value={state.contact} name="contact" id="firstname" placeholder="DOB" onChange={handleChange}  required/>
              {/* <div class="alert-danger" id="firstNameError">
                 * First name can't be empty and must contain only letters
              </div> */}
          </div>

          <div className="card-p">
              <p className="text">Branch</p>
              <select className="data" type="text" Value={state.branch} name="branch" id="firstname" placeholder="DOB" onChange={handleChange}  required>
              <option value ="mathugama">mathugama</option>
              <option value ="kaluthatara">kaluthatara</option>
              <option value ="Aluthgama">Aluthgama</option>
              </select>
          </div>
        
          
          
          <center>
          <input type="submit" value="Update" className="update-btn" disabled={disabled} style = {{ opacity: disabled ? "0.7":"1"}}/>
          &nbsp;&nbsp;&nbsp;
          <input type="submit" value="Deactivate" className="reset1-btn" />
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
  
  export default ManagerViewStudents;