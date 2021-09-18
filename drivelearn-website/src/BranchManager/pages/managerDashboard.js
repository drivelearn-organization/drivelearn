import React, {useEffect, useState} from 'react';
import './../../App.css';
import './../Dashboard.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import ManagerMain from '../managerMain';
import {Base} from './../../base';
import axios from 'axios';

const BranchManager = () => {
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
    axios.get(Base+'/drivelearn/mybranchDetails/'+sessionStorage.getItem('branchId'))
    .then(response =>{
      setGetData(response.data)
      console.log(getData);
    })

    axios.get(Base+'/drivelearn/monthBranchDetails/'+sessionStorage.getItem('branchId'))
    .then(response =>{
      setGetMonthData(response.data)
      setGetMonthData(response.data)
      
    })
    
   },[]);
 
return (
  <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <ManagerMain getData ={getData} getMonthData={getMonthData}/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
  </div>
);

}

export default BranchManager;