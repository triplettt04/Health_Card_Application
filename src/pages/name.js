import React from "react";
import constants from "../constants";
import Card from "../components/card";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let save = true,
      toSave = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === "text") {
        toSave.push(event.target[i]);
        if (
          !event.target[i].value.length &&
          event.target[i].name === "Last name"
        ) {
          save = false;
        }
      }
    }
    if (save) {
      for (let i = 0; i < toSave.length; i++) {
        this.props.save(toSave[i]);
      }
      let path = process.env.PUBLIC_URL + "/birthday";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/uploadID";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">15 / 22</div>
        <h2 className="sub-header">Please enter your full name.</h2>
        <p className="caption">
          If your culture uses a single name, please leave the first and middle
          name(s) fields empty.
        </p>
      </div>
    );

    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar ontario-header-container">
          <a className="brand" href="#">
            OHIP application
          </a>
          <a className="french-toggle" href="#">
            FR
          </a>
        </nav>
        <div className="form-wrapper">
          <Card content={content} />
          <div className="text-input one-line">
            <label className="form-label" htmlFor="first-name-1">
              First name
            </label>
            <input
              className="form-control"
              id="first-name-1"
              name="First name"
              defaultValue={this.props.firstName ? this.props.firstName : ""}
            />
            <label className="form-label" htmlFor="middle-name-1">
              Middle name(s)
            </label>
            <input
              className="form-control"
              id="middle-name-1"
              name="Middle name(s)"
              defaultValue={this.props.middleName ? this.props.middleName : ""}
            />
            <label className="form-label" htmlFor="last-name-1">
              Last name / Single name
            </label>
            <input
              className="form-control"
              id="last-name-1"
              name="Last name"
              defaultValue={this.props.lastName ? this.props.lastName : ""}
            />
          </div>
        </div>
        <div className="btn-container button-footer">
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Back
          </button>
          <input
            type="submit"
            value="Next"
            className="btn btn-general btn-right-align"
          />
        </div>
      </form>
    );
  }
}

export default Name;
