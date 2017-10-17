import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './views/NavBar.js'
import Activities from './views/Activities.js'
import Conditions from './views/Conditions.js'
import Home from './views/Home.js'
import Instructions from './views/Instructions.js'
import Maintenance from './views/Maintenance.js'
import Notes from './views/Notes.js'
import Shopping from './views/Shopping.js'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title"><a href="/">The Delore Cabin</a></h1>
          <NavBar/>
        </div>
        
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/instructions" component={Instructions}/>
            <Route path="/activities" component={Activities}/>
            <Route path="/maintenance" component={Maintenance}/>
            <Route path="/shopping" component={Shopping}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/conditions" component={Conditions}/>
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
