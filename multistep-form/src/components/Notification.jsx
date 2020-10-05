import React, { Component } from "react";
import StepBar from "./StepBar";

export default class Notification extends Component {
  render() {
    return (
      <div>
        <StepBar />
        <h1>Notification</h1>
        <div className="buttons-container ">
          <button onClick={this.props.prev}>Previous</button>
          <button onClick={this.props.next}>Confirm</button>
        </div>
      </div>
    );
  }
}

// notification
// notification preferences (checkbox) (daily, weekly, monthly)
// push notifications (radio) yes, no
