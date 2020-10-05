import React, { Component } from "react";
import Buttons from "./Buttons";

export default class PersonalInfo extends Component {
  render() {
    const { values, inputChange, prevStep, nextStep } = this.props;
    return (
      <form className="flex-column">
        <input
          type="text"
          name="firstname"
          placeholder="Enter your firstname"
          onChange={inputChange}
          value={values.firstname}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Enter your lastname"
          onChange={inputChange}
          value={values.lastname}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          onChange={inputChange}
          value={values.address}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          onChange={inputChange}
          value={values.city}
          required
        />
        <input
          type="number"
          name="zipCode"
          placeholder="Enter your zip code"
          onChange={inputChange}
          value={values.zipCode}
          required
        />
        <input
          type="number"
          name="state"
          placeholder="Enter your state"
          onChange={inputChange}
          value={values.state}
          required
        />
        <select name="country" onChange={inputChange} value={values.country}>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Japan">Japan</option>
          <option value="Russia">Russia</option>
        </select>
        <Buttons prevStep={prevStep} nextStep={nextStep} step={values.step} />
      </form>
    );
  }
}
