import React, {useState} from 'react';
import '../../App.css';
import './../managerViewStudent.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';


const ManagerAddInstructors = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    
  
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };
  
   const submit = e =>{
    
    let name = e.target[0].value;
    let address = e.target[1].value;
    let nid = e.target[2].value;
    let Dob = e.target[3].value;
    let contact = e.target[4].value;
    let email = e.target[5].value;
    let gender = e.target[6].value;
    
    

    let data= {
      name,
      address,
      nid,
      Dob,
      contact,
      email,
      gender

    };
  
  console.log(data);
 // postInstructor(data);

   }

   /*const postInstructor=(data)=>{
    axios
    .post("http://localhost:8080/vehicle/",data)
    .then(d=>{
      console.log(d);
    })
  } */
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
         <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                <h1>Add Instructor</h1>
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

          <form className="charts__rightt__cardss" 
          
          onSubmit={e=>{
            e.preventDefault();
            submit(e);
          }}

          >
            <div className="card-p">
                <p className="text">Full Name</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Full Name" value="" required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            
            <div className="card-p">
                <p className="text">Address</p>
                <input className="data" type="text" name="first_name" id="firstname" placeholder="Address" value="" required />
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
                <p className="text">Date of Birth</p>
                <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="Date of Birth" required  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
         
            <div className="card-p">
                <p className="text">Mobile</p>
                <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Mobile" required  />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
          
            <div className="card-p">
                <p className="text">Email</p>
                <input className="data" type="Email" Value="" name="first_name" id="firstname" placeholder="Email"  required />
                {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <div className="card-p">
                <p className="text">Gender</p>
                <select className="option1" name="Register_as" required>
                <option disabled="disabled" selected="selected">--Choose Option--</option>
                <option>Male</option>
                <option>Female</option>
               </select>
            </div>
            <center>
            <input type="submit" value="Add" className="update-btn" />
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
  
  export default ManagerAddInstructors;