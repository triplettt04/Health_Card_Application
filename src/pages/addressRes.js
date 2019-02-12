import React from "react";
import constants from "../constants";
import Card from "../components/card";

class AddressRes extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      street: this.props.address ? props.address.street : null,
      city: this.props.address ? props.address.city : null,
      postalCode: this.props.address ? props.address.postalCode : null
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit") {
        this.props.save(event.target[i]);
      }
    }
    this.props.history.push("/addressMail");
  }

  back() {
    this.props.history.push(this.props.location.state.pathFrom);
  }

  render() {
    let content = <div>What is your residence address?</div>;

    return (
      <form onSubmit={event => this.next(event)}>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
        <div className="form-wrapper">
          <Card content={content} />
          <div className="text-input one-line">
            <label className="form-label" htmlFor="street-1">
              Street
            </label>
            <input
              className="form-control"
              id="street-1"
              name="Residence street"
              defaultValue={this.state.street}
              onChange={event => this.setState({ street: event.target.value })}
            />
            <label className="form-label" htmlFor="city-1">
              City
            </label>
            <input
              className="form-control"
              id="city-1"
              name="Residence city"
              defaultValue={this.state.city}
              onChange={event => this.setState({ city: event.target.value })}
            />
            <label className="form-label" htmlFor="postal-code-1">
              Postal code
            </label>
            <input
              className="form-control"
              id="postal-code-1"
              name="Residence postal code"
              defaultValue={this.state.postalCode}
              onChange={event =>
                this.setState({ postalCode: event.target.value })
              }
            />
            <label className="form-label" htmlFor="province-1">
              Province
            </label>
            <input
              className="form-control"
              id="province-1"
              name="Residence province"
              value="Ontario"
              disabled={true}
            />
            <label className="form-label" htmlFor="country-1">
              Country
            </label>
            <input
              className="form-control"
              id="country-1"
              name="Residence country"
              value="Canada"
              disabled={true}
            />
          </div>
          <div className="btn-container">
            <button
              className="btn btn-general btn-invert"
              onClick={() => this.back()}
            >
              Back
            </button>
            <input
              type="submit"
              value="Next"
              className="btn btn-general btn-right-align"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default AddressRes;
