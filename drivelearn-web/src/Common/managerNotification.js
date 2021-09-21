import React, {useState} from 'react';
import '../../App.css';
import './../managerNotification.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';


const ManagerNotifications = () => {
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
                <h1>Manage Notifications</h1>
                <p> Kalutara Branch</p>
                </div>
            </div>
            <br/><br/>
            <div className="table_responsive">
            <form>
                <div className="message">
                   <p>Message</p>
                   <br/>
                   <input placeholder="Title" className="title"></input>
                   <br/>
                   <textarea placeholder="Description" className="description"></textarea>
                   <br/>
                   <input type="submit" value="Add" className="add-btn" />
              <br/><br/>
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
                            <label className="select-all"><p>Select all</p>
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                          </label>
                        </div>
                      <br/><br/>
                      <p>Students</p>
                     
                      <br/>
            <table>
              <thead>
                  <tr>
                      <th>Select</th>
                      <th>Reg No</th>
                      <th>Full Name</th>
                      <th>NIC</th> 
                 </tr>
             </thead>

             <tbody>
                <tr>
                     <td>
                          <input type="checkbox" checked="checked" />
                          <span className="checkmarks"></span>
                      </td>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>977411236V</td>
                </tr>
                <tr>
                     <td>
                          <input type="checkbox" checked="checked" />
                          <span className="checkmarks"></span>
                      </td>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>977411236V</td>
                </tr>
                <tr>
                     <td>
                          <input type="checkbox" checked="checked" />
                          <span className="checkmarks"></span>
                      </td>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>977411236V</td>
                </tr>
                <tr>
                     <td>
                          <input type="checkbox" checked="checked" />
                          <span className="checkmarks"></span>
                      </td>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>977411236V</td>
                </tr>              
             </tbody>
            </table>
            <br/>
            <input type="submit" value="Send" className="add-btn" />
            </div>
         </form> 
         <br/><br/>
         <hr/>
         <p>Sent Notifications</p>
         <br/>
         <table>
              <thead>
                  <tr>
                  <th>Reg No</th>
                  <th>Full Name</th>
                  <th>NIC</th>
                  <th>Title</th>
                  <th>Action</th>
                 </tr>
             </thead>

             <tbody>
                <tr>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>977411236V</td>
                     <td>Regarding Session 01</td>
                     <td>
                     <span className="action_btn">
                     <a href="./managerviewnotification" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
                </tr>

                <tr>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>977411236V</td>
                     <td>Regarding Session 01</td>
                     <td>
                     <span className="action_btn">
                     <a href="./managerviewnotification" className="eye"><i className="fa fa-eye"></i></a>
                     <a href="#" className="trash"><i className="fa fa-trash"></i></a>
                     </span>
                     </td>
                </tr>
      
                <tr>
                     <td>01</td>
                     <td>Aysha Ifra</td>
                     <td>977411236V</td>
                     <td>Regarding Session 01</td>
                     <td>
                     <span className="action_btn">
                     <a href="./managerviewnotification" className="eye"><i className="fa fa-eye"></i></a>
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
  
  export default ManagerNotifications;