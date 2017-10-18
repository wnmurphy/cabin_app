import React, { Component } from 'react';

class Form extends Component {

  render() {
    let thingText = this.props.formThing[0];
    let thing = this.props.formThing[1];
    return (
      <div className="comment-form">
        <form action="http://localhost:8000/activities" method="post">
          <label htmlFor={thing}>{"What " + thing + " would you like to add?"}</label>
          <textarea name={thing} required placeholder={`Enter  ${thingText}`} rows="15" cols="50"/>
          <input type="submit" value={`Add ${thing}`}/>
        </form>
      </div>
    )
  }
}

export default Form;

/*
  <Form formThing={["an item that the cabin needs or could use.", "item"]} endpoint={"/maintenance"}/>
  <Form formThing={"an activity to do in the area."} endpoint={"/activities"}/>
  <Form formThing={"a maintenance item."} endpoint={"/maintenance"}/>
  <Form formThing={"a new note."} endpoint={"/notes"}/>
*/