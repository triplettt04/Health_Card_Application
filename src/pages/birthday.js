import React from "react";
import Card from "../components/card";
import Nav from "../components/nav";
import constants from "../constants";
import MaskedInput from "react-text-mask";

class Birthday extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    for (let i = 0; i < event.target.length; i++) {
      if (
        event.target[i].type !== "submit" &&
        event.target[i].value.length > 7
      ) {
        let birthdayValues = this.props.birthday;
        if (birthdayValues.length > 0) {
          birthdayValues.pop();
        }
        birthdayValues.push(event.target[i].value);
        this.props.save({
          name: event.target[i].name,
          value: birthdayValues
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
    let path = process.env.PUBLIC_URL + "/name";
    this.props.history.push(path);
  }
  next(event) {
    event.preventDefault();
    let noneEntered = true;
    for (let i = 0; i < event.target.length; i++) {
      if (
        event.target[i].type !== "submit" &&
        event.target[i].value.length > 7
      ) {
        let birthdayValues = this.props.birthday;
        if (birthdayValues.length > 0) {
          birthdayValues.pop();
        }
        birthdayValues.push(event.target[i].value);
        this.props.save({
          name: event.target[i].name,
          value: birthdayValues
        });
        noneEntered = false;
      }
    }
    if (!noneEntered) {
      let path = process.env.PUBLIC_URL + "/sex";
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

    let content =
      this.props.personNum === 0 ? (
        <div>
          <div className="progress-indicator">16 / 22</div>
          <h2 className="sub-header">What is your date of birth?</h2>
          <p className="caption">
            This is <b>your</b> date of birth, regardless of whether you are
            applying for yourself and/or applying for your spouse or
            dependant(s).
          </p>
        </div>
      ) : (
        <div>
          <div className="progress-indicator">16 / 22</div>
          <h2 className="sub-header">What is your date of birth?</h2>
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
          <div className="birthdate-input">
            <label>Birthdate (DD/MM/YYYY)</label>
            <MaskedInput
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
              className="form-control"
              guide={true}
              defaultValue={
                this.props.birthday
                  ? this.props.birthday[this.state.personNum]
                  : ""
              }
              name="Birthday"
            />
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default Birthday;
