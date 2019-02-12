import React from "react";
import constants from "../constants";

class Template extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    this.props.history.push("/");
  }

  back() {
    this.props.history.push("/");
  }

  render() {
    return (
      <form onSubmit={this.next}>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
        <div className="form-wrapper">
          <div className="text-input one-line">
            <label className="form-label" htmlFor="first-name-1">
              First Name
            </label>
            <input className="form-control" id="first-name-1" />
            <label className="form-label" htmlFor="last-name-1">
              Last Name
            </label>
            <input className="form-control" id="last-name-1" />
          </div>
          <div className="text-box text-box-small" />
          What is your sex (as indicated on your passport)?
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              Male
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              Female
            </label>
          </div>
          What is your vegetable (as indicated on your passport)?
          <div className="checkbox-field">
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="example"
              />
              <div className="label-text">
                I really love all types of mushrooms in general
              </div>
            </label>
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="example"
              />
              <div className="label-text">I love cabbage and potatoes</div>{" "}
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default Template;
