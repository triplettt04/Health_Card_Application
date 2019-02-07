import React from "react";

export default function Entries(props) {
  let tableEntries = [];
  for (let i = 0; i < props.entries.length; i++) {
    //Use the card index on the page plus the entry name as
    //the name for input fields
    let name = props.cardNumber
      ? props.cardNumber.toString() + props.entries[i]
      : props.entries[i];
    let input;
    if (props.onChange) {
      input = <input type="text" name={name} onChange={props.onChange} />;
    } else {
      input = <input type="text" name={name} />;
    }
    tableEntries.push(
      <div key={i}>
        <div className="entry-labls">{props.entries[i]}</div>
        <div className="entry-input">{input}</div>
      </div>
    );
  }
  return (
    <div className={props.entryClass}>
      <button className="close">
        <span className="glyphicon glyphicon-remove" aria-hidden="true" />
      </button>
      <div className="user-entry">{tableEntries}</div>
    </div>
  );
}
