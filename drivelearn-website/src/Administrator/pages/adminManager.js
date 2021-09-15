import React, {useEffect, useState} from 'react';
import '../../App.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import axios from 'axios';
import Popup from './Popup';

const AdminStudents = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [getData, setGetData] = useState([]);
    const[deactivate, setDeactivate] = useState({
      empid: '' 
  });
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };

   const[state, setState] = useState({
   
    fullName: ''
  
});

const handleChangeActiveStatus = () => {
  
  setModal(true);
}

const handleChange = (e) => {
  setState({
      ...state,
      [e.target.name]: e.target.value
  }) 

}

   const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://192.168.56.1:8080/drivelearn/serchEmployee',state)    
    .then(response =>{
      setGetData(response.data)
      
    })
   
}

   useEffect(()=>{
    axios.get('http://localhost:8080/drivelearn/employee')
    .then(response =>{
      setGetData(response.data)
      console.log(getData);
    })
    // axios.post('http://192.168.56.1:8080/drivelearn/deactiveEmployee',deactivate)
   },[]);
  
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
      {modal && <Popup closeModal={setModal} empid={deactivate} location='/adminmanager'/>}
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
            <form action="" onSubmit={handleSubmit}>
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
                 <input type="text" className="input" placeholder="Search" name="fullName"  onChange={handleChange}/>
                 <i className="fas fa-search" onSubmit={handleSubmit}></i>
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
                     <a href={'./adminviewmanager/'+ data.empid} className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash" onClick = {()=>{ setDeactivate({empid:data.empid}); handleChangeActiveStatus(); }}><i className="fa fa-trash"></i></a>
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
  
  export default AdminStudents;