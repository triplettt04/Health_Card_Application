import React from "react";
import constants from "../constants";

class SelectCitizen extends React.Component {
  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    this.props.history.push("/confirmPhoto");
  }

  back() {
    if (this.props.location.state.pathFrom) {
      this.props.history.push(this.props.location.state.pathFrom);
    } else {
      this.props.history.push("/howSignature");
    }
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <footer className="footer camera-footer">
          <button className="camera-cancel" onClick={() => this.back()}>
            Cancel
          </button>
          <input type="submit" className="camera-button" />
        </footer>
      </form>
    );
  }
}

export default SelectCitizen;
