import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SelectResProof extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resProof: props.resProof
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
        name: "Residence proof type",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/uploadRes";
      this.props.history.push(path);
    }
  }

  back() {
    let path;
    if (this.props.pathFrom === "Yes") {
      path = process.env.PUBLIC_URL + "/hasAddress";
    } else {
      path = process.env.PUBLIC_URL + "/isMilitary";
    }
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">4 / 22</div>
        <h2 className="sub-header">
          Please select one of the following documents you wish to use as proof
          of your residency in Ontario.
        </h2>
        <p className="caption">
          In order to receive OHIP coverage, you must prove you live in Ontario
          with a document that includes your name and Ontario address.
        </p>
      </div>
    );

    let radioButtons = [];
    for (let i = 0; i < constants.buttonsRes.length; i++) {
      radioButtons.push(
        <label
          className="radio-style block"
          key={constants.buttonsRes[i].label}
        >
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={constants.buttonsRes[i].label}
            checked={this.state.resProof === constants.buttonsRes[i].label}
            onChange={() =>
              this.setState({
                resProof: constants.buttonsRes[i].label
              })
            }
          />
          <div className="label-text">{constants.buttonsRes[i].value}</div>
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

export default SelectResProof;
