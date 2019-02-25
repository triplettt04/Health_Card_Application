import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SpecialCase extends React.Component {
  constructor(props) {
    super(props);

    let stateValues = {
      disabled: false
    };
    for (let i = 0; i < constants.specialCaseChecks.length; i++) {
      if (
        (constants.specialCaseChecks[i].label === "Military relation" &&
          props.specialCase === true) ||
        (constants.specialCaseChecks[i].label === "None of the above" &&
          props.specialCase === false)
      ) {
        stateValues[constants.specialCaseChecks[i].label] = true;
      } else {
        stateValues[constants.specialCaseChecks[i].label] = false;
      }
    }

    this.state = stateValues;

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    let target = {
      name: "Special case",
      value: this.state.specialCase
    };
    if (this.state.specialCase != null) {
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
    let specialCase = this.state["Military relation"];
    let target = {
      name: "Special case",
      value: specialCase
    };
    if (this.state["None of the above"] || this.state["Military relation"]) {
      this.props.save(target);
      if (specialCase) {
        let path = process.env.PUBLIC_URL + "/selectMilitaryProof";
        this.props.history.push(path);
      } else {
        this.props.save({
          name: "pathFrom",
          value: "/specialCase"
        });
        this.props.history.push({
          pathname: process.env.PUBLIC_URL + "/moveWhen"
        });
      }
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectWho";
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

    let fullName = this.props.firstName + " " + this.props.lastName;

    let content = (
      <div>
        <div className="progress-indicator">2 / 22</div>
        <h2 className="sub-header">
          Is {fullName} part of any of the following groups?
        </h2>
        <p className="caption">
          Based on your situation, you may qualify for immediate coverage and/or
          have a modified application process. Please select all that apply.
        </p>
      </div>
    );

    let checkBoxes = [];
    for (let i = 0; i < constants.specialCaseChecks.length - 1; i++) {
      checkBoxes.push(
        <label className="checkbox-label block" key={i}>
          <input
            type="checkbox"
            className={
              this.state.disabled
                ? "checkbox-input checkbox dead"
                : "checkbox-input checkbox"
            }
            checked={
              this.state.disabled
                ? false
                : this.state[constants.specialCaseChecks[i].label]
            }
            disabled={this.state.disabled}
            onChange={event =>
              this.setState({
                [constants.specialCaseChecks[i].label]: event.target.checked
              })
            }
          />
          <div className="label-text">
            {constants.specialCaseChecks[i].value}
          </div>
        </label>
      );
    }
    checkBoxes.push(
      <label
        className="checkbox-label block"
        key={constants.specialCaseChecks.length - 1}
      >
        <input
          type="checkbox"
          className="checkbox-input checkbox"
          checked={
            this.state[
              constants.specialCaseChecks[
                constants.specialCaseChecks.length - 1
              ].label
            ]
          }
          onChange={event =>
            this.setState({
              disabled: event.target.checked,
              [constants.specialCaseChecks[
                constants.specialCaseChecks.length - 1
              ].label]: event.target.checked
            })
          }
        />
        <div className="label-text">
          {
            constants.specialCaseChecks[constants.specialCaseChecks.length - 1]
              .value
          }
        </div>
      </label>
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
          <div className="checkbox-field">{checkBoxes}</div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default SpecialCase;
