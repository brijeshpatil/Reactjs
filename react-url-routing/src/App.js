import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

//components
import Home from './common/home';
import Aboutus from './common/aboutus';
import Contactus from './common/contactus';
import Signin from './user/signin';
import Singup from './user/signup';
import Productlist from './product/productlist';
import Details from './product/details';

class App extends Component {
  render() {
    return (

      <div>

        <Router>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Logo</a>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/home' className="nav-link">Home</Link>

              </li>
              <li className="nav-item">
                <Link to='/contact-us' className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/products' className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to='/user/new' className="nav-link">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to='/user/existing' className="nav-link">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link to='/about-us' className="nav-link">About Us</Link>
              </li>


            </ul>
          </nav>

          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/about-us' component={Aboutus}></Route>
            <Route path='/contact-us' component={Contactus}></Route>
            <Route path='/products' component={Productlist}></Route>
            <Route path='/user/new' component={Singup}></Route>
            <Route path='/user/existing' component={Signin}></Route>
            <Route path='/product/:id' component={Details}></Route>
          </Switch>
        </Router>
      </div>


    );

  }
}

export default App;