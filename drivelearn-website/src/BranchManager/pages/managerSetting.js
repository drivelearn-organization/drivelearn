import React, {useState} from 'react';
import '../../App.css';
import './../Dashboard.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import ManagerProfile from '../managerProfile';

const ManagerSettings = () => {
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
      <ManagerProfile />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
  </div>
);

}

export default ManagerSettings;