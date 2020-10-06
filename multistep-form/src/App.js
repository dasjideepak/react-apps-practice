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
        username: "",
        bio: "",
        image: "",
        email: "",
        phone: "",

        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",

        school: "",
        college: "",
        postGraduatation: "",

        notifPref: "",
        newsletter: "",
      },

      errors: {
        userNameValidationMsg: "Can't be blank",
        bioValidationMsg: "Can't be blank",
        imageValidationMsg: "",
        emailValidationMsg: "Can't be blank",
        phoneValidationMsg: "Can't be blank",

        firstNameValidationMsg: "Can't be blank",
        lastNameValidationMsg: "Can't be blank",
        addressValidationMsg: "Can't be blank",
        cityValidationMsg: "Can't be blank",
        stateValidationMsg: "Can't be blank",
        zipCodeValidationMsg: "Can't be blank",
        countryValidationMsg: "Can't be blank",

        schoolValidationMsg: "Can't be blank",
        collegeValidationMsg: "Can't be blank",
        postGraduatationValidationMsg: "Can't be blank",

        notifPrefValidationMsg: "Can't be blank",
        newsletterValidationMsg: "Can't be blank",
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
    const { step, userDetails, errors } = this.state;
    const {
      username,
      bio,
      image,
      email,
      phone,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      country,
      school,
      college,
      postGraduatation,
    } = userDetails;

    const {
      userNameValidationMsg,
      bioValidationMsg,
      imageValidationMsg,
      emailValidationMsg,
      phoneValidationMsg,

      firstNameValidationMsg,
      lastNameValidationMsg,
      addressValidationMsg,
      cityValidationMsg,
      stateValidationMsg,
      zipCodeValidationMsg,
      countryValidationMsg,

      schoolValidationMsg,
      collegeValidationMsg,
      postGraduatationValidationMsg,
    } = errors;

    // validate on click
    if (step === 1) {
      this.usernameValidate(username);
      this.bioValidate(bio);
      this.imageValidate(image);
      this.emailValidate(email);
      this.phoneValidate(phone);

      userNameValidationMsg &&
      bioValidationMsg &&
      emailValidationMsg &&
      phoneValidationMsg
        ? this.setState({ step: step })
        : this.setState({ step: +step + 1 });
    } else if (step === 2) {
      this.firstNameValidate(firstName);
      this.lastNameValidate(lastName);
      this.addressValidate(address);
      this.cityValidate(city);
      this.stateValidate(state);
      this.zipCodeValidate(zipCode);
      this.countryValidate(country);

      firstNameValidationMsg &&
      lastNameValidationMsg &&
      addressValidationMsg &&
      cityValidationMsg &&
      stateValidationMsg &&
      zipCodeValidationMsg &&
      countryValidationMsg
        ? this.setState({ step: step })
        : this.setState({ step: +step + 1 });
    } else if (step === 3) {
      this.schoolValidate(school);
      this.collegeValidate(college);
      this.postGraduatationValidate(postGraduatation);

      schoolValidationMsg &&
      collegeValidationMsg &&
      postGraduatationValidationMsg
        ? this.setState({ step: step })
        : this.setState({ step: +step + 1 });
    } else {
      this.setState({ step: +step + 1 });
    }
  };

  // handle input change
  inputChange = ({ target: { name, value } }) => {
    const { userDetails } = this.state;
    this.setState({ userDetails: { ...userDetails, [name]: value } });
    this.handleValidation(name, value);
  };

  // handle validation
  handleValidation = (name, value) => {
    switch (name) {
      case "username":
        return this.usernameValidate(value);
      case "bio":
        return this.bioValidate(value);
      case "image":
        return this.imageValidate(value);
      case "email":
        return this.emailValidate(value);
      case "phone":
        return this.phoneValidate(value);
      case "firstName":
        return this.firstNameValidate(value);
      case "lastName":
        return this.lastNameValidate(value);
      case "address":
        return this.addressValidate(value);
      case "city":
        return this.cityValidate(value);
      case "state":
        return this.stateValidate(value);
      case "zipCode":
        return this.zipCodeValidate(value);
      case "country":
        return this.countryValidate(value);
      case "school":
        return this.schoolValidate(value);
      case "college":
        return this.collegeValidate(value);
      case "postGraduatation":
        return this.postGraduatationValidate(value);
      case "notifPref":
        return this.notifPrefValidate(value);
      case "newsletter":
        return this.newsletterValidate(value);
      default:
        break;
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

  // bio validation
  bioValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, bioValidationMsg: "Can't be blank" },
      });
    } else if (value.length >= 150) {
      this.setState({ errors: { ...errors, bioValidationMsg: "" } });
    } else {
      this.setState({
        errors: {
          ...errors,
          bioValidationMsg: "Minimum 150 characters are required",
        },
      });
    }
  };

  // img validate
  imageValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, imageValidationMsg: "Please choose an image" },
      });
    } else {
      this.setState({
        errors: {
          ...errors,
          imageValidationMsg: "",
        },
      });
    }
  };

  // email validate
  emailValidate = (value) => {
    const { errors } = this.state;
    var regex = /\S+@\S+\.\S+/;
    if (!value) {
      this.setState({
        errors: { ...errors, emailValidationMsg: "Can't be blank" },
      });
    } else if (regex.test(value)) {
      this.setState({ errors: { ...errors, emailValidationMsg: "" } });
    } else {
      this.setState({
        errors: {
          ...errors,
          emailValidationMsg: "Not a valid email",
        },
      });
    }
  };

  phoneValidate = (value) => {
    const { errors } = this.state;
    const startingDigit = value.trim().slice(0, 1);
    if (!value) {
      this.setState({
        errors: { ...errors, phoneValidationMsg: "Can't be blank" },
      });
    } else if (
      startingDigit <= 9 &&
      startingDigit >= 6 &&
      value.length === 10
    ) {
      this.setState({ errors: { ...errors, phoneValidationMsg: "" } });
    } else {
      this.setState({
        errors: {
          ...errors,
          phoneValidationMsg: "Not a valid contact number",
        },
      });
    }
  };

  // firstname validate
  firstNameValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, firstNameValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({ errors: { ...errors, firstNameValidationMsg: "" } });
    }
  };

  // lastname validate
  lastNameValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, lastNameValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({ errors: { ...errors, lastNameValidationMsg: "" } });
    }
  };

  // address validate

  addressValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, addressValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({ errors: { ...errors, addressValidationMsg: "" } });
    }
  };

  // city validate
  cityValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, cityValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({
        errors: {
          ...errors,
          cityValidationMsg: "",
        },
      });
    }
  };

  // state validate
  stateValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, stateValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({
        errors: {
          ...errors,
          stateValidationMsg: "",
        },
      });
    }
  };

  // zipCode validate
  zipCodeValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, zipCodeValidationMsg: "Can't be blank" },
      });
    } else if (value.length === 6) {
      this.setState({ errors: { ...errors, zipCodeValidationMsg: "" } });
    } else {
      this.setState({
        errors: {
          ...errors,
          zipCodeValidationMsg: "Not a valid input",
        },
      });
    }
  };

  // country validate
  countryValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: {
          ...errors,
          countryValidationMsg: "Please select at least on option",
        },
      });
    } else {
      this.setState({
        errors: {
          ...errors,
          countryValidationMsg: "",
        },
      });
    }
  };

  schoolValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, schoolValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({ errors: { ...errors, schoolValidationMsg: "" } });
    }
  };

  collegeValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, collegeValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({ errors: { ...errors, collegeValidationMsg: "" } });
    }
  };

  postGraduatationValidate = (value) => {
    const { errors } = this.state;
    if (!value) {
      this.setState({
        errors: { ...errors, postGraduatationValidationMsg: "Can't be blank" },
      });
    } else {
      this.setState({
        errors: { ...errors, postGraduatationValidationMsg: "" },
      });
    }
  };

  // notifPrefValidate = (value) => {
  //   const { errors } = this.state;
  //   if (!value) {
  //     this.setState({
  //       errors: { ...errors, phoneValidationMsg: "Can't be blank" },
  //     });
  //   } else if (value) {
  //     this.setState({ errors: { ...errors, phoneValidationMsg: "" } });
  //   } else {
  //     this.setState({
  //       errors: {
  //         ...errors,
  //         phoneValidationMsg: "Not a valid contact number",
  //       },
  //     });
  //   }
  // };
  // newsletterValidate = (value) => {
  //   const { errors } = this.state;
  //   if (!value) {
  //     this.setState({
  //       errors: { ...errors, phoneValidationMsg: "Can't be blank" },
  //     });
  //   } else if (value) {
  //     this.setState({ errors: { ...errors, phoneValidationMsg: "" } });
  //   } else {
  //     this.setState({
  //       errors: {
  //         ...errors,
  //         phoneValidationMsg: "Not a valid contact number",
  //       },
  //     });
  //   }
  // };

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
              step={step}
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
              step={step}
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
              step={step}
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
              step={step}
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
              step={step}
              inputChange={this.inputChange}
              values={values.userDetails}
              errors={errors}
            />
          </div>
        );
    }
  }
}
