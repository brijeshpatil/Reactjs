import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Component/home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Portfolio</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about">Gallery</Link></li>
                <li><Link to="/about">Contact</Link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/about" component={Home}></Route>
        </Switch>
      </Router>
      <div class="jumbotron">
        <div class="container text-center">
          <h1>My Portfolio</h1>
          <p>Some text that represents "Me"...</p>
        </div>
      </div>

      <div class="container-fluid bg-3 text-center">
        <h3>Some of my Work</h3><br />
        <div class="row">


        </div>
        </div>
        <br /><br />

        <footer class="container-fluid text-center">
          <p>Footer Text</p>
        </footer>


      </div>
  );
}

export default App;
