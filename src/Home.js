import React, { Component } from 'react';
import './App.css';
import WelcomeText from './WelcomeText'
import logo from './images/Jojoheadlogo.jpeg';
import logo1 from './images/super-jojo.png';
import logo2 from './images/jojoglasses.jpg';
import CorgiCircle from './CorgiCircle'

class Home extends Component {

  render() {
    var name = "hey"
  // let logo1 = {logo1}
    return (
      <div className="App">
        <header className="App-header">
          <CorgiCircle corgImages={[logo, logo1, logo2]} />
          <p>
            <WelcomeText />, <strong>motha puppers!</strong> {name}
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

  }
}

export default Home;
