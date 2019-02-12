import React from "react";
import constants from "../constants";
import Card from "../components/card";

class AddressRes extends React.Component {
  constructor(props) {
    super(props);

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
        <div class="ontario-header-container">
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
            />
            <label className="form-label" htmlFor="city-1">
              City
            </label>
            <input className="form-control" id="city-1" name="Residence city" />
            <label className="form-label" htmlFor="postal-code-1">
              Postal code
            </label>
            <input
              className="form-control"
              id="postal-code-1"
              name="Residence postal code"
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
        <footer className="footer">
          <button
            className="btn btn-navigation btn-left-align"
            onClick={() => this.back()}
          >
            Back
          </button>
          <input
            type="submit"
            value="Next"
            className="btn btn-navigation btn-right-align"
          />
        </footer>
      </form>
    );
  }
}

export default AddressRes;
