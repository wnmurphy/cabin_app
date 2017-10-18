import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <ul>
        <li className="nav-item"><a href="/instructions">Open/Close the Cabin</a></li>
        <li className="nav-item"><a href="/activities">Stuff to Do</a></li>
        <li className="nav-item"><a href="/maintenance">Stuff to Fix</a></li>
        <li className="nav-item"><a href="/shopping">Stuff to Buy</a></li>
        <li className="nav-item"><a href="/notes">Notes</a></li>
        <li className="nav-item"><a href="/conditions">Conditions</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;

/*

*/