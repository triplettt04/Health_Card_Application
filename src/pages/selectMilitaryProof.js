import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectMilitaryProof extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let noneChecked = true;
    let name;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        noneChecked = false;
        name = event.target[i].name;
      }
    }
    if (!noneChecked) {
      let target = {
        name: "Military proof type",
        value: name
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/uploadMilitary";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectBase";
    this.props.history.push(path);
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
        <div className="form-wrapper">
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="Canadian"
              />
              Canadian citizen
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="Permanent"
              />
              Permanent resident
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="Applicant"
              />
              Applicant for permanent residency
            </label>
            <label className="radio-style block">
              <input type="radio" className="radio-input radio" name="Other" />
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

export default SelectMilitaryProof;
