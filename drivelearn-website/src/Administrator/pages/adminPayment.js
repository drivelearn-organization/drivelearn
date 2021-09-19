import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../../BranchManager/Table.css';
import '../../BranchManager/filterButton.css';
import Navbar from '../../BranchManager/Navbar';
import Sidebar from '../adminSidebar';
import axios from 'axios';
import ManagerNewUpdatePayment from "../../BranchManager/pages/managerNewUpdatePayment ";
import { Base } from './../../base';


const AdminPayment = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paymentState, setPayementState] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [search, getSearch] = useState("");
  const [dropdown, getdrop] = useState("Student Id");

  const toggleModal = (id, name, nic, amount, rest, paymentId) => {
    setData(
      {
        id: id,
        name: name,
        nic: nic,
        amount: amount,
        rest: rest,
        paymentId: paymentId

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

  useEffect(() => {
    getPayment();
  }, []);

  const getPayment = () => {
    axios
      .get(Base + "/payment/getallpayment/1/" + sessionStorage.getItem('branchId'))
      .then(data => {
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
        <div className="main__container" style={{zIndex: "2"}}>
          <div className="main__title">
            <div className="main__greeting">
              <h1>Manage Payment</h1>
              <p> {sessionStorage.getItem('branchName')} Branch</p>
            </div>
          </div>
          <br /><br />
          <div className="table_responsive">
            <div className="search" >
              <div className="search_box " style={{zIndex: "3"}}>


                <select id="dropdown" className="drop-down" onChange={e => {
                  getdrop(e.target.value);
                }}>

                  <option className="option-style" value="Student Id">Student Id</option>
                  <option className="option-style" value="Name">Name</option>

                </select>


                <div className="search_field search-drop">
                  <input type="text" className="input" placeholder="Search" onChange={(e) => {
                    getSearch(e.target.value);
                  }} />
                  <i className="fas fa-search"></i>
                </div>
              </div>
              {/* <div className="create-button">
                <div className="create_btn">
                  <a href="./manageraddvehicle"><i className="fa fa-plus-circle"></i></a>
                  <br />
                  <p>Add vehicle</p>
                </div>
              </div> */}
            </div>


            {modal && (
              <div className="modal" style={{zIndex: "4"}}>
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <ManagerNewUpdatePayment data={data} toggleModal={toggleModal} />

                </div>
              </div>
            )}


            <br />
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

                  paymentState.filter((value)=>{
                    console.log(dropdown);
                    if(search===""){
                      return value;
                    }else if(value.userId.toString().toLowerCase().includes(search.toLowerCase()) && dropdown.includes("Student Id")){
                      return value;
                    }else if(value.name.toString().toLowerCase().includes(search.toLowerCase()) && dropdown.includes("Name")){
                      return value;
                    }
                  }).map(d => (




                    <tr>

                      <td>{d.userId}</td>
                      <td>{d.nic}</td>
                      <td>{d.name}</td>
                      <td>{d.date}</td>
                      <td>{d.amount}</td>
                      <td>{d.amount - d.rest}</td>
                      <td>{d.rest}</td>
                      <td>
                        <div className="create_btn">
                          <a onClick={() => {
                            toggleModal(d.userId, d.name, d.nic, d.amount, d.rest, d.paymentId)
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

export default AdminPayment;