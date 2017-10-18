import React, { Component } from 'react';
import Form from './Form.js';

class Maintenance extends Component {

  render() {
    return (
      <div className="maintenance">
        <h1>Maintenance</h1>
        <p>This is the Maintenance List.</p>
        <p>Stuff that needs to get done.</p>
        <Form formThing={["something around the cabin that needs love and care.","task"]} endpoint={"/maintenance"} />
      </div>
    )
  }

}

export default Maintenance;