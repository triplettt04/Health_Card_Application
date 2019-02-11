import React from "react";
import constants from "../constants";
import Card from "../components/card";

class IsMilitary extends React.Component {
  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let isMilitary = true;
    if (isMilitary) {
      this.props.history.push("/selectBase");
    } else {
      this.props.history.push("/selectResProof");
    }
  }

  back() {
    this.props.history.push("/pastOHIP");
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar sticky">
          <a className="navbar-brand" href="#">
            Military?
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

export default IsMilitary;
