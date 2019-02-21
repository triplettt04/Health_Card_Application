import React from "react";
import constants from "../constants";
import Nav from "../components/nav";

class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let path = process.env.PUBLIC_URL + "/pastOHIP"; //TO CHANGE
    this.props.history.push(path);
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <h1 className="primary-header">How applying online works</h1>
          <div className="summary-content">
            <div className="summary-step">
              <img src={require("../assets/documents.svg")} />
              <h2 className="sub-header">
                Get a <a href="#">certified passport photo</a> and gather the 3
                required
                <a href="#"> documents</a> before applying
              </h2>
              <p className="caption">
                The certified passport photo will be used as your health card
                photo for applicants 16 years and older. If you're applying for
                someone under 16 years old, they will not need a photo.
              </p>
            </div>
            <div className="spacer" />
            <div className="summary-step">
              <img src={require("../assets/upload.svg")} />
              <h2 className="sub-header">
                Begin the online form as soon as you have your documents
              </h2>
              <p className="caption">
                You can immediately start the application form after gathering
                your relevant documents.
              </p>
            </div>
            <div className="spacer" />
            <div className="summary-step">
              <img src={require("../assets/envelope.svg")} />
              <h2 className="sub-header">
                Receive your health card in 4-6 weeks
              </h2>
              <p className="caption">
                If you are eligible for OHIP and completed the steps above
                correctly, then your Ontario health card will be mailed to you!
              </p>
            </div>
          </div>
          <div className="btn-container btn-center btn-nospace">
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
