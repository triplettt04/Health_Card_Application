import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class SelectBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseLabel: props.baseLabel ? props.baseLabel : "",
      city: props.city || "",
      province: props.province || "",
      postalCode: props.postalCode || ""
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.summary = this.summary.bind(this);
  }
  summary(event) {
    event.preventDefault();
    let noneChecked = true;
    let value;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        noneChecked = false;
        value = this.findIndex(event.target[i].value);
      }
    }
    if (!noneChecked) {
      let target = {
        name: "baseIndex",
        value: value
      };
      this.props.save(target);
      this.props.history.push(process.env.PUBLIC_URL + "/summary");
    }
  }

  next(event) {
    event.preventDefault();
    let noneChecked = true;
    let value;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        noneChecked = false;
        value = this.findIndex(event.target[i].value);
      }
    }
    if (!noneChecked) {
      let target = {
        name: "baseIndex",
        value: value
      };
      this.props.save(target);
      if (this.state.baseLabel === "Other location") {
        this.props.save({
          name: "Residence street",
          value: this.state.street
        });
        this.props.save({
          name: "Residence city",
          value: this.state.city
        });
        this.props.save({
          name: "Residence postal code",
          value: this.state.postalCode
        });
      }
      let path = process.env.PUBLIC_URL + "/uploadPosting";
      this.props.history.push(path);
    }
  }

  findIndex(label) {
    for (let i = 0; i < constants.militaryAddresses.length; i++) {
      if (constants.militaryAddresses[i].label === label) {
        return i;
      }
    }
    return null;
  }

  back() {
    let path = process.env.PUBLIC_URL + "/hasAddress";
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

    let content = (
      <div>
        <div className="progress-indicator">10 / 23</div>
        <h2 className="sub-header">
          Please indicate which Ontario base the military member has been posted
          to.
        </h2>
      </div>
    );

    let radioButtons = [];
    for (let i = 0; i < constants.militaryAddresses.length; i++) {
      radioButtons.push(
        <label
          className="radio-style block"
          key={constants.militaryAddresses[i].label}
        >
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={constants.militaryAddresses[i].label}
            checked={
              this.state.baseLabel === constants.militaryAddresses[i].label
            }
            onChange={() =>
              this.setState({
                baseLabel: constants.militaryAddresses[i].label
              })
            }
          />
          <div className="label-text">
            {constants.militaryAddresses[i].value}
          </div>
        </label>
      );
    }

    let extraAddress =
      this.state.baseLabel === "Other location" ? (
        <div className="address-set padding-no-top">
          <div className="text-input one-line">
            <label className="form-label" htmlFor="street-1">
              Street
            </label>
            <input
              className="form-control"
              id="street-1"
              name="Residence street"
              value={this.state.street}
              onChange={event => this.setState({ street: event.target.value })}
            />
            <label className="form-label" htmlFor="city-1">
              City
            </label>
            <input
              className="form-control"
              id="city-1"
              name="Residence city"
              value={this.state.city}
              onChange={event => this.setState({ city: event.target.value })}
            />
            <label className="form-label" htmlFor="postal-code-1">
              Postal code
            </label>
            <input
              className="form-control area-code"
              id="postal-code-1"
              name="Residence postal code"
              value={this.state.postalCode}
              onChange={event =>
                this.setState({ postalCode: event.target.value })
              }
            />
          </div>
        </div>
      ) : (
        ""
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
          <div className="radio-field small-font">{radioButtons}</div>
          {extraAddress}
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
      </form>
    );
  }
}

export default SelectBase;
