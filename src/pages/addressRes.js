import React from "react";
import constants from "../constants";
import Card from "../components/card";

class AddressRes extends React.Component {
  constructor(props) {
    super(props);

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
    let path = process.env.PUBLIC_URL + "/addressMail";
    this.props.history.push(path);
  }

  back() {
    let path;
    if (this.props.pathFrom === "No") {
      path = process.env.PUBLIC_URL + "/uploadPosting";
    } else {
      path = process.env.PUBLIC_URL + "/uploadRes";
    }
    this.props.history.push(path);
  }

  render() {
    let content = <div>What is your residence address?</div>;

    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar ontario-header-container">
          <a className="brand" href="#">
            OHIP application
          </a>
          <a className="french-toggle" href="#">
            FR
          </a>
        </nav>
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
