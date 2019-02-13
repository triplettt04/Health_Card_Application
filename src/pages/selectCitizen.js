import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectCitizen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      citizenType: props.citizenType
    };

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
    let path = process.env.PUBLIC_URL + "/addressMail";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">4 / 15</div>
        <h2 className="sub-header">
          Do you currently have an address in Ontario?
        </h2>
        <p className="caption">
          In order to receive OHIP coverage, you must provide proof of residency
          or proof of future residency.
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
          <div className="radio-field medium-font">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Canadian citizen"
                checked={this.state.citizenType === "Canadian citizen"}
                onChange={() =>
                  this.setState({
                    citizenType: "Canadian citizen"
                  })
                }
              />
              <div className="label-text">Canadian citizen</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Permanent resident"
                checked={this.state.citizenType === "Permanent resident"}
                onChange={() =>
                  this.setState({
                    citizenType: "Permanent resident"
                  })
                }
              />
              <div className="label-text">Permanent resident</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Applicant"
                checked={this.state.citizenType === "Applicant"}
                onChange={() =>
                  this.setState({
                    citizenType: "Applicant"
                  })
                }
              />
              <div className="label-text">
                Applicant for permanent residency
              </div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Other"
                checked={this.state.citizenType === "Other"}
                onChange={() =>
                  this.setState({
                    citizenType: "Other"
                  })
                }
              />
              <div className="label-text">Other immigration status</div>
            </label>
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

export default SelectCitizen;
