import React from "react";
import constants from "../constants";
import Card from "../components/card";

class UploadSignature extends React.Component {
  constructor(props) {
    super(props);
    let status = props.status
      ? props.status
      : props.location.state && props.location.state.uploaded
      ? "Uploaded"
      : "Not completed";
    this.state = {
      status: status
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.takePic = this.takePic.bind(this);
  }

  takePic() {
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + "/inCamera",
      state: { pathFrom: process.env.PUBLIC_URL + "/uploadSignature" }
    });
  }

  next(event) {
    event.preventDefault();
    if (this.state.status === "Uploaded") {
      let target = {
        name: "Signature",
        value: "Uploaded"
      };
      this.props.save(target);

      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/summary"
      });
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectSignature";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div>Upload your signature</div>
        <div>Current status: {this.state.status}</div>
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
          <button
            className={constants.buttonClasses}
            onClick={() => this.takePic()}
          >
            Take a picture
          </button>
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

export default UploadSignature;
