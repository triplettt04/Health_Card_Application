import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectMilitaryProof extends React.Component {
  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    this.props.history.push("/uploadMilitary");
  }

  back() {
    this.props.history.push("/selectBase");
  }

  render() {
    //Add header element
    let entries = "";
    return (
      <form onSubmit={event => this.next(event)}>
        <Card content={entries} />
        <button className={constants.buttonClasses} onClick={() => this.back()}>
          Back
        </button>
        <input className={constants.buttonClasses} type="submit" value="Next" />
      </form>
    );
  }
}

export default SelectMilitaryProof;
