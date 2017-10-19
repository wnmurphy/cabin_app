import React, { Component } from 'react';
import Form from './Form.js';
import axios from 'axios';

class Shopping extends Component {

  constructor() {
    super()
    this.state = {
      items : []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/shopping`)
      .then(res => {
        const items = res.data;
        console.log(items);
        this.setState({ items });
      });
  } 

  render() {
    return (
      <div className="shopping">
        <h1>Shopping</h1>
        <p>This is the Shopping List.</p>
        <p>Things to buy for the cabin.</p>
        <Form formThing={["something we need to buy for the cabin.","item"]} endpoint={"/shopping"} />
        <div className="shopping-list">
          {this.state.items.map((item, idx) =>
            <div key={idx}>{item}</div>
          )}
        </div>
      </div>
    )
  }

}

export default Shopping;