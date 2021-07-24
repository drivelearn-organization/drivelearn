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
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
