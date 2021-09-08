import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../../BranchManager/managerViewStudent.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';

const AdminViewStudents = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [getData, setGetData] = useState([]);

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
      password2:'',
      password3:''
  }); 

  const handleChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    }) 
 
}

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(state);
   
}
  
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
      password2:response.data.password2,
      password3:response.data.password3
      })
      console.log(state)
    })

  
    
   },[]);

 
  
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
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
                <input className="data" type="text" name="name" id="firstname" placeholder="Full Name" value={state.name} onChange={handleChange} />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            <div className="card-p">
                <p className="text">Address</p>
                <input className="data" type="text" name="address" id="firstname" value={state.address}   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
           
            <div className="card-p">
                <p className="text">NIC</p>
                <input className="data" type="text" name="nid" id="firstname" placeholder="NIC" value={state.nid}  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Date of Birth</p>
                <input className="data" type="" Value={state.dob} name="dob" id="firstname" placeholder="DOB"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" Value={state.contact} name="contact" id="firstname" placeholder="DOB"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>

            <div className="card-p">
                <p className="text">Branch</p>
                <input className="data" type="text" Value={state.branch} name="branch" id="firstname" placeholder="DOB"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            {/* <div className="card-p">
                <p className="text">Email</p>
                <input className="data" type="Email" Value="abc@gmail.com" name="first_name" id="firstname" placeholder="DOB"   /> */}
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            {/* </div> */}
            
            <center>
            <input type="submit" value="Update" className="update-btn" />
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
  
  export default AdminViewStudents;