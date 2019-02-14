import React from "react";
import Card from "../components/card";
import constants from "../constants";
import MaskedInput from "react-text-mask";

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
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit") {
        this.props.save(event.target[i]);
      }
    }
    let path = process.env.PUBLIC_URL + "/sex";
    this.props.history.push(path);
  }
  render() {
    let content = (
      <div>
        <div className="progress-indicator">4 / 15</div>
        <h2 className="sub-header">What is your date of birth?</h2>
      </div>
    );

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
          <Card content={content} />
          <MaskedInput
            mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
            placeholder="25/09/1970"
            className="form-control"
            guide={true}
            name="birthday"
          />
        </div>
        <div className="btn-container button-footer">
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
      </form>
    );
  }
}

export default Birthday;
