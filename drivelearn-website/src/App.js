import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './homePage/pages/Home';
import About from './homePage/pages/About';
import Contacts from './homePage/pages/Contacts';
import MobileApp from './homePage/pages/MobileApp';
import Company from './homePage/pages/Company';
import Footer from './homePage/Footer';
import Login from './Registration-Login/page/Login';
import Registration from './Registration-Login/page/Registration';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/company' component={Company} />
          <Route path='/mobile-app' component={MobileApp} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Registration} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
