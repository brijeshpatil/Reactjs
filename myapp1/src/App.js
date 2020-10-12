import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { AboutUS } from './common/aboutus'

class App extends Component
{
  render(){
    return(
        <div>
          <Router>
            <ul>
              <li>
                <link to='/about-us'>About US</link>
              </li>
            </ul>

        <Switch>
          <Route path='/about-us' component={ AboutUS }></Route>
        </Switch>

          </Router>
        </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//      <h1>This is my first app</h1>
//     </div>
//   );
// }

export default App;
