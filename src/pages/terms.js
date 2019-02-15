import React from "react";
import constants from "../constants";
import Card from "../components/card";

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
    let content = (
      <div>
        <div className="progress-indicator">1 / 22</div>
        <h2 className="sub-header">Terms and conditions</h2>
        <p className="caption">
          Depending on when you last had coverage, you may not be required to
          reapply.
          <br />
          <br />
          These terms and services describe the legal agreement between you and
          airslate inc. (“company”) which govern your access to and use of this
          site and other company sites (collectively, the “sites”), any related
          services, and company provided applications
          <span className="collapse minimized-text">
            including integrations (“apps”).
            <br />
            <br />
            By using the sites, registering for company’s services, or
            downloading or using the apps, you agree to be bound by this
            agreement.
            <br />
            <br />
            These terms and services describe the legal agreement between you
            and airslate inc. (“company”) which govern your access to and use of
            this site and other company sites (collectively, the “sites”), any
            related services, and company provided applications including
            integrations (“apps”). by using the sites, registering for company’s
            services, or downloading or using the apps, you agree to be bound by
            this agreement.
          </span>
          <button data-toggle="collapse">Read more</button>
        </p>
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
        </div>
        <div className="btn-container button-footer">
          <input
            type="submit"
            value="Agree"
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
