import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserInfo } from "./userinfo";

class App extends Component {
  render() {
    return (
      <div>
        <UserInfo />
      </div>
    );
  }
}

export default App;
