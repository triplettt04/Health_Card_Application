import React from "react";

export default function Entries(props) {
  let tableEntries = [];
  for (let i = 0; i < props.entries.length; i++) {
    tableEntries.push(
      <div key={i}>
        <div className="entry-labls">{props.entries[i]}</div>
        <div className="entry-input">
          <input type="text" />
        </div>
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

/* <table className={props.tableClass}>
<tbody>
    {tableEntries}
</tbody>
</table> */
