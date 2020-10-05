import React, { Component } from "react";

export default class StepBar extends Component {
  render() {
    const { activeStep } = this.props;
    return (
      <div className="flex steps-bar">
        {activeStep === 1 ? (
          <div className="items-center justify-center flex-column step active-step">
            <h5>1</h5>
            <h5>Profile</h5>
          </div>
        ) : (
          <div className="items-center justify-center flex-column step">
            <h5>1</h5>
            <h5>Profile</h5>
          </div>
        )}

        {activeStep === 2 ? (
          <div className="items-center justify-center flex-column step active-step">
            <h5>2</h5>
            <h5>Personal Info</h5>
          </div>
        ) : (
          <div className="items-center justify-center flex-column step">
            <h5>2</h5>
            <h5>Personal Info</h5>
          </div>
        )}

        {activeStep === 3 ? (
          <div className="items-center justify-center flex-column step active-step">
            <h5>3</h5>
            <h5>Qualifications</h5>
          </div>
        ) : (
          <div className="items-center justify-center flex-column step">
            <h5>3</h5>
            <h5>Qualifications</h5>
          </div>
        )}

        {activeStep === 4 ? (
          <div className="items-center justify-center flex-column step active-step">
            <h5>4</h5>
            <h5>Notification</h5>
          </div>
        ) : (
          <div className="items-center justify-center flex-column step">
            <h5>4</h5>
            <h5>Notification</h5>
          </div>
        )}
      </div>
    );
  }
}
