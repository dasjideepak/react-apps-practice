import React, { Component } from "react";
import StepBar from "./StepBar";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: { username: "", bio: "", image: "", email: "", phone: "" },
      error: { username: "", bio: "", image: "", email: "", phone: "" },
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log(name, value);
  };

  render() {
    const { profileData, error, handleChange } = this.state;
    return (
      <div>
        <StepBar />
        <form className="flex-column">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={profileData.username}
            onChange={handleChange}
          />
          <small className="error">{error.username}</small>
          <textarea
            name="bio"
            cols="30"
            rows="10"
            placeholder="Enter bio"
            value={profileData.bio}
            onChange={handleChange}
            required
          ></textarea>
          <small className="error">{error.bio}</small>
          <input
            type="file"
            name="image"
            value={profileData.image}
            onChange={handleChange}
            required
          />
          <small className="error">{error.image}</small>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={profileData.email}
            onChange={handleChange}
            required
          />
          <small className="error">{error.email}</small>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone"
            value={profileData.phone}
            onChange={handleChange}
            required
          />
          <small className="error">{error.phone}</small>
        </form>
        <div className="buttons-container ">
          <button type="submit">Next</button>
        </div>
      </div>
    );
  }
}

// Profile
// username, bio, photo, email, phone
