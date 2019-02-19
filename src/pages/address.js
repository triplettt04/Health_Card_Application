import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streetRes: this.props.addressRes ? props.addressRes.street : "",
      cityRes: this.props.addressRes ? props.addressRes.city : "",
      postalCodeRes: this.props.addressRes ? props.addressRes.postalCode : "",
      checked: false,
      streetMail: this.props.addressMail.street
        ? this.props.addressMail.street
        : "",
      cityMail: this.props.addressMail.city ? this.props.addressMail.city : "",
      postalCodeMail: this.props.addressMail.postalCode
        ? this.props.addressMail.postalCode
        : "",
      provinceMail: this.props.addressMail.province
        ? this.props.addressMail.province
        : "",
      countryMail: this.props.addressMail.country
        ? this.props.addressMail.country
        : ""
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  checked(event) {
    if (event.target.checked) {
      this.setState({
        checked: true,
        streetMail: this.state.streetRes,
        cityMail: this.state.cityRes,
        postalCodeMail: this.state.postalCodeRes,
        provinceMail: "Ontario",
        countryMail: "Canada"
      });
    } else {
      this.setState({
        checked: false,
        streetMail: this.props.addressMail.street
          ? this.props.addressMail.street
          : "",
        cityMail: this.props.addressMail.city
          ? this.props.addressMail.city
          : "",
        postalCodeMail: this.props.addressMail.postalCode
          ? this.props.addressMail.postalCode
          : "",
        provinceMail: this.props.addressMail.province
          ? this.props.addressMail.province
          : "",
        countryMail: this.props.addressMail.country
          ? this.props.addressMail.country
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
    let path;
    if (this.props.pathFrom === "No") {
      path = process.env.PUBLIC_URL + "/uploadPosting";
    } else {
      path = process.env.PUBLIC_URL + "/uploadRes";
    }
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">8 / 22</div>
        <h2 className="sub-header">
          Your ontario residence address has been set to your military base
          address for now.
        </h2>
        <p className="caption">
          You can update your residence address with ServiceOntario after you
          know where you will be living.
        </p>
      </div>
    );

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="address-set">
            <label className="form-label">
              <b>Residence address</b>
            </label>
            <div className="text-input one-line">
              <label className="form-label" htmlFor="street-1">
                Street
              </label>
              <input
                className="form-control"
                id="street-1"
                name="Residence street"
                value={this.state.streetRes}
                onChange={event =>
                  this.setState({ streetRes: event.target.value })
                }
              />
              <label className="form-label" htmlFor="city-1">
                City
              </label>
              <input
                className="form-control"
                id="city-1"
                name="Residence city"
                value={this.state.cityRes}
                onChange={event =>
                  this.setState({ cityRes: event.target.value })
                }
              />
              <label className="form-label" htmlFor="postal-code-1">
                Postal code
              </label>
              <input
                className="form-control"
                id="postal-code-1"
                name="Residence postal code"
                value={this.state.postalCodeRes}
                onChange={event =>
                  this.setState({ postalCodeRes: event.target.value })
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
          </div>
          <div className="address-set">
            <label className="form-label">
              <b>Mailing address</b>
            </label>
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
                value={this.state.streetMail}
                readOnly={this.state.checked}
                onChange={event =>
                  this.setState({
                    streetMail: event.target.value
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
                value={this.state.cityMail}
                readOnly={this.state.checked}
                onChange={event =>
                  this.setState({
                    cityMail: event.target.value
                  })
                }
              />
              <label className="form-label" htmlFor="postal-code-1">
                Postal code
              </label>
              <input
                className="form-control"
                id="postal-code-1"
                name="Mailing postal code"
                value={this.state.postalCodeMail}
                readOnly={this.state.checked}
                onChange={event =>
                  this.setState({
                    postalCodeMail: event.target.value
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
                value={this.state.provinceMail}
                readOnly={this.state.checked}
                onChange={event =>
                  this.setState({
                    provinceMail: event.target.value
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
                value={this.state.countryMail}
                readOnly={this.state.checked}
                onChange={event =>
                  this.setState({
                    countryMail: event.target.value
                  })
                }
              />
            </div>
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

export default Address;
