import React from "react";
import constants from "../constants";

class Confirmation extends React.Component {
  //There should be no next or back

  render() {
    return (
      <div class="ontario-header-container">
        <img src={require("./project-header.png")} className="ontario-header" />
      </div>
    );
  }
}

export default Confirmation;
