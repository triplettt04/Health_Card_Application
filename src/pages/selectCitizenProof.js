import React from "react";
import constants from "../constants";

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
      debugger;
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
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Canadian passport"
              />
              Canadian passport
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Birth certificate"
              />
              Birth certificate
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Birth abroad"
              />
              Canadian Certificate of Registration of Birth Abroad
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Live birth"
              />
              Certified Statement of Live Birth from any Canadian province or
              territory
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Citizenship or naturalization"
              />
              Certificate of Canadian Citizenship or Certificate of
              Naturalization
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Indian status"
              />
              Certificate of Indian Status
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Indian record"
              />
              Registered Indian Record
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Temporary confirmation"
              />
              Temporary Confirmation of Registration document
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

export default SelectCitizenProof;
