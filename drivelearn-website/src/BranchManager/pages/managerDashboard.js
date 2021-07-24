import React, {useState} from 'react';
import '../../App.css';
import './../Dashboard.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import ManagerMain from '../managerMain';

const BranchManager = () => {
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
      <ManagerMain/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
  </div>
);

}

export default BranchManager;