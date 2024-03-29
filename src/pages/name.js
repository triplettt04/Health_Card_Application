import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    let save = true,
      toSave = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === "text") {
        toSave.push(event.target[i]);
        if (
          !(event.target[i].value || event.target[i].value.length) &&
          event.target[i].name === "Last name"
        ) {
          save = false;
        }
      }
    }
    if (save) {
      for (let i = 0; i < toSave.length; i++) {
        let nameValues;
        switch (toSave[i].name) {
          case "First name":
            nameValues = this.props.firstName;
            break;
          case "Last name":
            nameValues = this.props.lastName;
            break;
          case "Middle name(s)":
            nameValues = this.props.middleName;
            break;
          default:
            console.log("Error - name: " + toSave[i].name);
        }
        if (nameValues.length >= this.props.personNum + 1) {
          nameValues.splice(this.props.personNum, 1, toSave[i].value);
        } else {
          nameValues.push(toSave[i].value);
        }
        this.props.save({
          name: toSave[i].name,
          value: nameValues
        });
      }
      this.props.save({
        name: "Summary",
        value: false
      });
      this.props.history.push(process.env.PUBLIC_URL + "/summary");
    }
  }

  next(event) {
    event.preventDefault();
    let save = true,
      toSave = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === "text") {
        toSave.push(event.target[i]);
        if (
          event.target[i].name === "Last name" &&
          !(event.target[i].value || event.target[i].value.length)
        ) {
          save = false;
        }
      }
    }
    if (save) {
      for (let i = 0; i < toSave.length; i++) {
        let nameValues;
        switch (toSave[i].name) {
          case "First name":
            nameValues = this.props.firstName;
            break;
          case "Last name":
            nameValues = this.props.lastName;
            break;
          case "Middle name(s)":
            nameValues = this.props.middleName;
            break;
        }
        if (nameValues.length >= this.props.personNum + 1) {
          nameValues.splice(this.props.personNum, 1, toSave[i].value || "");
        } else {
          nameValues.push(toSave[i].value || "");
        }
        this.props.save({
          name: toSave[i].name,
          value: nameValues
        });
      }
      let path = process.env.PUBLIC_URL + "/birthday";
      this.props.history.push(path);
    }
  }

  back() {
    this.props.save({
      name: "Person num",
      value: this.props.personNum > 0 ? this.props.personNum - 1 : 0
    });
    let path = process.env.PUBLIC_URL;
    switch (this.props.personNum) {
      case 0:
        path += "/";
        break;
      case 1:
        path += "/forWho";
        break;
      default:
        path += "/birthday";
    }
    this.props.history.push(path);
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
    let progress = this.props.personNum === 0 ? 1 : 4;

    let content =
      this.props.personNum === 0 ? (
        <div>
          <div className="progress-indicator">{progress} / 23</div>
          <h2 className="sub-header">Please enter your full name.</h2>
          <p className="caption">
            This is{" "}
            <span className="semibold">
              your full name as it appears on official government documentation
            </span>
            , regardless of whether you are applying for yourself and/or
            applying for your spouse or dependant(s).
            <br />
            <br />
            If your culture uses a single name, please leave the first and
            middle name(s) field empty.
          </p>
        </div>
      ) : this.props.forWhoSpouse && this.props.personNum === 1 ? (
        <div>
          <div className="progress-indicator">{progress} / 23</div>
          <h2 className="sub-header">Please enter your spouse’s full name.</h2>
          <p className="caption">
            This is your spouse’s full name{" "}
            <b>as it appears on official government documentation.</b>
            <br />
            <br />
            If your spouse’s culture uses a single name, please leave the first
            and middle name(s) field empty.
          </p>
        </div>
      ) : (
        <div>
          <div className="progress-indicator">{progress} / 23</div>
          <h2 className="sub-header">
            Please enter your {numWording} dependant's full name.
          </h2>
          <p className="caption">
            If your dependant's culture uses a single name, please leave the
            first and middle name(s) field empty.
          </p>
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
          <div className="text-input one-line">
            <label className="form-label" htmlFor="first-name-1">
              First name
            </label>
            <input
              className="form-control"
              id="first-name-1"
              name="First name"
              defaultValue={
                this.props.firstName
                  ? this.props.firstName[this.props.personNum]
                  : ""
              }
            />
            <label className="form-label" htmlFor="middle-name-1">
              Middle name(s)
            </label>
            <input
              className="form-control"
              id="middle-name-1"
              name="Middle name(s)"
              defaultValue={
                this.props.middleName
                  ? this.props.middleName[this.props.personNum]
                  : ""
              }
            />
            <label className="form-label" htmlFor="last-name-1">
              Last name / single name
            </label>
            <input
              className="form-control"
              id="last-name-1"
              name="Last name"
              defaultValue={
                this.props.lastName
                  ? this.props.lastName[this.props.personNum]
                  : ""
              }
            />
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default Name;
