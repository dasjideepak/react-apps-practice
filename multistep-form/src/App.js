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

      // user data
      userDetails: {
        // 1st
        username: "",
        bio: "",
        image: "",
        email: "",
        phone: "",

        // 2nd
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",

        // 3rd
        school: "",
        college: "",
        postGraduatation: "",

        // 4th
        notifPref: "",
        newsletter: "",
      },

      // error messages
      errors: {
        userNameValidationMsg: "",
        bioValidationMsg: "",
        imageValidationMsg: "",
        emailValidationMsg: "",
        phoneValidationMsg: "",

        firstNameValidationMsg: "",
        lastNameValidationMsg: "",
        addressValidationMsg: "",
        cityValidationMsg: "",
        stateValidationMsg: "",
        zipcodeValidationMsg: "",
        countryValidationMsg: "",

        schoolValidationMsg: "",
        collegeValidationMsg: "",
        postGraduatationValidationMsg: "",

        notifPrefValidationMsg: "",
        newsletterValidationMsg: "",
      },
    };
  }

  // handle previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: +step - 1 });
  };

  // handle next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: +step + 1 });
  };

  // handle input change
  inputChange = ({ target: { name, value } }) => {
    const { userDetails } = this.state;
    this.setState({ userDetails: { ...userDetails, [name]: value } });
    this.handleValidation(name, value);
  };

  // handle validation
  handleValidation = (name, value) => {
    if (name === "username") {
      this.usernameValidate(value);
    }
  };

  // username validation
  usernameValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, userNameValidationMsg: "Can't be blank" },
      });
    } else if (value.length >= 6) {
      this.setState({ errors: { ...errors, userNameValidationMsg: "" } });
    } else {
      this.setState({
        errors: {
          ...errors,
          userNameValidationMsg: "Minimum six characters are required",
        },
      });
    }
  };

  render() {
    const { step, userDetails, errors } = this.state;

    const values = {
      step,
      userDetails,
    };

    switch (step) {
      case 1:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <Profile
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values.userDetails}
              errors={errors}
            />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <PersonalInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              values={values.userDetails}
              errors={errors}
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
              inputChange={this.inputChange}
              values={values.userDetails}
              errors={errors}
            />
          </div>
        );

      case 4:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <Notification
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              values={values.userDetails}
              errors={errors}
            />
          </div>
        );

      default:
        return (
          <div className="container">
            <StepBar activeStep={step} />
            <Profile
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values.userDetails}
              errors={errors}
            />
          </div>
        );
    }
  }
}
