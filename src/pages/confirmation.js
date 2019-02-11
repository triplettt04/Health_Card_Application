import React from "react";
import constants from "../constants";

class Confirmation extends React.Component {
  //There should be no next or back

  render() {
    return (
      <nav className="navbar sticky">
        <a className="navbar-brand" href="#">
          {constants.navTopName}
        </a>
      </nav>
    );
  }
}

export default Confirmation;
