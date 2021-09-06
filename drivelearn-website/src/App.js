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

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/administrator' component={Administrator} />
          <Route path='/branchmanager' component={BranchManager} />
          <Route path='/managersettings' component={ManagerSettings} />
          <Route path='/adminsettings' component={AdminSettings} />
          <Route path='/managerstudent' component={ManagerStudents} />
          <Route path='/managernotification' component={ManagerNotifications} />
          <Route path='/managerinstructor' component={ManagerInstructors} />
          <Route path='/adminstudent' component={AdminStudents} />
          <Route path='/admininstructor' component={AdminInstructors} />
          <Route path='/adminmanager' component={AdminManagers} />
          <Route path='/managerviewstudent/:id' component={ManagerViewStudents} />
          <Route path='/managerviewinstructor/:id' component={ManagerViewInstructors} />
          <Route path='/adminviewstudent/:id' component={AdminViewStudents} />                                    
          <Route path='/adminviewinstructor/:id' component={AdminViewInstructors} />
          <Route path='/adminviewmanager/:id' component={AdminViewManagers} />
          <Route path='/manageraddstudent' component={ManagerAddStudents} />
          <Route path='/manageraddinstructor' component={ManagerAddInstructors} />
          <Route path='/adminaddstudent' component={AdminAddStudents} />
          <Route path='/adminaddinstructor' component={AdminAddInstructors} />
          <Route path='/adminaddmanager' component={AdminAddManagers} />
          <Route path='/adminvehicle' component={AdminVehicle} />
          <Route path='/manageraddvehicle' component={ManagerAddVehicle} />
          <Route path='/managerupdatevehicle/:id' component={ManagerUpdateVehicle} />
          <Route path='/managersession' component={ManagerSession} />
          <Route path='/manageraddsession' component={ManagerAddSession} />
          <Route path='/managerupdatesession' component={ManagerUpdateSession} />
          <Route path='/managerpayment' component={ManagerPayment} />
          <Route path='/manageraddpayment' component={ManagerAddPayment} />
          <Route path='/managerupdatepayment' component={ManagerUpdatePayment} />
          

        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;