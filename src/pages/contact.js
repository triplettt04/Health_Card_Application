import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
import emailMask from "text-mask-addons/dist/emailMask";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    debugger;
    let save = true,
      toSave = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit") {
        toSave.push(event.target[i]);
        if (event.target[i].name !== "Alternate phone") {
          if (!event.target[i].value || !event.target[i].value.length) {
            save = false;
          }
        }
      }
    }
    if (save) {
      debugger;
      for (let i = 0; i < toSave.length; i++) {
        this.props.save(toSave[i]);
      }
      this.props.save({
        name: "Summary",
        value: false
      });
      this.props.history.push(process.env.PUBLIC_URL + "/summary");
    }
  }

  next(event) {
    event.preventDefault();
    let save = true,
      toSave = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit") {
        toSave.push(event.target[i]);
        if (event.target[i].name !== "Alternate phone") {
          if (!event.target[i].value || !event.target[i].value.length) {
            save = false;
          }
        }
      }
    }
    if (save) {
      for (let i = 0; i < toSave.length; i++) {
        this.props.save(toSave[i]);
      }
      let path = process.env.PUBLIC_URL + "/uploadPhoto";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/sex";
    this.props.history.push(path);
  }

  render() {
    let enableSummary =
      this.props.summary === true ? (
        <input
          className="btn btn-general btn-wide"
          type="submit"
          value="Back to summary"
        />
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

    let content = (
      <div>
        <div className="progress-indicator">18 / 22</div>
        <h2 className="sub-header">Please enter your contact information.</h2>
        <p className="caption">
          This information will be useful if we need to get in contact with you.
        </p>
      </div>
    );

    return (
      <form
        onSubmit={event =>
          this.props.summary ? this.summary(event) : this.next(event)
        }
      >
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="text-input one-line">
            <label className="form-label" htmlFor="primary-phone-1">
              Primary phone
            </label>
            <input
              className="form-control"
              id="primary-phone-1"
              name="Primary phone"
              defaultValue={
                this.props.primaryPhone ? this.props.primaryPhone : ""
              }
            />
            <label className="form-label" htmlFor="alternate-phone-1">
              Alternate phone (Optional)
            </label>
            <input
              className="form-control"
              guide="true"
              id="alternate-phone-1"
              name="Alternate phone"
              defaultValue={
                this.props.alternatePhone ? this.props.alternatePhone : ""
              }
            />
            <label className="form-label" htmlFor="email-1">
              Email
            </label>
            <input
              mask={emailMask}
              className="form-control"
              guide="true"
              id="email-1"
              name="Email"
              defaultValue={this.props.email ? this.props.email : ""}
            />
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default Contact;
