import React from "react";
import constants from "../constants";
import Card from "../components/card";

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
        <div className="progress-indicator">4 / 15</div>
        <h2 className="sub-header">
          Please select one of the following documents you wish to use as proof
          of oyur identity.
        </h2>
        <p className="caption">
          In order to receive OHIP coverage, you must prove who you are with a
          document that includes your name and signature.
        </p>
      </div>
    );

    const buttonNames = [
      {
        label: "Passport",
        value:
          "Passport (Canadian or foreign)\n*You have already used this document type to prove Canadian citizenship."
      },
      {
        label: "Credit card",
        value: "Credit card"
      },
      {
        label: "Driver license",
        value:
          "Valid driver's licence or temporary driver's licence from any Canadian province or territory"
      },
      {
        label: "Immigration ID",
        value: "Canadian Immigration Identification Card"
      },
      {
        label: "Citizenship",
        value: "Certificate of Canadian Citizenship (plastic card)"
      },
      {
        label: "Indian status",
        value: "Certificate of Indian Status (paper or plastic card)"
      },
      {
        label: "Permanent residence",
        value:
          "Confirmation of Permanent Residence (IMM 5292) only if signature is shown"
      },
      {
        label: "Employee ID",
        value: "Current employee ID card"
      },
      {
        label: "Association",
        value: "Current professional association licence"
      },
      {
        label: "Old age",
        value: "Old Age Security Card"
      },
      {
        label: "Vehicle permit",
        value:
          "Motor vehicle permit (plate portion only) from any Canadian province or territory"
      },
      {
        label: "Residence card",
        value:
          "Permanent Resident Card from any Canadian province or territory only if signature is shown"
      },
      {
        label: "Landing",
        value: "Record of Landing (IMM 1000)"
      },
      {
        label: "Student ID",
        value: "Student ID card"
      },
      {
        label: "Union",
        value: "Union card"
      }
    ];
    let radioButtons = [];
    for (let i = 0; i < buttonNames.length; i++) {
      radioButtons.push(
        <label className="radio-style block" key={buttonNames[i].label}>
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={buttonNames[i].label}
            checked={this.state.identityProof === buttonNames[i].label}
            onChange={() =>
              this.setState({
                identityProof: buttonNames[i].label
              })
            }
          />
          <div className="label-text">{buttonNames[i].value}</div>
        </label>
      );
    }
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
          <div className="radio-field small-font dead-first-child">
            {radioButtons}
          </div>
          <div className="btn-container button-footer">
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

export default SelectID;
