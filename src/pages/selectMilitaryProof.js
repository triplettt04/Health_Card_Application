import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectMilitaryProof extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let noneChecked = true;
    let name;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        noneChecked = false;
        name = event.target[i].name;
      }
    }
    if (!noneChecked) {
      let target = {
        name: "Military proof",
        value: name
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/uploadMilitary";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectBase";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">4 / 15</div>
        <h2 className="sub-header">
          Please select one of the following documents you wish to use to show
          military affiliation.
        </h2>
        <p className="caption">
          MPRR - Member's personnel record resume, can be obtained online by
          military member
          <br />
          <br />
          Special passport - green coloured passport that is for military
          members returning from an out of country posting
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
          <div className="radio-field medium-font">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Canadian citizen"
              />
              <div className="label-text">MPRR</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              <div className="label-text">Special passport</div>
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

export default SelectMilitaryProof;
