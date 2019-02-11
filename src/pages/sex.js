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
        <nav className="navbar sticky">
          <a className="navbar-brand" href="#">
            Home
          </a>
        </nav>
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
          <div className="text-box text-box-small" />
          What is your sex (as indicated on your passport)?
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

export default Sex;
