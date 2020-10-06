import React from "react";
import StepBar from "./components/StepBar";
import Profile from "./components/Profile";
import PersonalInfo from "./components/PersonalInfo";
import Qualifications from "./components/Qualifications";
import Notification from "./components/Notification";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  prevStep = () => {
    const { step } = this.state;
    return this.setState({ step: +step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    return this.setState({ step: +step + 1 });
  };

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <Profile nextStep={this.nextStep} step={step} />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <PersonalInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              step={step}
            />
          </div>
        );

      case 3:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <Qualifications
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              step={step}
            />
          </div>
        );

      case 4:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <Notification
              prevStep={this.prevStep}
              step={step}
              nextStep={this.nextStep}
            />
          </div>
        );

      default:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <Profile nextStep={this.nextStep} step={step} />
          </div>
        );
    }
  }
}
