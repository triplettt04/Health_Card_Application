import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
import MaskedInput from "react-text-mask";

const decrementStyle = {
  backgroundColor: "#d6d6d6"
};

const doubleDigits = {
  paddingLeft: "11px"
};

const displayNone = {
  display: "none"
};

class ForWho extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forWhoUser: props.forWhoUser || false,
      forWhoSpouse: props.forWhoSpouse || false,
      forWhoDependant: props.forWhoDependant || false,
      count: 1
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    if (this.state.count != 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    this.props.history.push(process.env.PUBLIC_URL + "/"); //TO CHANGE
  }

  back() {
    this.props.history.push(process.env.PUBLIC_URL + "/birthday");
  }

  summary(event) {
    event.preventDefault();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit" && event.target[i].value.length) {
        this.props.save(event.target);
      }
    }
    this.props.save({
      name: "Summary",
      value: false
    });
    this.props.history.push(process.env.PUBLIC_URL + "/summary");
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">1 / 22</div>
        <h2 className="sub-header">Who would you like to apply for?</h2>
        <p className="caption">
          You are able to apply on behalf of your spouse and/or dependants.
          Please check all that apply.
        </p>
      </div>
    );

    let fullName = this.props.firstName
      ? this.props.firstName + " " + this.props.lastName
      : this.props.lastName;

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="checkbox-field">
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="For who user"
                checked={this.state.forWhoUser}
                onChange={event =>
                  this.setState({
                    forWhoUser: event.target.checked
                  })
                }
              />
              <div className="label-text">{fullName}</div>
            </label>
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="For who spouse"
                checked={this.state.forWhoSpouse}
                onChange={event =>
                  this.setState({
                    forWhoSpouse: event.target.checked
                  })
                }
              />
              <div className="label-text">Spouse of {fullName}</div>
            </label>
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="For who dependant"
                checked={this.state.forWhoDependant}
                onChange={event =>
                  this.setState({
                    forWhoDependant: event.target.checked
                  })
                }
              />
              <div className="label-text">Dependants of {fullName}</div>
            </label>
            <div
              className="counter"
              style={this.state.forWhoDependant === false ? displayNone : {}}
            >
              <p className="caption">How many dependents?</p>
              <button
                className="btn-counter btn-decrement"
                style={this.state.count != 1 ? {} : decrementStyle}
                onClick={event => {
                  event.preventDefault();
                  if (this.state.count != 1) {
                    this.setState(state => ({
                      count: parseInt(state.count) - 1
                    }));
                  }
                }}
              />
              <MaskedInput
                className="counter-input"
                mask={[/\d/, /\d/]}
                guide={false}
                style={this.state.count >= 10 ? doubleDigits : {}}
                onChange={event => {
                  event.preventDefault();
                  this.setState({
                    count: event.target.value
                  });
                }}
                value={this.state.count}
              />
              <button
                className="btn-counter btn-increment"
                onClick={event => {
                  event.preventDefault();
                  if (this.state.count < 99) {
                    this.setState(state => ({
                      count: parseInt(state.count) + 1
                    }));
                  }
                }}
              />
            </div>
          </div>
          <div className="btn-container">
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
        </div>
      </form>
    );
  }
}

export default ForWho;
