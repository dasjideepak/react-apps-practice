import React, { Component } from "react";
import Buttons from "./Buttons";

export default class Qualifications extends Component {
  render() {
    const {
      values,
      inputChange,
      prevStep,
      nextStep,
      step,
      errors,
    } = this.props;
    return (
      <form className="flex-column">
        <input
          type="text"
          name="school"
          className={`input ${
            errors.schoolValidationMsg ? "red-border" : false
          }`}
          placeholder="Enter your school details"
          onChange={inputChange}
          value={values.school}
          required
        />
        <span className="err-msg">{errors.schoolValidationMsg}</span>
        <input
          type="text"
          name="college"
          className={`input ${
            errors.collegeValidationMsg ? "red-border" : false
          }`}
          placeholder="Enter your college details"
          onChange={inputChange}
          value={values.college}
          required
        />
        <span className="err-msg">{errors.collegeValidationMsg}</span>
        <input
          type="text"
          name="postGraduatation"
          className={`input ${
            errors.postGraduatationValidationMsg ? "red-border" : false
          }`}
          placeholder="Enter your post graduation details"
          onChange={inputChange}
          value={values.postGraduatation}
          required
        />
        <span className="err-msg">{errors.postGraduatationValidationMsg}</span>
        <Buttons prevStep={prevStep} nextStep={nextStep} step={step} />
      </form>
    );
  }
}
