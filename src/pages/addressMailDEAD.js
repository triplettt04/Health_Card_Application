import React from "react";
import constants from "../constants";
import Card from "../components/card";

class AddressMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      street:
        this.props.address && this.props.address.street
          ? this.props.address.street
          : "",
      city:
        this.props.address && this.props.address.city
          ? this.props.address.city
          : "",
      postalCode:
        this.props.address && this.props.address.postalCode
          ? this.props.address.postalCode
          : "",
      province:
        this.props.address && this.props.address.province
          ? this.props.address.province
          : "",
      country:
        this.props.address && this.props.address.country
          ? this.props.address.country
          : ""
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.checked = this.checked.bind(this);
  }

  checked(event) {
    if (event.target.checked) {
      this.setState({
        checked: event.target.checked,
        street: this.props.street,
        city: this.props.city,
        postalCode: this.props.postalCode,
        province: this.props.province,
        country: this.props.country
      });
    } else {
      this.setState({
        checked: event.target.checked,
        street:
          this.props.address && this.props.address.street
            ? this.props.address.street
            : "",
        city:
          this.props.address && this.props.address.city
            ? this.props.address.city
            : "",
        postalCode:
          this.props.address && this.props.address.postalCode
            ? this.props.address.postalCode
            : "",
        province:
          this.props.address && this.props.address.province
            ? this.props.address.province
            : "",
        country:
          this.props.address && this.props.address.country
            ? this.props.address.country
            : ""
      });
    }
  }

  next(event) {
    event.preventDefault();
    let save = true,
      toSave = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === "text") {
        toSave.push(event.target[i]);
        if (!event.target[i].value.length) {
          save = false;
        }
      }
    }
    if (save) {
      for (let i = 0; i < toSave.length; i++) {
        this.props.save(toSave[i]);
      }
      let path = process.env.PUBLIC_URL + "/selectCitizen";
      this.props.history.push(path);
    }
  }

  back() {
    //TODO!!
    let path = process.env.PUBLIC_URL + "/addressRes";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">9 / 23</div>
        <h2 className="sub-header">Please enter your mailing address.</h2>
        <p className="caption">
          This is where we will mail your health card and send correspondence.
        </p>
      </div>
    );

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
          <div className="checkbox-field">
            <label className="checkbox-style block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="Same as residence address"
                onChange={event => this.checked(event)}
              />
              <div className="label-text">Same as residence address</div>
            </label>
          </div>
          <div className="text-input one-line">
            <label className="form-label" htmlFor="street-1">
              Street
            </label>
            <input
              className="form-control"
              id="street-1"
              name="Mailing street"
              value={this.state.street}
              readOnly={this.state.checked}
              onChange={event =>
                this.setState({
                  street: event.target.value
                })
              }
            />
            <label className="form-label" htmlFor="city-1">
              City
            </label>
            <input
              className="form-control"
              id="city-1"
              name="Mailing city"
              value={this.state.city}
              readOnly={this.state.checked}
              onChange={event =>
                this.setState({
                  city: event.target.value
                })
              }
            />
            <label className="form-label" htmlFor="postal-code-1">
              Postal code
            </label>
            <input
              className="form-control area-code"
              id="postal-code-1"
              name="Mailing postal code"
              value={this.state.postalCode}
              readOnly={this.state.checked}
              onChange={event =>
                this.setState({
                  postalCode: event.target.value
                })
              }
            />
            <label className="form-label" htmlFor="province-1">
              Province
            </label>
            <input
              className="form-control"
              id="province-1"
              name="Mailing province"
              value={this.state.province}
              readOnly={this.state.checked}
              onChange={event =>
                this.setState({
                  province: event.target.value
                })
              }
            />
            <label className="form-label" htmlFor="country-1">
              Country
            </label>
            <input
              className="form-control"
              id="country-1"
              name="Mailing country"
              value={this.state.country}
              readOnly={this.state.checked}
              onChange={event =>
                this.setState({
                  country: event.target.value
                })
              }
            />
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

export default AddressMail;
