import React, {useEffect, useState} from 'react';
import '../../App.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';

const AdminStudents = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [getData, setGetData] = useState([]);
    const [count, setCount] = useState({
      counter: 0
    });
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };

  
   useEffect(()=>{
    axios.get('http://localhost:8080/drivelearn/students')
    .then(response =>{
      setGetData(response.data)
      console.log(getData);
    })
    
   },[]);

  
   
  return (
    
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
         <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                <h1>Manage Students</h1>
                <p>DriveLEARN</p>
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
                     <a href="./adminaddstudent"><i className="fa fa-plus-circle"></i></a>
                     <br/>
                     <p>Add student</p>
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
              
              getData.map(data =>{
                if(data.name && data.address && data.nid && data.contact){
                 
                  return(
                  
                  <tr>
                    
                     <td>{data.count}</td>
                     <td>{data.name}</td>
                     <td>{data.address}</td>
                     <td>{data.nid}</td>
                     <td>{data.contact}</td>
                     <td>
                     <span className="action_btn">
                     <a href="./adminviewstudent" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
                </tr>

                )
                }
                
              })
             }
           
                
             
                {/* <tr>
                     <td>02</td>
                     <td>Aysha Ifra</td>
                     <td>No.65, Kottegoda, Weligama.</td>
                     <td>977411236V</td>
                     <td>0767112341</td>
                     <td>
                     <span className="action_btn">
                     <a href="#" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
               </tr>
      
               <tr>
                     <td>03</td>
                     <td>Aysha Ifra</td>
                     <td>No.65, Kottegoda, Weligama.</td>
                     <td>977411236V</td>
                     <td>0767112341</td>
                     <td>
                     <span className="action_btn">
                     <a href="#" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
               </tr>

               <tr>
                     <td>04</td>
                     <td>Aysha Ifra</td>
                     <td>No.65, Kottegoda, Weligama.</td>
                     <td>977411236V</td>
                     <td>0767112341</td>
                     <td>
                     <span className="action_btn">
                     <a href="#" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
               </tr>

               <tr>
                     <td>05</td>
                     <td>Aysha Ifra</td>
                     <td>No.65, Kottegoda, Weligama.</td>
                     <td>977411236V</td>
                     <td>0767112341</td>
                     <td>
                     <span className="action_btn">
                     <a href="#" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
               </tr>

               <tr>
                     <td>06</td>
                     <td>Aysha Ifra</td>
                     <td>No.65, Kottegoda, Weligama.</td>
                     <td>977411236V</td>
                     <td>0767112341</td>
                     <td>
                     <span className="action_btn">
                     <a href="#" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
               </tr> */}
               
             </tbody>
            </table>
            </div>
        </div>
      </main>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
  
  }
  
  export default AdminStudents;