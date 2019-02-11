import React from "react";
import Card from "../components/card";
import constants from "../constants";

class Terms extends React.Component {
  next(event) {
    event.preventDefault();
    this.props.history.push("/pastOHIP");
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
