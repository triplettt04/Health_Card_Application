import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class HasAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAddress: props.hasAddress
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    let target = {
      name: "Residence address",
      value: this.state.hasAddress
    };
    if (this.state.hasAddress != null) {
      this.props.save(target);
      this.props.save({
        name: "Summary",
        value: false
      });
      this.props.history.push(process.env.PUBLIC_URL + "/summary");
    }
  }

  next(event) {
    let target = {
      name: "Residence address",
      value: this.state.hasAddress
    };
    if (this.state.hasAddress != null) {
      this.props.save(target);
      if (this.state.hasAddress) {
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
    let enableSummary =
      this.props.summary === true ? (
        <input
          className="btn btn-general btn-wide"
          type="submit"
          value="Save and go back"
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
        <div className="progress-indicator">6 / 22</div>
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
      <form
        onSubmit={event =>
          this.props.summary ? this.summary(event) : this.next(event)
        }
      >
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Yes"
                checked={this.state.hasAddress === true}
                onChange={() =>
                  this.setState({
                    hasAddress: true
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
                checked={this.state.hasAddress === false}
                onChange={() =>
                  this.setState({
                    hasAddress: false
                  })
                }
              />
              <div className="label-text"> No</div>
            </label>
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default HasAddress;
