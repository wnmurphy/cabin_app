import React, { Component } from 'react';
import Form from './Form.js';
import axios from 'axios';

class Activities extends Component {
  constructor() {
    super()
    this.state = {
      activities : []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/activities`)
      .then(res => {
        const activities = res.data;
        console.log(activities);
        this.setState({ activities });
      });
  } 

  render() {
    return (
      <div className="activities">
        <h1>Activities</h1>
        <p>This is the Activities List.</p>
        <p>Stuff to do around the cabin.</p>
        <ul>
          {this.state.activities.map((activity, idx) => 
            <li key={idx}>{activity}</li>
          )}
        </ul>
        <Form formThing={["an activity to do in the area.","activity"]} endpoint={"/activities"} />

      </div>
    )
  }
}



export default Activities;