import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectMilitaryProof extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    this.props.history.push("/uploadMilitary");
  }

  back() {
    this.props.history.push("/selectBase");
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <div class="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
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

export default SelectMilitaryProof;
