import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class IsMilitary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMilitary: props.isMilitary
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    let target = {
      name: "Military relation",
      value: this.state.isMilitary
    };
    if (this.state.isMilitary != null) {
      this.props.save(target);
      this.props.save({
        name: "Summary",
        value: false
      });
      this.props.history.push(process.env.PUBLIC_URL + "/summary");
    }
  }

  next(event) {
    event.preventDefault();
    let target = {
      name: "Military relation",
      value: this.state.isMilitary
    };
    if (this.state.isMilitary != null) {
      this.props.save(target);
      if (this.state.isMilitary) {
        let path = process.env.PUBLIC_URL + "/selectBase";
        this.props.history.push(path);
      } else {
        this.props.save({
          name: "pathFrom",
          value: "/isMilitary"
        });
        this.props.history.push({
          pathname: process.env.PUBLIC_URL + "/moveWhen"
        });
      }
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/pastOHIP"; //TO CHANGE
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
        <div className="progress-indicator">2 / 22</div>
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
                checked={this.state.isMilitary === true}
                onChange={() =>
                  this.setState({
                    isMilitary: true
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
                checked={this.state.isMilitary === false}
                onChange={() =>
                  this.setState({
                    isMilitary: false
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

export default IsMilitary;
