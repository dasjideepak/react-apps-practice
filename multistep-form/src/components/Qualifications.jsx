import React, { Component } from "react";
import Buttons from "./Buttons";

export default class Qualifications extends Component {
  render() {
    const { values, inputChange, prevStep, nextStep } = this.props;
    return (
      <form className="flex-column">
        <input
          type="text"
          name="school"
          placeholder="Enter your school details"
          onChange={inputChange}
          value={values.school}
          required
        />
        <input
          type="text"
          name="college"
          placeholder="Enter your college details"
          onChange={inputChange}
          value={values.college}
          required
        />
        <input
          type="text"
          name="postGraduatation"
          placeholder="Enter your post graduation details"
          onChange={inputChange}
          value={values.postGraduatation}
          required
        />
        <Buttons prevStep={prevStep} nextStep={nextStep} step={values.step} />
      </form>
    );
  }
}
