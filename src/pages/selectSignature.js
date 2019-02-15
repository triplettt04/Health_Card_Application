import React from "react";
import constants from "../constants";

class SelectSignature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signature: props.signature
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let noneChecked = true;
    let value;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        noneChecked = false;
        value = event.target[i].value;
      }
    }
    if (!noneChecked) {
      let target = {
        name: "Signature type",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/uploadSignature";
      this.props.history.push(path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/uploadPhoto";
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
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Photo"
                checked={this.state.signature === "Photo"}
                onChange={() =>
                  this.setState({
                    signature: "Photo"
                  })
                }
              />
              Upload a photo
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="File"
                checked={this.state.signature === "File"}
                onChange={() =>
                  this.setState({
                    signature: "File"
                  })
                }
              />
              Select a local file
            </label>
          </div>
        </div>
        <div className="btn-container button-footer">
          <input
            type="submit"
            value="Next"
            className="btn btn-general btn-right-align"
          />
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Back
          </button>
        </div>
      </form>
    );
  }
}

export default SelectSignature;
