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
        <div class="ontario-header-container">
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
        <footer className="footer">
          <button
            className="btn btn-navigation btn-left-align"
            onClick={() => this.back()}
          >
            Back
          </button>
          <input
            type="submit"
            value="Next"
            className="btn btn-navigation btn-right-align"
          />
        </footer>
      </div>
    );
  }
}

export default HasAddress;
