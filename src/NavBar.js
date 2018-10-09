import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>
          <p>Bio</p>
        </div>
        <div>
          <p>Videos</p>
        </div>
        <div>
          <p>More pics</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
