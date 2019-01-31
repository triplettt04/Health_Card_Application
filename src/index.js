import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

import pageEntries from "./constants";

import Card from "./card";
import Entries from "./entries";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: pageEntries[0].entries,
      entryClass: pageEntries[0].entryClass
    };
  }

  render() {
    let entries = (
      <Entries
        entries={this.state.entries}
        entryClass={this.state.entryClass}
      />
    );

    return (
      <div>
        <Card content={entries} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
