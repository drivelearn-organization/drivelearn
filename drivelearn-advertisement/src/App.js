import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './homePage/pages/Home';
import About from './homePage/pages/About';
import Contacts from './homePage/pages/Contacts';
import MobileApp from './homePage/pages/MobileApp';
import Footer from './homePage/Footer';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/mobile-app' component={MobileApp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
