import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
  }
  next(event) {
    event.preventDefault();
    let checked = false;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit" && event.target[i].checked) {
        checked = true;
      }
    }
    if (checked) {
      let path = process.env.PUBLIC_URL + "/confirmation";
      this.props.history.push(path);
    }
  }
  back() {
    this.props.history.push(process.env.PUBLIC_URL + "/summary");
  }
  render() {
    let content = (
      <div>
        <div className="progress-indicator">22 / 22</div>
        <h2 className="sub-header">Online application agreement.</h2>
        <p className="caption">
          You will need to agree to the following before submitting your online
          application.
        </p>
      </div>
    );
    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="confirmation-text">
            <div className="text-block">
              <div className="main-text semibold">I confirm that:</div>
              <ul className="list">
                <li>
                  I make and intend to continue making Ontario my primary place
                  of residence.
                </li>
                <li>
                  I will be physically present in Ontario for at least 5 months
                  (153 days) in a 12-month period.
                </li>
                <li>
                  I must not be absent from Ontario for more than 30 days within
                  the first 183 days immediately after establishing residency in
                  Ontario unless I am considered by the Ministry of Health and
                  Long-Term Care to be one of the following or I could lose my
                  OHIP coverage: a Mobile Worker or a Mobile Student, a person
                  who has moved to Ontario directly from another province or
                  territory of Canada where I was insured under a publicly
                  funded health care insurance plan, a Reservist returning from
                  an out-of-country posting or the spouse and/or dependant of a
                  Regular Force member of the Canadian Forces, or the spouse
                  and/or dependant of a Reservist currently deployed by the
                  Canadian Forces into active service.
                </li>
                <li>
                  The information I have given in this application, and in the
                  documents I have provided, is true and accurate.
                </li>
              </ul>
            </div>
            <div className="text-block">
              <div className="main-text semibold">I understand that:</div>
              <ul className="list">
                <li>
                  If there is any change in my name, address, citizenship or
                  immigration status I will inform the Ministry of Health and
                  Long-Term Care and/or its agent ServiceOntario within 30 days.
                </li>
                <li>
                  The Ministry of Health and Long-Term Care and/or its agent
                  ServiceOntario may check my residence status and any
                  information I have given in this form and in the documents I
                  have provided.
                </li>
                <li>
                  For verification, this information may be collected from, and
                  disclosed to, government and non-government organizations, if
                  the law allows it.
                </li>
                <li>
                  It is an offence to knowingly provide false information in
                  relation to this application.
                </li>
              </ul>
            </div>
          </div>
          <div className="checkbox-field">
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="agreement"
              />
              <div className="label-text">
                I agree to the terms and conditions
              </div>
            </label>
          </div>
        </div>
        <div className="btn-container button-footer">
          <input
            type="submit"
            value="Submit"
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
export default Terms;
