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
    //Add header element
    let entries = "";
    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar sticky">
          <a className="navbar-brand" href="#">
            Home
          </a>
        </nav>
        <div className="form-wrapper">
          <div className="checkbox-field">
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="example"
              />
              <div className="label-text">I love to eat cabbage</div>
            </label>
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="example"
              />
              <div className="label-text">
                I really love all kinds of mushrooms in general
              </div>
            </label>
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
      </form>
    );
  }
}

export default IsMilitary;
