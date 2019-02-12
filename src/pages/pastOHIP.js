import React from "react";
import constants from "../constants";
import Card from "../components/card";

class PastOHIP extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(pastOHIP) {
    let target = {
      name: "Past OHIP",
      value: pastOHIP ? "Yes" : "No"
    };
    this.props.save(target);
    if (!pastOHIP) {
      let path = process.env.PUBLIC_URL + "/isMilitary";
      this.props.history.push(path);
    } else {
      let path = process.env.PUBLIC_URL + "/moveDate";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">2 / 15</div>
        <h2 className="sub-header">Have you had OHIP coverage in the past?</h2>
        <p className="caption">
          Depending on when you last had coverage, you may not be required to
          reapply.
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
              <div className="label-text">Yes</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              <div className="label-text">No</div>
            </label>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-general btn-invert"
              onClick={() => this.back()}
            >
              Back
            </button>
            <button className="btn btn-general btn-right-align">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PastOHIP;
