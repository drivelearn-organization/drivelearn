import './managerMain.css';
import Chart from './managerBar';
import {Bar} from 'react-chartjs-2';

const ManagerMain = ({getData,getMonthData}) => {
   return(
    <main>
    <div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        <img src="images/hello.png" alt="" />
        <div className="main__greeting">
          <h1>DriveLEARN</h1>
          <p> {sessionStorage.getItem('branchName')} Branch</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE -->

      <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">
        <div className="card">
          <i
            className="fa fa-users fa-2x text-black"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Students</p>
            <span className="font-bold text-title">{getData.studentCoun}</span>
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

        {/* <div className="card">
          <i
            className="fa fa-bell fa-2x text-black"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Notifications</p>
            <span className="font-bold text-title">645</span>
          </div>
        </div> */}
      </div>
      {/* <!-- MAIN CARDS ENDS HERE -->

      <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Available Training Sessions</h1>
              <p>DriveLEARN, {sessionStorage.getItem('branchName')}</p>
            </div>
            {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
          </div>

          <Chart getMonthData={getMonthData}/>
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Branch Income</h1>
              <p>DriveLEARN, Kalutara</p>
            </div>
            {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
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

export default ManagerMain;