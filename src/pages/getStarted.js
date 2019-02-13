import React from "react";
import constants from "../constants";

class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let path = process.env.PUBLIC_URL + "/pastOHIP";
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
          <h1 className="primary-header">Here's how applying online works</h1>
          <div className="summary-content">
            <div className="summary-step">
              <img src={require("../assets/upload-graphic.svg")} />
              <h2 className="sub-header">Upload your documents</h2>
              <p className="caption">
                Submit relevant documents needed to complete the application
              </p>
            </div>
            <div className="spacer" />
            <div className="summary-step">
              <img src={require("../assets/form-graphic.svg")} />
              <h2 className="sub-header">Fill out the form</h2>
              <p className="caption">
                Complete the online application form with your personal
                information
              </p>
            </div>
            <div className="spacer" />
            <div className="summary-step">
              <img src={require("../assets/license-graphic.svg")} />
              <h2 className="sub-header">
                Wait for your health card in the mail
              </h2>
              <p className="caption">
                If you completed the steps above correctly, then your Ontario
                health card will be mailed to you soon!
              </p>
            </div>
          </div>
          <div className="btn-container btn-center">
            <input
              type="submit"
              value="Get started"
              className="btn btn-general btn-wide btn-shadow"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default GetStarted;
