import React from "react";
import constants from "../constants";
import Card from "../components/card";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let save = true,
      toSave = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === "text") {
        toSave.push(event.target[i]);
        if (!event.target[i].value.length) {
          save = false;
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
    let content = <div>What is your contact information?</div>;

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
          <div className="text-input one-line">
            <label className="form-label" htmlFor="primary-phone-1">
              Primary phone
            </label>
            <input
              className="form-control"
              id="primary-phone-1"
              name="Primary phone"
              defaultValue={this.props.primaryPhone}
            />
            <label className="form-label" htmlFor="alternate-phone-1">
              Alternate phone
            </label>
            <input
              className="form-control"
              id="alternate-phone-1"
              name="Alternate phone"
              defaultValue={this.props.alternatePhone}
            />
            <label className="form-label" htmlFor="email-1">
              Email
            </label>
            <input
              className="form-control"
              id="email-1"
              name="Email"
              defaultValue={this.props.email}
            />
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

export default Contact;
