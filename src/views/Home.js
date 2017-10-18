import React, { Component } from 'react';
import cabin from './../img/cabin.jpg';
class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <p>This is the Home view.</p>
        <p>This is the welcome page, basically.</p>
        <img className="cabin-photo" src={cabin} alt="Photo of cabin in winter."/>
      </div>
    )
  }
}

export default Home;