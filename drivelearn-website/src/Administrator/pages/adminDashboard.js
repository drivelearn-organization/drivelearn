import React, {useEffect, useState} from 'react';
import '../../App.css';
import './../../BranchManager/Dashboard.css';
import Navbar from './../../BranchManager/Navbar';
import Sidebar from './../adminSidebar';
import AdminMain from './../adminMain';
import {Base} from './../../base';
import axios from 'axios';
const Administrator = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
     setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
 };

 const [getData, setGetData] = useState([]);
 const [getMonthData, setGetMonthData] = useState([]);

  useEffect(()=>{
    axios.get(Base+'/drivelearn/branchDetails')
    .then(response =>{
      setGetData(response.data)
      console.log(getData);
    })

    axios.get(Base+'/drivelearn/monthDetails')
    .then(response =>{
      setGetMonthData(response.data)
      
    })
    
   },[]);
 
return (
  <div className="container">
     
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <AdminMain getData ={getData} getMonthData={getMonthData}/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

  </div>
);

}

export default Administrator;