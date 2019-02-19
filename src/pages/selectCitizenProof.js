import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SelectCitizenProof extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      citizenProof: props.citizenProof
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
        name: "Citizen proof",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/uploadCitizen";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectCitizen";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">11 / 22</div>
        <h2 className="sub-header">
          Please select one of the following documents you wish to use as proof
          of your Canadian citizenship.
        </h2>
      </div>
    );

    let radioButtons = [];
    for (let i = 0; i < constants.buttonsCitizen.length; i++) {
      let isDisabled =
        constants.buttonsID[i].label === this.props.identityProof;
      radioButtons.push(
        <label
          className={
            isDisabled ? "radio-style block dead" : "radio-style block"
          }
          key={constants.buttonsCitizen[i].label}
        >
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={constants.buttonsCitizen[i].label}
            checked={
              this.state.citizenProof === constants.buttonsCitizen[i].label
            }
            onChange={() =>
              this.setState({
                citizenProof: constants.buttonsCitizen[i].label
              })
            }
          />
          <div className="label-text">{constants.buttonsCitizen[i].value}</div>
        </label>
      );
    }

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />

          <div className="radio-field small-font">{radioButtons}</div>
        </div>
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
      </form>
    );
  }
}

export default SelectCitizenProof;
