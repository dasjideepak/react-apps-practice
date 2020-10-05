import React, { Component } from "react";

export default class Buttons extends Component {
  handleNext = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handlePrev = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { step } = this.props;
    switch (true) {
      case step === 1:
        return (
          <div className="buttons-container ">
            <button onClick={this.handleNext}>Next</button>
          </div>
        );
      case step > 1 && step < 4:
        return (
          <div className="buttons-container ">
            <button onClick={this.handlePrev}>Previous</button>
            <button onClick={this.handleNext}>Next</button>
          </div>
        );
      case step === 4:
        return (
          <div className="buttons-container ">
            <button onClick={this.handlePrev}>Previous</button>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        );
      default:
        return (
          <div className="buttons-container ">
            <button onClick={this.handleNext}>Next</button>
          </div>
        );
    }
  }
}
