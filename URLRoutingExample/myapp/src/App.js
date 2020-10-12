import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

import Home from "./Components/home"
import AboutUS from "./Components/about";
import ContactUS from "./Components/contactus";
import Technologies from "./Components/technologies";
import NotFound from './Components/notfound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/techs">Technologies</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/techs">Technologies</Link></li>
            <li><Link to="/about">About US</Link></li>
            <li><Link to="/contact">Contact US</Link></li> */}
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/techs" component={Technologies}></Route>
          <Route path="/about" component={AboutUS}></Route>
          <Route path="/contact" component={ContactUS}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;