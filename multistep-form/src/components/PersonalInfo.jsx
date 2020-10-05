import React, { Component } from "react";
import StepBar from "./StepBar";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <StepBar />
        <h1>PersonalInfo</h1>
        <div className="buttons-container ">
          <button onClick={this.props.prev}>Previous</button>
          <button onClick={this.props.next}>Next</button>
        </div>
      </div>
    );
  }
}

// Personal Info
// firstname, secondname, address, city, zip code, country
