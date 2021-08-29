import React, {useState} from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';


const ManagerVehicle = () => {
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
                <h1>Manage Vehicles</h1>
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
                 <div className="create-button">
                   <div className="create_btn">
                     <a href="./manageraddvehicle"><i className="fa fa-plus-circle"></i></a>
                     <br/>
                     <p>Add vehicle</p>
                   </div>
                </div>
               </div>
              
            <br/>
            <table>
              <thead>
                  <tr>
                  <th>Reg No</th>
                  <th>Chassis No</th>
                  <th>Starting Miles(km)</th>
                  <th>Vehicle Type</th>
                  <th>License expire</th>
                  <th>Insurance expire</th>
                  <th>Action</th>
                 </tr>
             </thead>

             <tbody>
                <tr>
                     <td>01</td>
                     <td>HR 3323</td>
                     <td>25000</td>
                     <td>Car</td>
                     <td>2021/10/01</td>
                     <td>2022/09/01</td>
                     <td>
                     <span className="action_btn">
                     <a href="./managerupdatevehicle" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
                </tr>

                <tr>
                     <td>02</td>
                     <td>HR 3323</td>
                     <td>25000</td>
                     <td>Car</td>
                     <td>2021/10/01</td>
                     <td>2022/09/01</td>
                     <td>
                     <span className="action_btn">
                     <a href="./managerupdatevehicle" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
                </tr>

                <tr>
                     <td>03</td>
                     <td>HR 3323</td>
                     <td>25000</td>
                     <td>Car</td>
                     <td>2021/10/01</td>
                     <td>2022/09/01</td>
                     <td>
                     <span className="action_btn">
                     <a href="./managerupdatevehicle" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
                </tr>

                
               
             </tbody>
            </table>
            </div> 
        </div>
      </main>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
  
  }
  
  export default ManagerVehicle;