import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class Template extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let path = process.env.PUBLIC_URL + "/";
    this.props.history.push(path);
  }

  back() {
    let path = process.env.PUBLIC_URL + "/";
    this.props.history.push(path);
  }

  summary(event) {
    event.preventDefault();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit" && event.target[i].value.length) {
        this.props.save(event.target);
      }
    }
    this.props.save({
      name: "Summary",
      value: false
    });
    this.props.history.push(process.env.PUBLIC_URL + "/summary");
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">1 / 22</div>
        <h2 className="sub-header">Description of the chameleon</h2>
        <p className="caption">
          Chameleons are distinguished by their feet; their very extensive,
          highly modified, rapidly extrudable tongues; their swaying gait;[2]
          and crests or horns on their brow and snout. Most species, the larger
          ones in particular, also have a prehensile tail. Chameleons' eyes are
          independently mobile, but in aiming at a prey item, they focus forward
          in coordination, affording the animal stereoscopic vision. <br />
          <br />
          Chameleons are adapted for climbing and visual hunting. They live in
          warm habitats that range from rain forest to desert conditions, with
          various species occurring in Africa, Madagascar, southern Europe, and
          across southern Asia as far as Sri Lanka. They also have been
          introduced to Hawaii, California, and Florida, and often are kept as
          household pets
        </p>
      </div>
    );

    return (
      <form onSubmit={this.next}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="text-input one-line">
            <label className="form-label" htmlFor="first-name-1">
              First Name
            </label>
            <input className="form-control" id="first-name-1" name="" />
            <label className="form-label" htmlFor="last-name-1">
              Last Name
            </label>
            <input className="form-control" id="last-name-1" name="" />
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
              <div className="label-text">Male</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              <div className="label-text">Female</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
              />
              <div className="label-text">I am very completely non-binary</div>
            </label>
          </div>
          What is your vegetable (as indicated on your passport)?
          <div className="checkbox-field">
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="example"
              />
              <div className="label-text">
                I really love all types of mushrooms in general
              </div>
            </label>
            <label className="checkbox-label block">
              <input
                type="checkbox"
                className="checkbox-input checkbox"
                name="example"
              />
              <div className="label-text">I love cabbage and potatoes</div>{" "}
            </label>
          </div>
          <div className="option-container">
            <button className="btn btn-general btn-options">Yes</button>
            <button className="btn btn-general btn-options">No</button>
            <button className="btn btn-general btn-options btn-selected">
              Maybe So
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
          <div className="btn-container">
            <input
              type="submit"
              value="Next"
              className="btn btn-general btn-right-align btn-inactive"
            />
            <button
              className="btn btn-general btn-invert"
              onClick={() => this.back()}
            >
              Back
            </button>
            <button
              className="btn btn-general btn-wide"
              onClick={event => this.summary(event)}
            >
              Back to summary
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Template;
