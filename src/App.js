import React, { Component } from 'react';
import './App.css';
import NavBar from './views/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CabinApp</h1>
        </header>
        <div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
