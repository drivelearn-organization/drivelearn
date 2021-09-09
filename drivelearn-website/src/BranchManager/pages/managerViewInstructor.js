import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';


const ManagerViewInstructors = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [stateInstructor,getData] = useState([]);
  
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };
  
   useEffect(()=>{
    axios.get('http://localhost:8080/drivelearn/trainer/'+props.match.params.id)
    .then(d=>{
      getData(d.data);
     
    })
  },[])

  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
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

          <form className="charts__rightt__cardss">
            <div className="card-p">
                <p className="text">Full Name</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Full Name" value={stateInstructor.fullName} onChange={ e =>{
                    let value = e.target.value;
                    
                    getData({
                      fullName: stateInstructor.fullName,
                      nid: stateInstructor.nid,
                      registerDate: stateInstructor.registerDate,
                      moNumber: stateInstructor.moNumber,
                      chacieNumber: stateInstructor.chacieNumber,
                      licencePayedDate: stateInstructor.licencePayedDate,
                      licenceExpireDate: stateInstructor.licenceExpireDate,
                      payedDate: stateInstructor.payedDate,
                      expireDate: stateInstructor.expireDate
                      
                    });
                  }} />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            <div className="card-p">
                <p className="text">Address</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Address"  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
           
            <div className="card-p">
                <p className="text">NIC</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="NIC" value={stateInstructor.nid}  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Registered Date</p>
                <input className="data" type=""  name="first_name" id="firstname" placeholder="DOB"  value={stateInstructor.registerDate} />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="DOB" value={stateInstructor.moNumber} />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Email</p>
                <input className="data" type="Email" name="first_name" id="firstname" placeholder="Email"   />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <div className="card-p">
                <p className="text">Gender</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="DOB"  />
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
  
  export default ManagerViewInstructors;