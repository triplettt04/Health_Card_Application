import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectResProof extends React.Component {
  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    this.props.history.push("/uploadRes");
  }

  back() {
    this.props.history.push("/hasAddress");
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

export default SelectResProof;
