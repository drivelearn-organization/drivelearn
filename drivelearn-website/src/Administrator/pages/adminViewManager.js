import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../../BranchManager/managerViewStudent.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';

const AdminViewManagers = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [getData, setGetData] = useState([]);
  
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };
  
   useEffect(()=>{
    axios.get('http://localhost:8080/drivelearn/employee/'+props.match.params.id)
    .then(response =>{
      setGetData(response.data)
      console.log(getData);
    })
    
   },[]);

  //  const handleChange = (e) => {
  //   setState({
  //       ...state,
  //       [e.target.name]: e.target.value
  //   }) 
 
  // }

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   axios.post('http://localhost:8080/drivelearn/updateEmployee',state)
  //   console.log(state);
   
  // }
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
         <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                <h1>View Branch Managers</h1>
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

          <form className="charts__rightt__cardss">
            <div className="card-p">
                <p className="text">Full Name</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Full Name" value={getData.fullName} />
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
                <input className="data" type="text" name="first_name" id="firstname" placeholder="NIC" value={getData.nid}  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Registered Date</p>
                <input className="data" type="" Value="15/10/1997" name="first_name" id="firstname" placeholder="DOB"  value={getData.registerDate} />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" Value="0767333799" name="first_name" id="firstname" placeholder="DOB"  value={getData.moNumber} />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Email</p>
                <input className="data" type="Email" Value="abc@gmail.com" name="first_name" id="firstname" placeholder="DOB"  value={getData.branch} />
              
            </div>
            <div className="card-p">
                <p className="text">Branch</p>
                <input className="data" type="text" Value="Female" name="first_name" id="firstname" placeholder="DOB"  value={getData.branch} />
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
        </center>
        </div>
      </main>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
  
  }
  
  export default AdminViewManagers;