import React from "react";
import Card from "../components/card";
import constants from "../constants";

class Birthday extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  back() {
    let path = process.env.PUBLIC_URL + "/name";
    this.props.history.push(path);
  }
  next(event) {
    event.preventDefault();
    let path = process.env.PUBLIC_URL + "/sex";
    this.props.history.push(path);
  }
  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar ontario-header-container">
          <a className="brand" href="#">
            OHIP application
          </a>
          <a className="french-toggle" href="#">
            FR
          </a>
        </nav>
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

export default Birthday;
