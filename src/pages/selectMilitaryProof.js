import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

const padded = {
  paddingBottom: "60px"
};

class SelectMilitaryProof extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      militaryProof: props.militaryProof
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  cancel() {
    this.props.history.push(process.env.PUBLIC_URL + "/summary");
  }

  next(event, path) {
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
        name: "Military proof type",
        value: value
      };
      this.props.save(target);
      if (this.props.summary) {
        this.props.save({
          name: "summaryUploaded",
          value: false
        });
      }
      this.props.history.push(process.env.PUBLIC_URL + path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/isMilitary";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">4 / 22</div>
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

    let enableSummary =
      this.props.summary === true ? (
        <div>
          <input
            className="btn btn-general btn-wide"
            type="submit"
            value="Upload new document"
          />
          <button
            className="btn btn-general btn-wide btn-cancel"
            onClick={() => this.cancel()}
          >
            Cancel
          </button>
        </div>
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

    let path = "/uploadMilitary";

    return (
      <form onSubmit={event => this.next(event, path)}>
        <Nav />
        <div className="form-wrapper" style={this.props.summary ? padded : {}}>
          <Card content={content} />
          <div className="radio-field medium-font">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="MPRR"
                checked={this.state.militaryProof === "MPRR"}
                onChange={() =>
                  this.setState({
                    militaryProof: "MPRR"
                  })
                }
              />
              <div className="label-text">MPRR</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Special passport"
                checked={this.state.militaryProof === "Special passport"}
                onChange={() =>
                  this.setState({
                    militaryProof: "Special passport"
                  })
                }
              />
              <div className="label-text">Special passport</div>
            </label>
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default SelectMilitaryProof;
