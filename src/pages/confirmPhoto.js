import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectBase extends React.Component {
  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    this.props.history.push("/selectMilitaryProof");
  }

  back() {
    this.props.history.push("/inCamera");
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <div className="ontario-header-container">
          <img
            src={require("./project-header.png")}
            className="ontario-header"
          />
        </div>
      </form>
    );
  }
}

export default SelectBase;
