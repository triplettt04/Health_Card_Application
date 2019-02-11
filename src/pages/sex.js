import React from "react";

class Sex extends React.Component {
  back() {
    this.props.history.push("/birthday");
  }

  forward(event) {
    event.preventDefault();
    this.props.history.push("/sex");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-wrapper">
          <div className="text-input one-line">
            <label className="form-label" htmlFor="first-name-1">
              First Name
            </label>
            <input className="form-control" id="first-name-1" />
            <label className="form-label" htmlFor="last-name-1">
              Last Name
            </label>
            <input className="form-control" id="last-name-1" />
          </div>
          <div className="radio-field">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              Male
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              Female
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
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
