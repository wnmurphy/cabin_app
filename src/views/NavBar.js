import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <ul>
        <li className="nav-item"><a href="/instructions">Open/Close the Cabin</a></li>
        <li className="nav-item"><a href="/notes">Gen. Info</a></li>
        <li className="nav-item"><a href="/activities">Activities</a></li>
        <li className="nav-item"><a href="/maintenance">Maintenance</a></li>
        <li className="nav-item"><a href="/shopping">Shopping List</a></li>
        <li className="nav-item"><a href="/conditions">Conditions</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;

/*

*/