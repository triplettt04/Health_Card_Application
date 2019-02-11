import React from "react";
import Card from "../components/card";
import constants from "../constants";

class Sex extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  back() {
    this.props.history.push("/birthday");
  }

  next(isMale) {
    let target = {
      name: "Sex",
      value: isMale ? "Male" : "Female"
    };
    this.props.save(target);
    this.props.history.push("/contact");
  }

  render() {
    let content = <div>What is your sex?</div>;

    return (
      <div>
        <nav className="navbar sticky">
          <a className="navbar-brand" href="#">
            {constants.navTopName}
          </a>
        </nav>
        <div className="form-wrapper">
          <Card content={content} />
          <div className="row">
            <button
              className={constants.buttonClasses}
              onClick={() => this.next(true)}
            >
              Male
            </button>
          </div>
          <div className="row">
            <button
              className={constants.buttonClasses}
              onClick={() => this.next(false)}
            >
              Female
            </button>
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
      </div>
    );
  }
}

export default Sex;
