import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './homePage/Navbar';
import Home from './homePage/pages/Home';
import About from './homePage/pages/About';
import Contacts from './homePage/pages/Contacts';
import SignUp from './homePage/pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
