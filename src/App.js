import React, { Component } from 'react';
import './App.css';
import NavBar from './views/NavBar.js'
import Activities from './views/Activities.js'
import Conditions from './views/Conditions.js'
import Home from './views/Home.js'
import Instructions from './views/Instructions.js'
import Maintenance from './views/Maintenance.js'
import Shopping from './views/Shopping.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title"><a href="/">The Delore Cabin</a></h1>
        </header>

        <NavBar />
        
        <div className="Main">
          <Home/>
        </div>
        
      </div>
    );
  }
}

export default App;
