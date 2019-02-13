import React from "react";
import constants from "../constants";
import Card from "../components/card";

class IsMilitary extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    let target = {
      name: "Military relation",
      value: null
    };
    let isMilitary,
      noneChecked = true;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit" && event.target[i].checked) {
        target.value = event.target[i].value;
        this.props.save(target);
        isMilitary = event.target[i].value === "Yes";
        noneChecked = false;
      }
    }
    if (!noneChecked) {
      if (isMilitary) {
        let path = process.env.PUBLIC_URL + "/selectBase";
        this.props.history.push(path);
      } else {
        this.props.history.push({
          pathname: process.env.PUBLIC_URL + "/selectResProof",
          state: { pathFrom: process.env.PUBLIC_URL + "/isMilitary" }
        });
      }
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/pastOHIP";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">3 / 15</div>
        <h2 className="sub-header">
          Are you a spouse or dependant of a Canadian military member?
        </h2>
        <p className="caption">
          As a spouse or dependant of a Canadian military member you are exempt
          from the waiting period of living in Ontario for 153 days before
          qualifying for OHIP.
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
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Yes"
              />
              <div className="label-text"> Yes</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="No"
              />
              <div className="label-text"> No</div>
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

export default IsMilitary;
