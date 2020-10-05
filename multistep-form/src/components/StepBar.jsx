import React, { Component } from "react";

export default class StepBar extends Component {
  render() {
    return (
      <div className="flex steps-bar">
        <div className="items-center justify-center flex-column step">
          <h5>1</h5>
          <h5>Profile</h5>
        </div>
        <div className="items-center justify-center flex-column step">
          <h5>2</h5>
          <h5>Personal Info</h5>
        </div>
        <div className="items-center justify-center flex-column step">
          <h5>3</h5>
          <h5>Qualifications</h5>
        </div>
        <div className="items-center justify-center flex-column step">
          <h5>4</h5>
          <h5>Notification</h5>
        </div>
      </div>
    );
  }
}
