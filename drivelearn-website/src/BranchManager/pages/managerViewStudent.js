import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';


const ManagerViewStudents = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [stateStudent,getData] = useState([]);

  
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };


   useEffect(()=>{
     axios.get('http://localhost:8080/drivelearn/student/'+props.match.params.id)
     .then(d=>{
       getData(d.data);
      
     })
   },[])


   const putStudent=e=>{
    axios
    .put("http://localhost:8080/student/updatestudent",stateStudent)
    .then(d=>{
      props.history.push("/");
    })
  }

   
  console.log(stateStudent);
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
         <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                <h1>View Student</h1>
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

          <form className="charts__rightt__cardss" onSubmit={
                e=>{
                  
                  putStudent(e);
                }
              }
          >
            <div className="card-p">
                <p className="text">Full Name</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Full Name" value={stateStudent.name} onChange={e=>{
                  let value=e.target.value;
                  getData({
                    name: value,
                    address: stateStudent.address,
                    nid: stateStudent.nid,
                    dob: stateStudent.dob,
                    contact: stateStudent.contact,
                    branch: stateStudent.branch
                   } );
                }}  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            <div className="card-p">
                <p className="text">Address</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Address" value={stateStudent.address} onChange={e=>{
                  let value=e.target.value;
                  getData({
                    name: stateStudent.name,
                    address: value,
                    nid: stateStudent.nid,
                    dob: stateStudent.dob,
                    contact: stateStudent.contact,
                    branch: stateStudent.branch
                   } );
                }}  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
           
            <div className="card-p">
                <p className="text">NIC</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="NIC" value={stateStudent.nid}  onChange={e=>{
                  let value=e.target.value;
                  getData({
                    name: stateStudent.name,
                    address: stateStudent.address,
                    nid: value,
                    dob: stateStudent.dob,
                    contact: stateStudent.contact,
                    branch: stateStudent.branch
                   } );
                }} />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Date of Birth</p>
                <input className="data" type="date"  name="first_name" id="firstname" value={stateStudent.dob} placeholder="DOB"  onChange={e=>{
                  let value=e.target.value;
                  getData({
                    name: stateStudent.name,
                    address: stateStudent.address,
                    nid: stateStudent.nid,
                    dob: value,
                    contact: stateStudent.contact,
                    branch: stateStudent.branch
                   } );
                }}  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" name="first_name" id="firstname" value={stateStudent.contact} placeholder="DOB"  onChange={e=>{
                  let value=e.target.value;
                  getData({
                    name: stateStudent.name,
                    address: stateStudent.address,
                    nid: stateStudent.nid,
                    dob: stateStudent.dob,
                    contact: value,
                    branch: stateStudent.branch
                   } );
                }}  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            
            <div className="card-p">
                <p className="text">Branch</p>
                <input className="data" type="text" name="first_name" id="firstname" value={stateStudent.branch} placeholder="DOB" onChange={e=>{
                  let value=e.target.value;
                  getData({
                    name: stateStudent.name,
                    address: stateStudent.address,
                    nid: stateStudent.nid,
                    dob: stateStudent.dob,
                    contact: stateStudent.contact,
                    branch: value
                   } );
                }}   />
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
  
  export default ManagerViewStudents;