import React from "react";
import constants from "../constants";
import Card from "../components/card";

class PastOHIP extends React.Component {
  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let isNew = true;
    if (isNew) {
      this.props.history.push("/isMilitary");
    } else {
      this.props.history.push("/moveDate");
    }
  }

  back() {
    this.props.history.push("/");
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar sticky">
          <a className="navbar-brand" href="#">
            Past OHIP
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
            value="Next"
            className="btn btn-navigation btn-right-align"
          />
        </footer>
      </form>
    );
  }
}

export default PastOHIP;
