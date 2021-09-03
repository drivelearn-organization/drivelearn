import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';


const ManagerVehicle = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [paymentState , setPayementState] = useState([]);

    useEffect(()=>{
      getPayment();
    }, []);

    const getPayment=()=>{
      axios
      .get("http://localhost:8080/vehicle/getvehicle/1/1")
      .then(data =>{
        setPayementState(data.data);
        

      })
    }

  
  
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
                <h1>Manage Payment</h1>
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
                     <a href="./manageraddpayment"><i className="fa fa-plus-circle"></i></a>
                     <br/>
                     <p>Add Payemnt</p>
                   </div>
                </div>
               </div>
              
            <br/>
            <table>
              <thead>
                  <tr>
                  <th>Student Id</th>
                  <th>NIC</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Course Fee</th>
                  <th>Paid Amount</th>
                  <th>Rest Amount</th>
                  <th>Update</th>
                  
                 </tr>
             </thead>

             <tbody>
             {
              
              paymentState.map(d =>(
               
                
                  
                  
                  <tr>
                    
                     <td>{d.regiNumner}</td>
                     <td>{d.chacieNumber}</td>
                     <td>2021-04-11</td>
                     <td>{d.startingMilage}</td>
                     <td>{d.vehicleType}</td>
                     <td>{d.licenceExpireDate}</td>
                     <td>{d.expireDate}</td>
                     <td>
                   <div className="create_btn">
                     <a href="./managerupdatepayment"><i className="fa fa-plus-circle"></i></a>
                    
                
                   </div>
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
  
  export default ManagerVehicle;