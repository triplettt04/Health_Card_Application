import React from "react";
import constants from "../constants";
import Card from "../components/card";

class PastOHIP extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(pastOHIP) {
    let target = {
      name: "Past OHIP",
      value: pastOHIP ? "Yes" : "No"
    };
    this.props.save(target);
    if (pastOHIP) {
      this.props.history.push("/isMilitary");
    } else {
      this.props.history.push("/moveDate");
    }
  }

  back() {
    this.props.history.push("/");
  }

  render() {
    let content = <div>Have you had an OHIP card before?</div>;

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
      </div>
    );
  }
}

export default PastOHIP;
