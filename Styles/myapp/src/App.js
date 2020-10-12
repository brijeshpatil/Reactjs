import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './abc.css'
class App extends Component {
  render() {

    const myStyle = {
      color: "red",
      backgroundColor:"skyblue",
      padding:"10px"
    };
    return (
      <div>
        <h1 style={{ color: "red", backgroundColor: "blue" }}>HELLO</h1>
        <h1 style={myStyle}>TEST</h1>
      </div>
    )
  }
}

export default App;
