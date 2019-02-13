import React from "react";
import constants from "../constants";
import Card from "../components/card";

class HasAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAddress: props.hasAddress
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    let target = {
      name: "Residence address",
      value: null
    };
    let hasAddress,
      noneChecked = true;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit" && event.target[i].checked) {
        target.value = event.target[i].value;
        this.props.save(target);
        hasAddress = event.target[i].value === "Yes";
        noneChecked = false;
      }
    }
    if (!noneChecked) {
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
                checked={this.state.hasAddress === "Yes"}
                onChange={() =>
                  this.setState({
                    hasAddress: "Yes"
                  })
                }
              />
              <div className="label-text"> Yes</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="No"
                checked={this.state.hasAddress === "No"}
                onChange={() =>
                  this.setState({
                    hasAddress: "No"
                  })
                }
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
      </form>
    );
  }
}

export default HasAddress;
