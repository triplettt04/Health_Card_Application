import React from "react";
import Card from "../components/card";
import constants from "../constants";

class Birthday extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  back() {
    this.props.history.push("/name");
  }
  next(event) {
    event.preventDefault();
    this.props.history.push("/sex");
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
      </form>
    );
  }
}

export default Birthday;
