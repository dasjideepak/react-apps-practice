import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/Profile";
import PersonalInfo from "./components/PersonalInfo";
import Qualifications from "./components/Qualifications";
import Notification from "./components/Notification";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: { step: null, prevStep: null, nextStep: null },
    };
  }

  componentDidMount() {
    this.steps();
  }

  steps = () => {
    switch (true) {
      case "Profile":
        return this.setState({
          activeStep: {
            step: <Profile />,
            prevStep: null,
            nextStep: <PersonalInfo />,
          },
        });
      case "PersonalInfo":
        return this.setState({
          activeStep: {
            step: <PersonalInfo />,
            prevStep: <Profile />,
            nextStep: <Qualifications />,
          },
        });
      case "Qualifications":
        return this.setState({
          activeStep: {
            step: <Qualifications />,
            prevStep: <PersonalInfo />,
            nextStep: <Notification />,
          },
        });
      case "Notification":
        return this.setState({
          activeStep: {
            step: <Notification />,
            prevStep: <Qualifications />,
            nextStep: null,
          },
        });
      default:
        return this.setState({
          activeStep: {
            step: <Profile />,
            prevStep: null,
            nextStep: <PersonalInfo />,
          },
        });
    }
  };

  render() {
    // console.log(this.state.activeStep);
    return (
      <div className="container">
        <Router>
          <Route path="/" exact nextStep={this.state.activeStep.nextStep}>
            {this.state.activeStep.step}
          </Route>
        </Router>
      </div>
    );
  }
}
