import React, { Component } from "react";
import Buttons from "./Buttons";

export default class PersonalInfo extends Component {
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
          name="firstName"
          className={`input ${
            errors.firstNameValidationMsg ? "red-border" : ""
          }`}
          placeholder="Enter your firstname"
          onChange={inputChange}
          value={values.firstName}
          required
        />
        <span className="err-msg">{errors.firstNameValidationMsg}</span>
        <input
          type="text"
          name="lastName"
          className={`input ${
            errors.lastNameValidationMsg ? "red-border" : ""
          }`}
          placeholder="Enter your lastname"
          onChange={inputChange}
          value={values.lastName}
          required
        />
        <span className="err-msg">{errors.lastNameValidationMsg}</span>
        <input
          type="text"
          name="address"
          className={`input ${errors.addressValidationMsg ? "red-border" : ""}`}
          placeholder="Enter your address"
          onChange={inputChange}
          value={values.address}
          required
        />
        <span className="err-msg">{errors.addressValidationMsg}</span>
        <input
          type="text"
          name="city"
          className={`input ${errors.cityValidationMsg ? "red-border" : ""}`}
          placeholder="Enter your city"
          onChange={inputChange}
          value={values.city}
          required
        />
        <span className="err-msg">{errors.cityValidationMsg}</span>
        <input
          type="number"
          name="zipCode"
          className={`input ${errors.zipCodeValidationMsg ? "red-border" : ""}`}
          placeholder="Enter your zip code"
          onChange={inputChange}
          value={values.zipCode}
          required
        />
        <span className="err-msg">{errors.zipCodeValidationMsg}</span>
        <input
          type="text"
          name="state"
          className={`input ${errors.stateValidationMsg ? "red-border" : ""}`}
          placeholder="Enter your state"
          onChange={inputChange}
          value={values.state}
          required
        />
        <span className="err-msg">{errors.stateValidationMsg}</span>
        <select
          name="country"
          className={`input ${errors.countryValidationMsg ? "red-border" : ""}`}
          onChange={inputChange}
          value={values.country}
        >
          <option>Select</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Japan">Japan</option>
          <option value="Russia">Russia</option>
        </select>
        <span className="err-msg">{errors.countryValidationMsg}</span>
        <Buttons prevStep={prevStep} nextStep={nextStep} step={step} />
      </form>
    );
  }
}
