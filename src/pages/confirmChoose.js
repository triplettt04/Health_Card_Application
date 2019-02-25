import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class ConfirmChoose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: null
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    if (this.state.checked !== null) {
      this.props.save({
        name: "Person num",
        value: this.state.checked
      });
      let path = process.env.PUBLIC_URL + "/sameHouse";
      this.props.history.push(path);
    }
  }

  back() {
    //This is really cancel or something like that
    let path = process.env.PUBLIC_URL + "/";
    //Reset all cookies - fresh start
    this.props.resetAll();
    this.props.history.push(path);
  }

  render() {
    let total =
      (this.props.forWhoUser ? 1 : 0) +
      (this.props.forWhoSpouse ? 1 : 0) +
      this.props.numDependants;
    let progress = this.props.forWhoUser ? -1 : 0;
    for (let i = 0; i < this.props.done.length; i++) {
      if (this.props.done[i]) {
        progress++;
      }
    }
    let name = this.props.firstName[this.props.personNum]
      ? this.props.firstName[this.props.personNum]
      : this.props.lastName[this.props.personNum];

    let ending =
      total === progress
        ? "It is now safe to close this page."
        : "Select another family member to apply for. ";

    let content = (
      <div>
        <div className="progress-indicator">
          {progress} of {total} applications completed
        </div>
        <h2 className="sub-header">
          {name}'s OHIP application has been submitted for review!{" "}
        </h2>
        <p className="caption">
          A confirmation email has been sent to
          <a href="#">{" " + this.props.email}</a>.<br />
          <br />
          {name}'s health card will be sent to{" "}
          <span className="semibold">
            {this.props.street}, {this.props.city}, {this.props.province},{" "}
            {this.props.country}, {this.props.postalCode}
          </span>{" "}
          in approximately 4-6 weeks.
          <br />
          <br />
          If your application is not approved, we will contact you.
          <br />
          <br />
          {ending}
        </p>
      </div>
    );

    let length = this.props.firstName.length,
      start = this.props.forWhoUser ? 0 : 1;
    let radioButtons = [];

    for (let i = start; i < length; i++) {
      if (this.props.done[i]) {
        continue;
      }
      radioButtons.push(
        <label className={"radio-style block"} key={i}>
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={i}
            checked={this.state.checked === i}
            onChange={() =>
              this.setState({
                checked: i
              })
            }
          />
          <div className="label-text">
            {this.props.firstName[i] + " " + this.props.lastName[i]}
          </div>
        </label>
      );
    }

    let pageBottom =
      progress === total ? (
        <p className="caption confirmation-caption">
          If you have any questions, please contact your nearest{" "}
          <a href="#">ServiceOntario</a>.
        </p>
      ) : (
        <div className="btn-container">
          <input
            type="submit"
            value="Start application"
            className="btn btn-general btn-right-align"
            disabled={this.state.checked === null}
          />
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Exit process for remaining applicants
          </button>
        </div>
      );

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="radio-field small-font">{radioButtons}</div>
          {pageBottom}
        </div>
      </form>
    );
  }
}

export default ConfirmChoose;
