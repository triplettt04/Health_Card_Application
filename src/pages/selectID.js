import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

const padded = {
  paddingBottom: "50px"
};

class SelectID extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identityProof: props.identityProof
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
        if (event.target[i].value === "None of the above") {
          this.props.save({
            name: "pathFrom",
            value: "/selectID"
          });
          this.props.history.push(process.env.PUBLIC_URL + "/idError");
          break;
        }
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
      if (this.props.summary) {
        this.props.save({
          name: "Identity proof",
          value: null
        });
      }
      this.props.history.push(process.env.PUBLIC_URL + path);
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

    let path = "/uploadID";

    let radioButtons = [];
    for (let i = 0; i < constants.buttonsID.length; i++) {
      let isDisabled =
        constants.buttonsID[i].label === this.props.citizenProof ||
        constants.buttonsID[i].label === this.props.resProof;
      if (constants.buttonsID[i].dependency === this.props.citizenType) {
        continue;
      }
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
            {constants.buttonsID[i].value}
            <div className="extra-text">
              {isDisabled ? constants.buttonsID[i].extraText : ""}
            </div>
          </div>
        </label>
      );
    }
    return (
      <form onSubmit={event => this.next(event, path)}>
        <Nav />
        <div className="form-wrapper" style={this.props.summary ? padded : {}}>
          <Card content={content} />
          <div className="radio-field small-font">{radioButtons}</div>
          <div className="btn-container button-footer">{enableSummary}</div>
        </div>
      </form>
    );
  }
}

export default SelectID;
