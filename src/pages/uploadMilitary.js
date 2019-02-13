import React from "react";
import constants from "../constants";
import Card from "../components/card";

class UploadMilitary extends React.Component {
  constructor(props) {
    super(props);
    let status = props.status
      ? props.status
      : props.location.state && props.location.state.uploaded
      ? "Uploaded"
      : "Not completed";
    let num =
      props.location.state && props.location.state.num
        ? props.location.state.num
        : 0;
    this.state = {
      status: status,
      num: num
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.takePic = this.takePic.bind(this);
  }

  takePic() {
    console.log(this.state.num);

    this.props.history.push({
      pathname: process.env.PUBLIC_URL + "/inCamera",
      state: {
        pathFrom: process.env.PUBLIC_URL + "/uploadMilitary",
        num: this.state.num > 2 ? 3 : this.state.num + 1
      }
    });
  }

  next(event) {
    event.preventDefault();

    if (this.state.status === "Uploaded") {
      let target = {
        name: "Military proof",
        value: "Uploaded"
      };
      this.props.save(target);
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/hasAddress"
      });
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectMilitaryProof";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div>Upload your proof of military affiliation</div>
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

export default UploadMilitary;
