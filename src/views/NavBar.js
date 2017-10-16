import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <ul>
          <li class="nav-item">Instructions</li>
          <li class="nav-item">Activities</li>
          <li class="nav-item">Maintenance</li>
          <li class="nav-item">Shopping List</li>
          <li class="nav-item">General Notes</li>
          <li class="nav-item">Conditions</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;