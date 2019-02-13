import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectCitizenProof extends React.Component {
  constructor(props) {
    super(props);

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
        <div className="progress-indicator">5 / 15</div>
        <h2 className="sub-header">
          Please select one of the following documents you wish to use as proof
          of your Canadian citizenship.
        </h2>
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

          <div className="radio-field small-font">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Canadian passport"
              />
              <div className="label-text">Canadian passport</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Birth certificate"
              />
              <div className="label-text">Birth certificate</div>{" "}
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Birth abroad"
              />
              <div className="label-text">
                Canadian Certificate of Registration of Birth Abroad
              </div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Live birth"
              />
              <div className="label-text">
                Certified Statement of Live Birth from any Canadian province or
                territory
              </div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Citizenship or naturalization"
              />
              <div className="label-text">
                Certificate of Canadian Citizenship or Certificate of
                Naturalization
              </div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Indian status"
              />
              <div className="label-text">Certificate of Indian Status</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Indian record"
              />
              <div className="label-text">Registered Indian Record</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Temporary confirmation"
              />
              <div className="label-text">
                Temporary Confirmation of Registration document
              </div>
            </label>
          </div>
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
      </form>
    );
  }
}

export default SelectCitizenProof;
