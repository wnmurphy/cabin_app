import React, { Component } from 'react';
import Form from './Form.js';
import axios from 'axios';


class Maintenance extends Component {

  constructor() {
    super()
    this.state = {
      tasks : []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/maintenance`)
      .then(res => {
        const tasks = res.data;
        console.log(tasks);
        this.setState({ tasks });
      });
  } 

  render() {
    return (
      <div className="maintenance">
        <h1>Maintenance</h1>
        <p>This is the Maintenance List.</p>
        <p>Stuff that needs to get done.</p>
        <Form formThing={["something around the cabin that needs love and care.","task"]} endpoint={"/maintenance"} />
        <div className="maintenance-list">
          {this.state.tasks.map((task, idx) =>
            <div key={idx}>{task}</div>
          )}
        </div>
      </div>
    )
  }

}

export default Maintenance;