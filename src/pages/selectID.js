import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SelectID extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identityProof: props.identityProof
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
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
        name: "Identity proof type",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/uploadID";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/uploadCitizen";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">13 / 22</div>
        <h2 className="sub-header">
          Please select one of the following documents you wish to use as proof
          of your identity.
        </h2>
        <p className="caption">
          In order to receive OHIP coverage, you must prove who you are with a
          document that includes your name and signature.
        </p>
      </div>
    );

    let radioButtons = [];
    for (let i = 0; i < constants.buttonsID.length; i++) {
      let isDisabled =
        constants.buttonsID[i].label === this.props.citizenProof ||
        constants.buttonsID[i].label === this.props.resProof ||
        constants.buttonsID[i].dependency === this.props.citizenType;
      radioButtons.push(
        <label
          className={
            isDisabled ? "radio-style block dead" : "radio-style block"
          }
          key={constants.buttonsID[i].label}
        >
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={constants.buttonsID[i].label}
            checked={this.state.identityProof === constants.buttonsID[i].label}
            disabled={isDisabled}
            onChange={() =>
              this.setState({
                identityProof: constants.buttonsID[i].label
              })
            }
          />
          <div className="label-text">
            {isDisabled
              ? constants.buttonsID[i].value + constants.buttonsID[i].extraText
              : constants.buttonsID[i].value}
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
          <div className="btn-container button-footer">
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

export default SelectID;
