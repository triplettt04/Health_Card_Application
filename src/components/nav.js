import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar ontario-header-container">
        <div className="brand">OHIP application</div>
        <a className="french-toggle" href="#">
          FR
        </a>
      </nav>
    );
  }
}

export default Nav;
