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
    let path = process.env.PUBLIC_URL + "/birthday";
    this.props.history.push(path);
  }

  next(isMale) {
    let target = {
      name: "Sex",
      value: isMale ? "Male" : "Female"
    };
    this.props.save(target);
    let path = process.env.PUBLIC_URL + "/contact";
    this.props.history.push(path);
  }

  render() {
    let content = <div>What is your sex?</div>;

    return (
      <div>
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
      </div>
    );
  }
}

export default Sex;
