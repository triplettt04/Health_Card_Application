import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";

class Sex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPeople: props.numberOfPeople
    };
  }

  addPerson() {
    this.setState(state => ({
      numberOfPeople: state.numberOfPeople + 1
    }));
  }

  deletePerson() {
    if (this.state.numberOfPeople > 1) {
      this.setState(state => ({
        numberOfPeople: state.numberOfPeople - 1
      }));
    }
  }

  back() {
    this.props.history.push("/birthday");
  }

  forward() {
    this.props.history.push("/sex");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-wrapper">
          <div className="text-input one-line">
            <label className="form-label" for="first-name-1">
              First Name
            </label>
            <input className="form-control" id="first-name-1" />
            <label className="form-label" for="last-name-1">
              Last Name
            </label>
            <input className="form-control" id="last-name-1" />
          </div>
          <div className="radio-field">
            <label class="radio-style block">
              <input type="radio" class="radio-input radio" name="example" />
              Male
            </label>
            <label className="radio-style block">
              <input type="radio" class="radio-input radio" name="example" />
              Female
            </label>
            <label className="radio-style block">
              <input type="radio" class="radio-input radio" name="example" />
              Other
            </label>
          </div>
          <button className="btn btn-primary" onClick={() => this.back()}>
            Back
          </button>
          <input type="submit" value="Next" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

export default Sex;
