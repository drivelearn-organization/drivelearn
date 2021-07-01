import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './homePage/pages/Home';
import About from './homePage/pages/About';
import Contacts from './homePage/pages/Contacts';
import SignUp from './homePage/pages/SignUp';
import Company from './homePage/pages/Company';
import Footer from './homePage/Footer';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/company' component={Company} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
