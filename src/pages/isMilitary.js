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
      this.props.history.push("/selectBase");
    } else {
      this.props.history.push({
        pathname: "/selectResProof",
        state: { pathFrom: "/isMilitary" }
      });
    }
  }

  back() {
    this.props.history.push("/pastOHIP");
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
        </div>
      </div>
    );
  }
}

export default IsMilitary;
