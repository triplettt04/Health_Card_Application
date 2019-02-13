import React from "react";
import constants from "../constants";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let path = process.env.PUBLIC_URL + "/confirmation";
    this.props.history.push(path);
  }

  back() {
    let path = process.env.PUBLIC_URL + "/uploadSignature";
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
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Back
          </button>
          <div className="btn-container btn-center">
            <input
              type="submit"
              value="Submit"
              className="btn btn-general btn-wide btn-shadow"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Summary;
