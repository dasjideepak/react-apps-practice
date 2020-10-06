import React, { Component } from "react";
import Buttons from "./Buttons";

export default class Notification extends Component {
  render() {
    const { values, inputChange, prevStep, nextStep, step } = this.props;
    return (
      <form className="flex-column">
        <label htmlFor="notifPref">Notification Preferences</label>
        <input
          type="checkbox"
          name="notifPref"
          onChange={inputChange}
          value={values.notifiPref}
          required
        />
        <label htmlFor="newsletter">Newsletter</label>
        <input
          type="radio"
          name="newsletter"
          onChange={inputChange}
          value={values.newsletter}
          required
        />

        <Buttons prevStep={prevStep} nextStep={nextStep} step={step} />
      </form>
    );
  }
}

// notification
// notification preferences (checkbox) (daily, weekly, monthly)
// push notifications (radio) yes, no
