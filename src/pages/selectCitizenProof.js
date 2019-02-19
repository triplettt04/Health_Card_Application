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

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />

          <div className="radio-field small-font">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Passport"
                checked={this.state.citizenProof === "Passport"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Passport"
                  })
                }
              />
              <div className="label-text">Canadian passport</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Birth certificate"
                checked={this.state.citizenProof === "Birth certificate"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Birth certificate"
                  })
                }
              />
              <div className="label-text">Birth certificate</div>{" "}
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Birth abroad"
                checked={this.state.citizenProof === "Birth abroad"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Birth abroad"
                  })
                }
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
                checked={this.state.citizenProof === "Live birth"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Live birth"
                  })
                }
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
                value="Citizenship"
                checked={this.state.citizenProof === "Citizenship"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Citizenship"
                  })
                }
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
                checked={this.state.citizenProof === "Indian status"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Indian status"
                  })
                }
              />
              <div className="label-text">Certificate of Indian Status</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Indian record"
                checked={this.state.citizenProof === "Indian record"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Indian record"
                  })
                }
              />
              <div className="label-text">Registered Indian Record</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Temp confirmation"
                checked={this.state.citizenProof === "Temp confirmation"}
                onChange={() =>
                  this.setState({
                    citizenProof: "Temp confirmation"
                  })
                }
              />
              <div className="label-text">
                Temporary Confirmation of Registration document
              </div>
            </label>
          </div>
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
