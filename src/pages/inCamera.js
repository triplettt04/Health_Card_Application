import React from "react";
import constants from "../constants";
import DriverLicence from "./driverLicense.png";
import MPRR1 from "./MPRR1.png";
import MPRR2 from "./MPRR2.png";
import MPRR3 from "./MPRR3.png";
import Passport from "./Passport.png";
import Selfie from "../assets/Self photo.png";
import Signature from "./Signature.png";
import Posting1 from "./Posting1.png";
import Posting2 from "./Posting2.png";

class InCamera extends React.Component {
  constructor(props) {
    super(props);
    let img;

    switch (this.props.pathFrom) {
      case process.env.PUBLIC_URL + "/uploadRes":
        img = MPRR2; //Random one since the user is not going here
        break;
      case process.env.PUBLIC_URL + "/uploadCitizen":
        img = Passport;
        break;
      case process.env.PUBLIC_URL + "/uploadID":
        img = DriverLicence;
        break;
      case process.env.PUBLIC_URL + "/uploadMilitary":
        switch (this.props.num) {
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
        switch (this.props.num) {
          case 1:
            img = Posting1;
            break;
          case 2:
            img = Posting2;
            break;
          default:
            img = "";
            console.log("ERROR - unknown MPRR number");
        }
        break;
      case process.env.PUBLIC_URL + "/uploadPhoto":
        img = Selfie;
        break;
      case process.env.PUBLIC_URL + "/uploadSignature":
        img = Signature;
        break;
      default:
        img = "";
        console.log("ERROR - unknown MPRR number");
    }

    this.state = {
      img: img,
      pathFrom: props.pathFrom,
      num: props.num
    };

    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  next(event) {
    event.preventDefault();
    let pathFrom = this.state.pathFrom;
    if (pathFrom) {
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/confirmPhoto",
        state: {
          pathFrom: pathFrom,
          img: this.state.img,
          num: this.state.num
        }
      });
    } else {
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/confirmPhoto",
        state: {
          pathFrom: pathFrom,
          img: this.state.img
        }
      });
    }
  }

  back() {
    if (this.state.pathFrom) {
      if (this.state.num) {
        this.props.history.push({
          pathname: this.state.pathFrom,
          state: {
            num: this.state.num - 1
          }
        });
      } else {
        this.props.history.push(this.state.pathFrom);
      }
    } else {
      let path = process.env.PUBLIC_URL + "/howSignature";
      this.props.history.push(path);
    }
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <img className="upload-image" src={this.state.img} />
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
