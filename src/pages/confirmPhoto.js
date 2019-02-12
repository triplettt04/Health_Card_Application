import React from "react";
import constants from "../constants";
import Card from "../components/card";

class SelectBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.location.state ? props.location.state.img : ""
    };

    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  next(event) {
    event.preventDefault();
    let pathFrom = this.props.location.state.pathFrom;
    this.props.history.push({
      pathname: pathFrom,
      state: {
        uploaded: true
      }
    });
  }

  back() {
    let pathFrom = this.props.location.state.pathFrom;
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + "/inCamera",
      state: {
        pathFrom: pathFrom
      }
    });
  }

  render() {
    return (
      <form onSubmit={event => this.next(event)}>
        <img className="upload-image" src={this.state.img} />
        <div className="btn-container">
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Retake
          </button>
          <input
            type="submit"
            value="Accept"
            className="btn btn-general btn-right-align"
          />
        </div>
      </form>
    );
  }
}

export default SelectBase;
