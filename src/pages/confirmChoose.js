import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class ConfirmChoose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: null
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    if (this.state.checked) {
      let updateDone = [];
      for (let i = 0; i < this.props.done.length; i++) {
        if (i === this.state.checked) {
          updateDone.push(true);
        } else {
          updateDone.push(this.props.done[i]);
        }
      }
      this.props.save({
        name: "Done",
        value: updateDone
      });
      this.props.save({
        name: "Person num",
        value: this.state.checked
      });
      let path = process.env.PUBLIC_URL + "/sameHouse";
      this.props.history.push(path);
    }
  }

  back() {
    //This is really cancel or something like that
    let path = process.env.PUBLIC_URL + "/";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">1 / 22</div>
        <h2 className="sub-header">Confirmation and choose next applicant</h2>
      </div>
    );

    let extraText = "You have already submitted this application";
    let radioButtons = [];
    for (
      let i = this.props.forWhoUser ? 0 : 1;
      i < this.props.firstName.length;
      i++
    ) {
      let isDisabled = this.props.done[i];
      radioButtons.push(
        <label
          className={
            isDisabled ? "radio-style block dead" : "radio-style block"
          }
          key={i}
        >
          <input
            type="radio"
            className="radio-input radio"
            name="example"
            value={i}
            checked={this.state.checked === i}
            disabled={isDisabled}
            onChange={() =>
              this.setState({
                checked: i
              })
            }
          />
          <div className="label-text">
            {isDisabled
              ? this.props.firstName[i] +
                " " +
                this.props.lastName[i] +
                extraText
              : this.props.firstName[i] + " " + this.props.lastName[i]}
          </div>
        </label>
      );

      return (
        <form onSubmit={event => this.next(event)}>
          <Nav />
          <div className="form-wrapper">
            <Card content={content} />
            <div className="radio-field">{radioButtons}</div>
            <div className="btn-container">
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
          </div>
        </form>
      );
    }
  }
}

export default ConfirmChoose;
