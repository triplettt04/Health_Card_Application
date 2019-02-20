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
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        this.props.save({
          name: "Sex",
          value: event.target[i].value
        });
      }
    }
    this.props.save({
      name: "Summary",
      value: false
    });
    this.props.history.push(process.env.PUBLIC_URL + "/summary");
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
    let enableSummary =
      this.props.summary === true ? (
        <input
          className="btn btn-general btn-wide"
          type="submit"
          value="Back to summary"
        />
      ) : (
        <div>
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
      );

    let content = (
      <div>
        <div className="progress-indicator">17 / 22</div>
        <h2 className="sub-header">
          What is your sex on your passport or birth certificate?
        </h2>
      </div>
    );

    return (
      <form
        onSubmit={event =>
          this.props.summary ? this.summary(event) : this.next(event)
        }
      >
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
                value="X"
                checked={this.state.sex === "X"}
                onChange={() =>
                  this.setState({
                    sex: "X"
                  })
                }
              />
              <div className="label-text">X</div>
            </label>
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default Sex;
