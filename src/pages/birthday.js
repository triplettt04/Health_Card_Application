import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";
import constants from "../constants";

class Birthday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPeople: props.numberOfPeople
    };
  }

  addPerson() {
    this.setState(state => ({
      numberOfPeople: state.numberOfPeople + 1
    }));
  }

  deletePerson() {
    if (this.state.numberOfPeople > 1) {
      this.setState(state => ({
        numberOfPeople: state.numberOfPeople - 1
      }));
    }
  }

  back() {
    this.props.history.push("/");
  }
  next(event) {
    event.preventDefault();
    this.props.history.push("/sex");
  }
  render() {
    let currentPageEntries = this.props.currentPageEntries;
    let entries = [];
    for (let i = 0; i < this.state.numberOfPeople; i++) {
      entries.push(
        <Entries
          entries={currentPageEntries.entries}
          entryClass={currentPageEntries.entryClass}
          cardNumber={i}
          onChange={this.props.onChange}
        />
      );
    }
    let cards = [];
    for (let i = 0; i < entries.length; i++) {
      cards.push(<Card content={entries[i]} key={i} />);
    }
    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar sticky">
          <a className="navbar-brand" href="#">
            {constants.navTopName}
          </a>
        </nav>
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

export default Birthday;
