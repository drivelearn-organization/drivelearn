import React, {useEffect, useState} from 'react';
import '../../App.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';

const AdminEmployeeReaquest = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [getData, setGetData] = useState([]);
    const [active, setActive] = useState(false);
  
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };

   const[state, setState] = useState({
   
    empid: ''
  
});

// const handleSetActive = (e) => {
//     setActive(!active) 
  
//   }

const handleChange = () => {
  alert("Are you sure");
}

//    const handleSubmit = (state) =>{
//     // e.preventDefault()
//     // setState({
//     //   empid:id
//     // })
//     axios.post('http://192.168.56.1:8080/drivelearn/activeEmployee',state)    
    
//    console.log(state)
// }

   useEffect(()=>{
    axios.get('http://localhost:8080/drivelearn/deactiveEmployee')
    .then(response =>{
      setGetData(response.data)
      console.log(getData);
    })
    axios.post('http://192.168.56.1:8080/drivelearn/activeEmployee',state)  
    console.log(state);
   });
  
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
         <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                <h1>Manage Branch Managers</h1>
                <p>DriveLEARN</p>
                </div>
            </div>
            <br/><br/>
            <div className="table_responsive">
            
            <div className="search"> 
            <form action="" >
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
                 <input type="text" className="input" placeholder="Search" name="fullName" />
                 <i className="fas fa-search" ></i>
                </div>
                </div>
                </form>
                 <div className="create-button">
                   <div className="create_btn">
                     <a href="./adminaddmanager"><i className="fa fa-plus-circle"></i></a>
                     <br/>
                     <p>Add managers</p>
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
                
                 
                  return(
                  
                  <tr>
                    
                     <td>{data.count}</td>
                     <td>{data.fullName}</td>
                     <td>No.65, Kottegoda, Weligama.</td>
                     <td>{data.nid}</td>
                     <td>{data.moNumber}</td>
                     <td>
                     <span className="action_btn">
                     
                        <a href="#" className="eye" onClick = {()=>{ setState({empid:data.empid}); handleChange(); }}>Activate</a>
                     {/* <a href="#" className="trash"><i className="fa fa-trash"></i></a> */}
                     </span>
                     </td>
                  </tr>
                  
                  
                )
                
              })
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
  
  export default AdminEmployeeReaquest;