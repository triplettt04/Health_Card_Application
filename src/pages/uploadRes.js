import React from "react";
import constants from "../constants";
import Card from "../components/card";

class UploadRes extends React.Component {
  constructor(props) {
    super(props);
    let status =
      props.location.state && props.location.state.uploaded
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
      pathname: "/inCamera",
      state: { pathFrom: "/uploadRes" }
    });
  }

  next(event) {
    event.preventDefault();

    let target = {
      name: "Residence proof uploaded",
      value: this.state.status === "Uploaded"
    };
    this.props.save(target);

    this.props.history.push({
      pathname: "/addressRes",
      state: { pathFrom: "/uploadRes" }
    });
  }

  back() {
    this.props.history.push("/selectResProof");
  }

  render() {
    let content = (
      <div>
        <div>Upload your residence proof</div>
        <div>Current status: {this.state.status}</div>
      </div>
    );
    return (
      <form onSubmit={event => this.next(event)}>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
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

export default UploadRes;
