import React from "react";
import constants from "../constants";
import DriverLicense from "./driverLicense.png";
import MPRR1 from "./MPRR1.png";
import MPRR2 from "./MPRR2.png";
import MPRR3 from "./MPRR3.png";
import Passport from "./Passport.png";
import Selfie from "./Selfie.png";
import Signature from "./Signature.png";

class InCamera extends React.Component {
  constructor(props) {
    super(props);
    let img;
    switch (this.props.location.state.pathFrom) {
      case process.env.PUBLIC_URL + "/uploadRes":
        img = Selfie; //Test for now
        break;
      case process.env.PUBLIC_URL + "/uploadCitizen":
        img = Passport;
        break;
      case process.env.PUBLIC_URL + "/uploadID":
        img = DriverLicense;
        break;
      case process.env.PUBLIC_URL + "/uploadMilitary":
        switch (this.props.location.state.num) {
          case 1:
            img = MPRR1;
            break;
          case 2:
            img = MPRR2;
            break;
          case 3:
            img = MPRR3;
            break;
          default:
            img = "";
            console.log("ERROR - unknown MPRR number");
        }
        break;
      case process.env.PUBLIC_URL + "/uploadPosting":
        img = Selfie; //TO CHANGE
        break;
      case process.env.PUBLIC_URL + "/uploadPhoto":
        img = Selfie;
        break;
      case process.env.PUBLIC_URL + "/uploadSignature":
        img = Signature;
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
