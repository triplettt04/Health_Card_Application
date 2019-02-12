import React from "react";

function NotFound() {
  return (
    <div>
      <div className="ontario-header-container">
        <img src={require("./project-header.png")} className="ontario-header" />
      </div>
      <div>This page does not exist.</div>
    </div>
  );
}

export default NotFound;
