import React from "react";
import constants from "../constants";
import Card from "../components/card";

class IsMilitary extends React.Component {
  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let isMilitary = true;
    if (isMilitary) {
      this.props.history.push("/selectBase");
    } else {
      this.props.history.push("/selectResProof");
    }
  }

  back() {
    this.props.history.push("/pastOHIP");
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

export default IsMilitary;
