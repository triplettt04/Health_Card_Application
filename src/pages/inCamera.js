import React from "react";
import constants from "../constants";
import testImg from "./project-header.png";

class InCamera extends React.Component {
  constructor(props) {
    super(props);
    let img;
    switch (this.props.location.state.pathFrom) {
      case "/uploadRes":
        img = testImg; //Test for now
        break;
      default:
        img = "";
    }
    this.state = {
      img: img
    };
  }

  next(event) {
    event.preventDefault();
    let pathFrom = this.props.location.state.pathFrom;
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + "/confirmPhoto",
      state: {
        pathFrom: pathFrom,
        img: this.state.img
      }
    });
  }

  back() {
    if (this.props.location.state.pathFrom) {
      this.props.history.push(this.props.location.state.pathFrom);
    } else {
      let path = process.env.PUBLIC_URL + "/howSignature";
      this.props.history.push(path);
    }
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <img src={this.state.img} />
        <footer className="footer camera-footer">
          <button className="camera-cancel" onClick={() => this.back()}>
            Cancel
          </button>
          <input type="submit" className="camera-button" />
        </footer>
      </form>
    );
  }
}

export default InCamera;
