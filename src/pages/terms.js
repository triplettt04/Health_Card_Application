import React from "react";
import Card from "../components/card";
import constants from "../constants";

class Terms extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let path = process.env.PUBLIC_URL + "/pastOHIP";
    this.props.history.push(path);
  }
  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
        <div className="form-wrapper">
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

export default Terms;
