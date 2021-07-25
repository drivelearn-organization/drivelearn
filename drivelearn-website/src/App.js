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
import ManagerInstructors from './BranchManager/pages/managerInstructor';
import AdminStudents from './Administrator/pages/adminStudent';
import AdminInstructors from './Administrator/pages/adminInstructor';
import AdminManagers from './Administrator/pages/adminManager';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/admin' component={Administrator} />
          <Route path='/branchmanager' component={BranchManager} />
          <Route path='/managersettings' component={ManagerSettings} />
          <Route path='/adminsettings' component={AdminSettings} />
          <Route path='/managerstudent' component={ManagerStudents} />
          <Route path='/managerinstructor' component={ManagerInstructors} />
          <Route path='/adminstudent' component={AdminStudents} />
          <Route path='/admininstructor' component={AdminInstructors} />
          <Route path='/adminmanager' component={AdminManagers} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
