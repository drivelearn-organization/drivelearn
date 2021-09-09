import React, {useState} from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';


const ManagerStudents = () => {
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
            <div className="main__title">
                <div className="main__greeting">
                <h1>Add Payment</h1>
                <p> Kalutara Branch</p>
                </div>
            </div>
            <br/><br/>
            <div className="table_responsive">
              <div className="search"> 
               <div className="search_box">
                 <div className="dropdown">
                   <div className="default_option">All</div>  
                   {/* <ul>
                         <li>All</li>
                         <li>Recent</li>
                         <li>Popular</li>
                       </ul> */}
                   </div>
                 <div className="search_field">
                 <input type="text" className="input" placeholder="Search" />
                 <i className="fas fa-search"></i>
                </div>
                </div>

               </div>
              
            <br/>
            <table>
              <thead>
                  <tr>
                  <th>Reg No</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>NIC</th>
                  <th>Mobile</th>
                  <th>Action</th>
                 </tr>
             </thead>

             <tbody>
                <tr>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>No.65, Kottegoda, Weligama.</td>
                     <td>977411236V</td>
                     <td>0767112341</td>
                     <td>
                     <span className="action_btn">
                     
                     <input type="checkbox" />
                     </span>
                     </td>
                </tr>

                
               
             </tbody>
            </table>
            </div> 
        </div>




        <div className="table_responsive"> 
         <form className="charts__rightt__cardss">
                <div className="card-p">
                  <p className="text">Student Name</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Student Name" value="" required />
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
                  <p className="text">Date</p>
                  <input className="data" type="date" name="first_name" id="firstname" placeholder="Date" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Course Fee</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Cource fee" value="" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Amount</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Amount" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

               

                <center>
                  <input type="submit" value="Add" className="update-btn" />
                  &nbsp;&nbsp;&nbsp;
                  <input type="Reset" value="Cancle" className="reset1-btn" />
                </center>
              </form>
        
        </div>
      </main>

      
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
  
  }
  
  export default ManagerStudents;