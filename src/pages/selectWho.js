import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SelectWho extends React.Component {
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
      this.props.history.push(process.env.PUBLIC_URL + "/specialCase");
    }
  }

  back() {
    this.props.history.push(process.env.PUBLIC_URL + "/birthday");
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">5 / 23</div>
        <h2 className="sub-header">
          Choose the application you would like to start with
        </h2>
      </div>
    );

    let extraText = "You have already submitted this application";
    let length = this.props.firstName.length,
      start = this.props.forWhoUser ? 0 : 1;
    let radioButtons = [];

    for (let i = start; i < length; i++) {
      let isDisabled = this.props.done[i];
      radioButtons.push(
        <label
          className={
            isDisabled ? "radio-style block dead" : "radio-style block"
          }
          key={i}
        >
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={i}
            checked={this.state.checked === i}
            disabled={isDisabled}
            onChange={() =>
              this.setState({
                checked: i
              })
            }
          />
          <div className="label-text">
            {this.props.firstName[i] + " " + this.props.lastName[i]}
            <div className="extra-text">{isDisabled ? extraText : ""}</div>
          </div>
        </label>
      );
    }

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="radio-field small-font">{radioButtons}</div>
          <div className="btn-container">
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
        </div>
      </form>
    );
  }
}

export default SelectWho;
