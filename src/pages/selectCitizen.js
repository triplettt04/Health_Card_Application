import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SelectCitizen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      citizenType: props.citizenType
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
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
      this.props.history.push(process.env.PUBLIC_URL + "/summary");
    }
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
    let path = process.env.PUBLIC_URL + "/address";
    this.props.history.push(path);
  }

  render() {
    let enableSummary =
      this.props.summary === true ? (
        <input
          className="btn btn-general btn-wide"
          type="submit"
          value="Back to summary"
        />
      ) : (
        <div>
          <input
            type="submit"
            value="Next"
            className="btn btn-general btn-right-align"
          />
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Back
          </button>
        </div>
      );

    let content = (
      <div>
        <div className="progress-indicator">10 / 22</div>
        <h2 className="sub-header">Please select your immigration status.</h2>
        <p className="caption">
          In order to receive OHIP coverage, you must provide proof of legal
          status in Ontario.
        </p>
      </div>
    );

    return (
      <form
        onSubmit={event =>
          this.props.summary ? this.summary(event) : this.next(event)
        }
      >
        <Nav />
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
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default SelectCitizen;
