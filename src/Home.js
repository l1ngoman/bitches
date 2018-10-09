import React, { Component } from 'react';
import './App.css';
import logo from './images/Jojoheadlogo.jpeg';

class Home extends Component {
  render() {
  //  alertMe();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome, <strong>motha puppers!</strong>
          </p>
          <a
            className="App-link"
            href="https://instagram.com/supercorgi_jojo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out JoJo
          </a>
        </header>
      </div>
    );
//    const alertMe = function() {alert("Hello there")};
  }
}

export default Home;
