import React, { Component } from 'react';
import Form from './Form.js';


class Activities extends Component {

  render() {
    return (
      <div className="activities">
        <h1>Activities</h1>
        <p>This is the Activities List.</p>
        <p>Stuff to do around the cabin.</p>
        <Form formThing={["an activity to do in the area.","activity"]} endpoint={"/activities"} />
      </div>
    )
  }

}

export default Activities;