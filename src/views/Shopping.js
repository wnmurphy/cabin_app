import React, { Component } from 'react';
import Form from './Form.js';

class Shopping extends Component {

  constructor() {
    super()
    this.state = {
      items : []
    }
  }

  render() {
    return (
      <div className="shopping">
        <h1>Shopping</h1>
        <p>This is the Shopping List.</p>
        <p>Things to buy for the cabin.</p>
        <Form formThing={["something we need to buy for the cabin.","item"]} endpoint={"/shopping"} />
      </div>
    )
  }

}

export default Shopping;