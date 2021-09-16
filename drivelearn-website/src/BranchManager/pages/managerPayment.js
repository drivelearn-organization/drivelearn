import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../Table.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import ManagerNewUpdatePayment from "./managerNewUpdatePayment ";


const ManagerVehicle = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [paymentState , setPayementState] = useState([]);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);

    const toggleModal = (id, name, nic, amount,rest,paymentId) => {
      setData(
        {
          id: id,
          name: name,
          nic: nic,
          amount: amount,
          rest:rest,
          paymentId:paymentId
  
        }
      );
  
      setModal(!modal);
    };
  
    console.log(data);
  
  
  
    if (modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    useEffect(()=>{
      getPayment();
    }, []);

    const getPayment=()=>{
      axios
      .get("http://localhost:8080/payment/getallpayment/1/"+ sessionStorage.getItem('branchId'))
      .then(data =>{
        setPayementState(data.data.reverse());
        

      })
    }

    
  
    const openSidebar = () => {
       setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
   };
  console.log(paymentState);
   
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
         <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                <h1>Manage Payment</h1>
                <p> {sessionStorage.getItem('branchName')} Branch</p>
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
              

               {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <ManagerNewUpdatePayment data={data} toggleModal={toggleModal} />

                </div>
              </div>
            )}


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
                    
                     <td>{d.userId}</td>
                     <td>{d.nic}</td>
                     <td>{d.name}</td>
                     <td>{d.date}</td>
                     <td>{d.amount}</td>
                     <td>{d.amount-d.rest}</td>
                     <td>{d.rest}</td>
                     <td>
                   <div className="create_btn">
                     <a  onClick={() => {
                        toggleModal(d.userId, d.name, d.nic, d.amount,d.rest,d.paymentId)
                      }}><i className="fa fa-plus-circle"></i></a>
                    
                
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