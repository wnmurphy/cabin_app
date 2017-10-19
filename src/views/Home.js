import React, { Component } from 'react';
import cabin from './../img/cabin.jpg';
class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h1>Welcome!</h1>
        <p>This is the Delore Cabin web app.</p>
        <p>It consolidates all cabin-related information, including:</p>
        <ul>
          <li>procedures for opening and closing the cabin</li> 
          <li>fun things to do while you're up there</li>
          <li>things that need to be fixed</li>
          <li>stuff that we might need to buy (like antifreeze)</li> 
          <li>general notes</li>
          <li>info on current conditions (weather forecasts, local webcams, etc.)</li>
        </ul>
        <img className="cabin-photo" src={cabin} alt="Photo of cabin in winter."/>
      </div>
    )
  }
}

export default Home;