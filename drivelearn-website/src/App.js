import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './HomePage/pages/Home';
// import Footer from './homePage/Footer';
import Login from './HomePage/pages/Login';
import Signup from './HomePage/pages/Signup';
import Administrator from './Administrator/pages/adminDashboard';
import BranchManager from './BranchManager/pages/managerDashboard';
import ManagerSettings from './BranchManager/pages/managerSetting';
import AdminSettings from './Administrator/pages/adminSetting';
import ManagerStudents from './BranchManager/pages/managerStudent';
import ManagerNotifications from './BranchManager/pages/managerNotification';
import ManagerInstructors from './BranchManager/pages/managerInstructor';
import AdminStudents from './Administrator/pages/adminStudent';
import AdminInstructors from './Administrator/pages/adminInstructor';
import AdminManagers from './Administrator/pages/adminManager';
import ManagerViewStudents from './BranchManager/pages/managerViewStudent';
import ManagerViewInstructors from './BranchManager/pages/managerViewInstructor';
import AdminViewStudents from './Administrator/pages/adminViewStudent';
import AdminViewInstructors from './Administrator/pages/adminViewInstructor';
import AdminViewManagers from './Administrator/pages/adminViewManager';
import ManagerAddStudents from './BranchManager/pages/managerAddStudent';
import ManagerAddInstructors from './BranchManager/pages/managerAddInstructor';
import AdminAddStudents from './Administrator/pages/adminAddStudent';
import AdminAddInstructors from './Administrator/pages/adminAddInstructor';
import AdminAddManagers from './Administrator/pages/adminAddManager';
import AdminVehicle from './BranchManager/pages/managerVehicle';
import ManagerAddVehicle from './BranchManager/pages/managerAddVehicle';
import ManagerUpdateVehicle from './BranchManager/pages/managerUpdateVehicle';
import ManagerSession from './BranchManager/pages/managerSession';
import ManagerAddSession from './BranchManager/pages/managerAddSession';
import ManagerUpdateSession from './BranchManager/pages/managerUpdateSession';
import ManagerPayment from './BranchManager/pages/managerPayment';
import ManagerAddPayment from './BranchManager/pages/manageAddPayment';
import ManagerUpdatePayment from './BranchManager/pages/managerUpdatePayment';
import AdminEmployeeReaquest from './Administrator/pages/adminEmployeeReaquest';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/administrator' exact component={Administrator} />
          <Route path='/branchmanager' exact component={BranchManager} />
          <Route path='/managersettings' exact component={ManagerSettings} />
          <Route path='/adminsettings' exact component={AdminSettings} />
          <Route path='/managerstudent' exact component={ManagerStudents} />
          <Route path='/managernotification' exact component={ManagerNotifications} />
          <Route path='/managerinstructor' exact component={ManagerInstructors} />
          <Route path='/adminstudent' exact component={AdminStudents} />
          <Route path='/admininstructor' exact component={AdminInstructors} />
          <Route path='/adminmanager' exact component={AdminManagers} />
          <Route path='/managerviewstudent' exact component={ManagerViewStudents} />
          <Route path='/managerviewinstructor' exact component={ManagerViewInstructors} />
          <Route path='/adminviewstudent/:id' exact component={AdminViewStudents} />                                    
          <Route path='/adminviewinstructor/:id' exact component={AdminViewInstructors} />
          <Route path='/adminviewmanager/:id' exact component={AdminViewManagers} />
          <Route path='/manageraddstudent' exact component={ManagerAddStudents} />
          <Route path='/manageraddinstructor' exact component={ManagerAddInstructors} />
          <Route path='/adminaddstudent' exact component={AdminAddStudents} />
          <Route path='/adminaddinstructor' exact component={AdminAddInstructors} />
          <Route path='/adminaddmanager' exact component={AdminAddManagers} />
          <Route path='/adminvehicle' exact component={AdminVehicle} />
          <Route path='/manageraddvehicle' exact component={ManagerAddVehicle} />
          <Route path='/managerupdatevehicle' exact component={ManagerUpdateVehicle} />
          <Route path='/managersession' exact component={ManagerSession} />
          <Route path='/manageraddsession' exact component={ManagerAddSession} />
          <Route path='/managerupdatesession' exact component={ManagerUpdateSession} />
          <Route path='/managerpayment' exact component={ManagerPayment} />
          <Route path='/manageraddpayment' exact component={ManagerAddPayment} />
          <Route path='/managerupdatepayment' exact component={ManagerUpdatePayment} />    
          <Route path='/adminEmployeeReaquest' exact component={AdminEmployeeReaquest} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;