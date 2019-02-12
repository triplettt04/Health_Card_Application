import React from "react";
import constants from "../constants";
import Card from "../components/card";

class Name extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit") {
        this.props.save(event.target[i]);
      }
    }
    this.props.history.push("/birthday");
  }

  back() {
    this.props.history.push("/uploadID");
  }

  render() {
    let content = <div>What is your name?</div>;

    return (
      <form onSubmit={event => this.next(event)}>
        <div class="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
        <div className="form-wrapper">
          <Card content={content} />
          <div className="text-input one-line">
            <label className="form-label" htmlFor="first-name-1">
              First name
            </label>
            <input
              className="form-control"
              id="first-name-1"
              name="First name"
            />
            <label className="form-label" htmlFor="middle-name-1">
              Middle name(s)
            </label>
            <input
              className="form-control"
              id="middle-name-1"
              name="Middle name(s)"
            />
            <label className="form-label" htmlFor="last-name-1">
              Last name
            </label>
            <input className="form-control" id="last-name-1" name="Last name" />
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

export default Name;
