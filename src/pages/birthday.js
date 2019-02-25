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
        if (birthdayValues.length >= this.props.personNum + 1) {
          birthdayValues.splice(this.props.personNum, 1, event.target[i].value);
        } else {
          birthdayValues.push(event.target[i].value);
        }
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
        if (birthdayValues.length >= this.props.personNum + 1) {
          birthdayValues.splice(this.props.personNum, 1, event.target[i].value);
        } else {
          birthdayValues.push(event.target[i].value);
        }
        this.props.save({
          name: event.target[i].name,
          value: birthdayValues
        });
        noneEntered = false;
      }
    }
    if (!noneEntered) {
      if (this.props.forWhoUser === null || this.props.personNum === 0) {
        this.props.history.push(process.env.PUBLIC_URL + "/forWho");
      } else {
        if (
          (this.props.forWhoSpouse ? 1 : 0) + this.props.dependantCount ===
          this.props.personNum
        ) {
          this.props.save({
            name: "Person num",
            value: this.props.forWhoUser ? 0 : 1
          });
          this.props.history.push(process.env.PUBLIC_URL + "/specialCase");
        } else {
          let num = this.props.personNum + 1;
          this.props.save({
            name: "Person num",
            value: num
          });
          this.props.save({
            name: "pathFrom",
            value: "/birthday"
          });
          this.props.history.push(process.env.PUBLIC_URL + "/name");
        }
      }
    }
  }
  render() {
    let enableSummary =
      this.props.summary === true ? (
        <input
          className="btn btn-general btn-wide"
          type="submit"
          value="Save and go back"
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

    let numWording = this.props.numWording();

    let content =
      this.props.personNum === 0 ? (
        <div>
          <div className="progress-indicator">3 / total</div>
          <h2 className="sub-header">What is your date of birth?</h2>
          <p className="caption">
            This is <b>your</b> date of birth, regardless of whether you are
            applying for yourself and/or applying for your spouse or
            dependant(s).
          </p>
        </div>
      ) : this.props.forWhoSpouse && this.props.personNum === 1 ? (
        <div>
          <div className="progress-indicator">16 / 22</div>
          <h2 className="sub-header">
            Please enter your spouse’s date of birth.
          </h2>
          <p className="caption">
            This is your spouse’s date of birth{" "}
            <b>as it appears on official government documentation.</b>
          </p>
        </div>
      ) : (
        <div>
          <div className="progress-indicator">16 / 22</div>
          <h2 className="sub-header">
            What is your {numWording} dependant's date of birth?
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
          <div className="date-input">
            <label>Birthdate (DD/MM/YYYY)</label>
            <MaskedInput
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
              className="form-control"
              guide={true}
              defaultValue={
                this.props.birthday
                  ? this.props.birthday[this.props.personNum]
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
