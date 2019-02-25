import React from "react";
import Card from "../components/card";
import Nav from "../components/nav";
import constants from "../constants";
import MaskedInput from "react-text-mask";

class MoveWhen extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  back() {
    let path = process.env.PUBLIC_URL + "/specialCase";
    this.props.history.push(path);
  }
  next(event) {
    event.preventDefault();
    let noneEntered = true;
    for (let i = 0; i < event.target.length; i++) {
      if (
        event.target[i].type !== "submit" &&
        event.target[i].value.length > 7
      ) {
        let [day, month, year] = event.target[i].value.split("/");
        let enteredDate = new Date(year, month - 1, day);
        if (enteredDate > Date.now()) {
          break;
        }
        this.props.save(event.target[i]);
        noneEntered = false;
      }
    }
    if (!noneEntered) {
      this.props.history.push(process.env.PUBLIC_URL + "/selectResProof");
    }
  }
  render() {
    let content = (
      <div>
        <div className="progress-indicator">16 / 22</div>
        <h2 className="sub-header">When did you arrive to Ontario?</h2>
      </div>
    );

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="movedate-input">
            <label>Arrival date (DD/MM/YYYY)</label>
            <MaskedInput
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
              className="form-control"
              guide={true}
              defaultValue={this.props.moveWhen ? this.props.moveWhen : ""}
              name="Move when"
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

export default MoveWhen;
