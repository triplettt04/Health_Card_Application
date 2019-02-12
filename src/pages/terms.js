import React from "react";
import constants from "../constants";

class Terms extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let path = process.env.PUBLIC_URL + "/pastOHIP";
    this.props.history.push(path);
  }

  back() {
    this.props.history.push("/");
  }
  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
        <div className="form-wrapper">
          <div className="question-card">
            <div className="progress-indicator">1 / 15</div>
            <h2 className="sub-header">Terms and conditions</h2>
            <p className="caption">
              Depending on when you last had coverage, you may not be required
              to reapply. These terms and services describe the legal agreement
              between you and airslate inc. (“company”) which govern your access
              to and use of this site and other company sites (collectively, the
              “sites”), any related services, and company provided applications
              including integrations (“apps”). <br />
              <br />
              By using the sites, registering for company’s services, or
              downloading or using the apps, you agree to be bound by this
              agreement. if you do not agree to these terms and conditions...
            </p>
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
              value="Agree"
              className="btn btn-general btn-right-align"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Terms;
