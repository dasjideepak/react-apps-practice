import React, { Component } from "react";
import StepBar from "./StepBar";

export default class Qualifications extends Component {
  render() {
    return (
      <div>
        <StepBar />
        <h1>Qualifications</h1>
        <div className="buttons-container ">
          <button onClick={this.props.prev}>Previous</button>
          <button onClick={this.props.next}>Next</button>
        </div>
      </div>
    );
  }
}

// Qualifications
// school
// college
// pg
