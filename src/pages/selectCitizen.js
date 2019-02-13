import React from "react";
import constants from "../constants";

class SelectCitizen extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let noneChecked = true;
    let value;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        noneChecked = false;
        value = event.target[i].value;
      }
    }
    if (!noneChecked) {
      let target = {
        name: "Citizen type",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/selectCitizenProof";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/addressMailing";
    this.props.history.push(path);
  }

  render() {
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
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Canadian citizen"
              />
              Canadian citizen
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              Permanent resident
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              Applicant for permanent residency
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              Other immigration status
            </label>
          </div>
          <div className="btn-container">
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
        </div>
      </form>
    );
  }
}

export default SelectCitizen;
