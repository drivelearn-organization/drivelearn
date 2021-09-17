import React, {useEffect, useState} from 'react';
import './../BranchManager/managerMain.css';
import Chart from './adminChart';
import {Base} from './../base';
import axios from 'axios';

const AdminMain = ({getData}) => {

  
   return(
    <main>
    <div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        <img src="images/adminPic.png" alt="" />
        <div className="main__greeting">
          <h1>DriveLEARN</h1>
          <p>Administrator</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE -->

      <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">
        <div className="card">
          <i
            className="fa fa-users fa-2x text-black;"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Students</p>
            <span className="font-bold text-title">{getData.studentCount}</span>
          </div>
        </div>
        <div className="card">
          <i
            className="fa fa-user-circle-o fa-2x text-black"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Branch Managers</p>
            <span className="font-bold text-title">{getData.branchManagerCount}</span>
          </div>
        </div>
        <div className="card">
          <i className="fa fa-user-secret fa-2x text-black" aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text-primary-p">Instructors</p>
            <span className="font-bold text-title">{getData.insructorCount}</span>
          </div>
        </div>

        <div className="card">
          <i
            className="fa fa-bus fa-2x text-black"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Vehicles</p>
            <span className="font-bold text-title">{getData.vehiclelistCount}</span>
          </div>
        </div>
      </div>
      {/* <!-- MAIN CARDS ENDS HERE -->

      <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Statistical Chart</h1>
              <p>DriveLEARN</p>
            </div>
          </div>
          <Chart />
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Income</h1>
              <p>DriveLEARN</p>
            </div>
           
          </div>

          <div className="charts__right__cards">
            <div className="card1">
              <h1>Today</h1>
              <p>LKR {getData.paymentDetailsCount3}</p>
            </div>

            <div className="card2">
              <h1>Last 7 days</h1>
              <p>LKR {getData.paymentDetailsCount}</p>
            </div>

            <div className="card3">
              <h1>Last 30 days</h1>
              <p>LKR {getData.paymentDetailsCount1}</p>
            </div>

            <div className="card4">
              <h1>Last 365 days</h1>
              <p>LKR {getData.paymentDetailsCount2}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  </main>
   )

}

export default AdminMain;