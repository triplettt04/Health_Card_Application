import React from "react";
import Card from "../components/card";
import constants from "../constants";

class Terms extends React.Component {
  next(event) {
    event.preventDefault();
    this.props.history.push("/pastOHIP");
  }
  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar sticky">
          <a className="navbar-brand" href="#">
            {constants.navTopName}
          </a>
        </nav>
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
