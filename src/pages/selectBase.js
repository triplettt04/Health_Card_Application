import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SelectBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.baseLabel ? props.baseLabel : ""
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
        value = this.findIndex(event.target[i].value);
      }
    }
    if (!noneChecked) {
      let target = {
        name: "baseIndex",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/selectMilitaryProof";
      this.props.history.push(path);
    }
  }

  findIndex(label) {
    for (let i = 0; i < constants.militaryAddresses.length; i++) {
      if (constants.militaryAddresses[i].label === label) {
        return i;
      }
    }
    return null;
  }

  back() {
    let path = process.env.PUBLIC_URL + "/isMilitary";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">3 / 22</div>
        <h2 className="sub-header">
          Please indicate which Ontario base the military member has been posted
          to.
        </h2>
      </div>
    );

    let radioButtons = [];
    for (let i = 0; i < constants.militaryAddresses.length; i++) {
      radioButtons.push(
        <label
          className="radio-style block"
          key={constants.militaryAddresses[i].label}
        >
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={constants.militaryAddresses[i].label}
            checked={
              this.state.citizenProof === constants.militaryAddresses[i].label
            }
            onChange={() =>
              this.setState({
                citizenProof: constants.militaryAddresses[i].label
              })
            }
          />
          <div className="label-text">
            {constants.militaryAddresses[i].value}
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

export default SelectBase;
