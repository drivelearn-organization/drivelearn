import React, {useState} from 'react';
import '../../App.css';
import './../../BranchManager/Dashboard.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import AdminMain from './../adminMain';

const Administrator = () => {
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
      <AdminMain />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

  </div>
);

}

export default Administrator;