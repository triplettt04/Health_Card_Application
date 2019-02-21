import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SameHouse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sameHouse: props.sameHouse
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    let target = {
      name: "Same house",
      value: this.state.sameHouse
    };
    if (this.state.sameHouse != null) {
      this.props.save(target);
      if (this.state.sameHouse) {
        let path = process.env.PUBLIC_URL + "/selectCitizen";
        this.props.history.push(path);
      } else {
        this.props.save({
          name: "pathFrom",
          value: "/sameHouse"
        });
        this.props.history.push({
          pathname: process.env.PUBLIC_URL + "/selectResProof"
        });
      }
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/confirmation";
    this.props.history.push(path);
  }

  render() {
    let previousName = "Mary Cook"; //TO CHANGE

    let content = (
      <div>
        <div className="progress-indicator">0 / 22</div>
        <h2 className="sub-header">
          Are you moving to the same household as {previousName}?
        </h2>
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
                checked={this.state.sameHouse === true}
                onChange={() =>
                  this.setState({
                    sameHouse: true
                  })
                }
              />
              <div className="label-text"> Yes</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="No"
                checked={this.state.sameHouse === false}
                onChange={() =>
                  this.setState({
                    sameHouse: false
                  })
                }
              />
              <div className="label-text"> No</div>
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

export default SameHouse;