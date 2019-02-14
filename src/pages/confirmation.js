import React from "react";
import constants from "../constants";
import Card from "../components/card";

class Confirmation extends React.Component {
  //There should be no next or back

  render() {
    return (
      <div>
        <nav className="navbar ontario-header-container">
          <a className="brand" href="#">
            OHIP application
          </a>
          <a className="french-toggle" href="#">
            FR
          </a>
        </nav>
        <div className="form-wrapper">
          <div className="Card">
            <div className="progress-indicator">Complete</div>
            <h2 className="sub-header">
              Your OHIP application has been submitted for review!{" "}
            </h2>
            <p className="caption">
              A confirmation email has been sent to
              <a href="#">{" " + this.props.email}</a>.<br />
              <br />
              You should receive your health card in approximately 4 weeks.
              <br />
              <br />
              It will be sent to{" "}
              <span className="semibold">
                {this.props.street}, {this.props.city}, {this.props.province},{" "}
                {this.props.country}, {this.props.postalCode}
              </span>
              .<br />
              <br />
              It is now safe to close this page.
            </p>
          </div>
          <p className="caption confirmation-caption">
            If you have any questions, please contact your nearest{" "}
            <a href="#">ServiceOntario</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Confirmation;
