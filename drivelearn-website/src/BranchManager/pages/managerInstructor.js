import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';


const ManagerInstructors = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [instructorState,setInstructor] = useState([]);

    useEffect(()=>{
      getInstructor();
    }, []);
  
    const getInstructor=()=>{
      axios
      .get("http://localhost:8080/drivelearn/employee")
      .then(data=>{
        setInstructor(data.data)
      })
    }

    console.log(instructorState.data);

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
                <h1>Manage Instructors</h1>
                <p> Kalutara Branch</p>
                </div>
            </div>
            <br/><br/>
            <div class="table_responsive">
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
                     <a href="./manageraddinstructor"><i className="fa fa-plus-circle"></i></a>
                     <br/>
                     <p>Add instructors</p>
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
               {
             instructorState.map(d =>(
               

                <tr>
                  
                   <td>{d.count}</td>
                   <td>{d.fullName}</td>
                   <td>No.65, Kottegoda, Weligama.</td>
                   <td>{d.nid}</td>
                   <td>{d.moNumber}</td>
                   <td>
                   <span className="action_btn">
                   <a href={'./managerviewinstructor/'+ d.empid} className="eye"><i className="fa fa-eye"></i></a>
                   <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                   </span>
                   </td>
                </tr>

              
              
             ))
           }
               
             </tbody>
            </table>
            </div> 
        </div>
      </main>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
  
  }
  
  export default ManagerInstructors;