import React from "react";
import constants from "../constants";
import Card from "../components/card";

class HasAddress extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(hasAddress) {
    let target = {
      name: "Ontario address",
      value: hasAddress ? "Yes" : "No"
    };
    this.props.save(target);
    if (hasAddress) {
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/selectResProof",
        state: { pathFrom: process.env.PUBLIC_URL + "/hasAddress" }
      });
    } else {
      let path = process.env.PUBLIC_URL + "/uploadPosting";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/uploadMilitary";
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
      <div>
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
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              <div className="label-text"> Yes</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              <div className="label-text"> No</div>
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
      </div>
    );
  }
}

export default HasAddress;
