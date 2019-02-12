import React from "react";
import constants from "../constants";
import Card from "../components/card";

class IsMilitary extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(isMilitary) {
    let target = {
      name: "Military relation",
      value: isMilitary ? "Yes" : "No"
    };
    this.props.save(target);
    if (isMilitary) {
      let path = process.env.PUBLIC_URL + "/selectBase";
      this.props.history.push(path);
    } else {
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/selectResProof",
        state: { pathFrom: process.env.PUBLIC_URL + "/isMilitary" }
      });
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/pastOHIP";
    this.props.history.push(path);
  }

  render() {
    let content = <div>Are you a military spouse or dependent?</div>;

    return (
      <div>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
        <div className="form-wrapper">
          <Card content={content} />
          <div className="row">
            <button
              className={constants.buttonClasses}
              onClick={() => this.next(true)}
            >
              Yes
            </button>
          </div>
          <div className="row">
            <button
              className={constants.buttonClasses}
              onClick={() => this.next(false)}
            >
              No
            </button>
          </div>
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
      </div>
    );
  }
}

export default IsMilitary;
