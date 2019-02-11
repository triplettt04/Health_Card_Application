import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";
import constants from "../constants";

class Terms extends React.Component {
  next(event) {
    event.preventDefault();
    let isValid = true;
    if (isValid) {
      for (let i = 0; i < event.target.length; i++) {
        if (event.target[i].type !== "submit") {
          this.props.save(event.target[i]);
        }
      }
      this.props.history.push("/birthday");
    }
  }
  render() {
    let entries = "Nothing yet";
    return (
      <form onSubmit={event => this.next(event)}>
        <h1>Terms and conditions</h1>
        <Card content={entries} />
        <input
          className={constants.buttonClasses}
          type="submit"
          value="Accept"
        />
      </form>
    );
  }
}

export default Terms;
