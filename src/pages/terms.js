import React from "react";
import Card from "../components/card";
import constants from "../constants";

class Terms extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    this.props.history.push("/pastOHIP");
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
        <footer className="footer">
          <button
            className="btn btn-navigation btn-left-align"
            onClick={() => this.back()}
          >
            Back
          </button>
          <input
            type="submit"
            value="Accept"
            className="btn btn-navigation btn-right-align"
          />
        </footer>
      </form>
    );
  }
}

export default Terms;
