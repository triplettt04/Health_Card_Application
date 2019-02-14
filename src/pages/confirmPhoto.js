import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.location.state ? props.location.state.img : ""
    };

    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  next(event) {
    event.preventDefault();
    let pathFrom = this.props.location.state.pathFrom;
    let target = {
      name: null,
      value: "Uploaded"
    };
    switch (pathFrom) {
      case process.env.PUBLIC_URL + "/uploadRes":
        //Nothing yet
        break;
      case process.env.PUBLIC_URL + "/uploadCitizen":
        target.name = "Citizenship proof";
        break;
      case process.env.PUBLIC_URL + "/uploadID":
        target.name = "Identity proof";
        break;
      case process.env.PUBLIC_URL + "/uploadMilitary":
        target.name = "Military proof";
        break;
      case process.env.PUBLIC_URL + "/uploadPosting":
        target.name = "Posting message";
        break;
      case process.env.PUBLIC_URL + "/uploadPhoto":
        target.name = "Photo proof";
        break;
      case process.env.PUBLIC_URL + "/uploadSignature":
        target.name = "Signature";
        break;
    }
    this.props.save(target);
    if (this.props.location.state.num) {
      this.props.history.push({
        pathname: pathFrom,
        state: {
          uploaded: true,
          num: this.props.location.state.num
        }
      });
    } else {
      this.props.history.push({
        pathname: pathFrom,
        state: {
          uploaded: true
        }
      });
    }
  }

  back() {
    let pathFrom = this.props.location.state.pathFrom;
    if (this.props.location.state.num) {
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/inCamera",
        state: {
          pathFrom: pathFrom,
          num: this.props.location.state.num
        }
      });
    } else {
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/inCamera",
        state: {
          pathFrom: pathFrom
        }
      });
    }
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <img className="upload-image" src={this.state.img} />
        <div className="btn-container button-footer">
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Retake
          </button>
          <input
            type="submit"
            value="Accept"
            className="btn btn-general btn-right-align"
          />
        </div>
      </form>
    );
  }
}

export default SelectBase;
