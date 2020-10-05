import React, { Component } from "react";
import Buttons from "./Buttons";

export default class Profile extends Component {
  render() {
    const { values, inputChange, prevStep, nextStep, errors } = this.props;
    return (
      <form className="flex-column">
        <input
          className={`input ${
            errors.userNameValidationMsg ? "red-border" : ""
          }`}
          type="text"
          name="username"
          placeholder="Enter your username (minimum 6 characters)"
          onChange={inputChange}
          value={values.username}
          required
        />
        <span className="err-msg">{errors.userNameValidationMsg}</span>
        <textarea
          name="bio"
          cols="30"
          rows="10"
          className={`textarea ${errors.bioValidationMsg ? "red-border" : ""}`}
          placeholder="Enter bio (minimum 150 letter)"
          onChange={inputChange}
          value={values.bio}
          required
        ></textarea>
        <span className="err-msg">{errors.bioValidationMsg}</span>
        <input
          type="file"
          name="image"
          className={`input ${errors.imageValidationMsg ? "red-border" : ""}`}
          required
        />
        <span className="err-msg">{errors.image}</span>
        <input
          type="email"
          name="email"
          className={`input ${errors.emailValidationMsg ? "red-border" : ""}`}
          placeholder="Enter your email"
          onChange={inputChange}
          value={values.email}
          required
        />
        <span className="err-msg">{errors.emailValidationMsg}</span>
        <input
          type="number"
          name="phone"
          className={`input ${errors.phoneValidationMsg ? "red-border" : ""}`}
          placeholder="Enter your phone"
          onChange={inputChange}
          value={values.phone}
          required
        />
        <span className="err-msg">{errors.phoneValidationMsg}</span>
        <Buttons prevStep={prevStep} nextStep={nextStep} step={values.step} />
      </form>
    );
  }
}
