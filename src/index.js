import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

import constants from "./constants";

import Card from "./card";
import Entries from "./entries";

import Card from "./card";
import Entries from "./entries";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: constants.pageEntries[0].entries,
      entryClass: constants.pageEntries[0].tableClass
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
