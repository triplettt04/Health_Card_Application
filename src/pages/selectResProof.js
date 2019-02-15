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
    this.props.history.push(this.props.location.state.pathFrom);
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
    const buttonNames = [
      {
        label: "Driver license",
        value: "Valid Ontario driver's licence"
      },
      {
        label: "Temp license",
        value:
          "Temporary driver's licence only if accompanied by photo licence card with the same address"
      },
      {
        label: "Photo card",
        value:
          "Valid Ontario Photo Card original, mailed utility bill (e.g. cable TV, hydro, gas, water)"
      },
      {
        label: "Bank account",
        value:
          "Monthly mailed bank account statements for savings or chequing accounts; does not include receipts, bank books, letters or automated teller receipts"
      },
      {
        label: "Employer record",
        value:
          "Employer record (e.g. pay stub, letter from employer on company letterhead)"
      },
      {
        label: "Report card",
        value: "School, college or university report card or transcript"
      },
      {
        label: "Child benefit",
        value: "Child Tax Benefit statement"
      },
      {
        label: "Income tax",
        value: "Most recent income tax Notice of Assessment"
      },
      {
        label: "Insurance policy",
        value: "Insurance policy (e.g. home, tenant, auto or life)"
      },
      {
        label: "Lease",
        value: "Mortgage, rental or lease agreement"
      },
      {
        label: "Vehicle permit",
        value: "Ontario motor vehicle permit (plate or vehicle portions)"
      },
      {
        label: "Property tax",
        value: "Property tax bill"
      },
      {
        label: "Direct deposit",
        value:
          "Statement of direct deposit for Ontario Works or for Ontario Disability Support Program (ODSP)"
      },
      {
        label: "T4E",
        value: "Statement of Employment Insurance Benefits Paid (T4E)"
      },
      {
        label: "T4A",
        value:
          "Statement of Old Age Security (T4A) or statement of Canada Pension Plan Benefits (T4A) (P)"
      },
      {
        label: "Bank options",
        value: `Any of the following statements from a bank, trust company or credit union:\
        - Registered Retirement Savings Plan (RRSP)  
        - Registered Retirement Income Fund (RRIF)  
        - Registered Home Ownership Savings Plan (RHOSP)  
        - Workplace Safety and Insurance Board Statement of Benefits (T5007)  
        - Canada Pension Plan Statement of Contributions`
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
            checked={this.state.resProof === buttonNames[i].label}
            onChange={() =>
              this.setState({
                resProof: buttonNames[i].label
              })
            }
          />
          <div className="label-text">{buttonNames[i].value}</div>
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
