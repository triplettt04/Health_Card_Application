import React from "react";
import constants from "../constants";
import Card from "../components/card";

class HasAddress extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(hasAddress) {
    let target = {
      name: "Ontario address",
      value: hasAddress ? "Yes" : "No"
    };
    this.props.save(target);
    if (hasAddress) {
      this.props.history.push({
        pathname: "/selectResProof",
        state: { pathFrom: "/hasAddress" }
      });
    } else {
      this.props.history.push("/uploadPosting");
    }
  }

  back() {
    this.props.history.push("/");
  }

  render() {
    let content = <div>Do you have an Ontario address?</div>;

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
    );
  }
}

export default HasAddress;
