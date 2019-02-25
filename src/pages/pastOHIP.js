import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class PastOHIP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pastOHIP: props.pastOHIP
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let target = {
      name: "Past OHIP",
      value: null
    };
    let pastOHIP,
      noneChecked = true;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit" && event.target[i].checked) {
        target.value = event.target[i].value;
        this.props.save(target);
        pastOHIP = event.target[i].value === "Yes";
        noneChecked = false;
      }
    }
    if (!noneChecked) {
      if (!pastOHIP) {
        let path = process.env.PUBLIC_URL + "/specialCase";
        this.props.history.push(path);
      } else {
        let path = process.env.PUBLIC_URL + "/moveDate";
        this.props.history.push(path);
      }
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">1 / 22</div>
        <h2 className="sub-header">Have you had OHIP coverage in the past?</h2>
        <p className="caption">
          Depending on when you last had coverage, you may not be required to
          reapply.
        </p>
      </div>
    );

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Yes"
                checked={this.state.pastOHIP === "Yes"}
                onChange={() =>
                  this.setState({
                    pastOHIP: "Yes"
                  })
                }
              />
              <div className="label-text">Yes</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="No"
                checked={this.state.pastOHIP === "No"}
                onChange={() =>
                  this.setState({
                    pastOHIP: "No"
                  })
                }
              />
              <div className="label-text">No</div>
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

export default PastOHIP;
