import React from "react";
import Card from "../components/card";
import Nav from "../components/nav";
import constants from "../constants";

class Sex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sex: props.sex
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  back() {
    let path = process.env.PUBLIC_URL + "/birthday";
    this.props.history.push(path);
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
        name: "Sex",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/contact";
      this.props.history.push(path);
    }
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">17 / 22</div>
        <h2 className="sub-header">
          What is your sex on your passport or birth certificate?
        </h2>
      </div>
    );

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="radio-field medium-font">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Female"
                checked={this.state.sex === "Female"}
                onChange={() =>
                  this.setState({
                    sex: "Female"
                  })
                }
              />
              <div className="label-text">Female</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Male"
                checked={this.state.sex === "Male"}
                onChange={() =>
                  this.setState({
                    sex: "Male"
                  })
                }
              />
              <div className="label-text">Male</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="X (unspecified)"
                checked={this.state.sex === "X (unspecified)"}
                onChange={() =>
                  this.setState({
                    sex: "X (unspecified)"
                  })
                }
              />
              <div className="label-text">X (unspecified)</div>
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

export default Sex;
