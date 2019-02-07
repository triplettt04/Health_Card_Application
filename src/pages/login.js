import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";

function Login(props) {
    debugger;
    let currentPageEntries = props.currentPageEntries;
    let entries = (
        <Entries
            entries={currentPageEntries.entries}
            entryClass={currentPageEntries.entryClass}
        />);
    return (
        <div>
            <h1>Login</h1>
            <Card content={entries} />
            <button
                onClick={() => this.nextPageUpdateEntries()}
                className="btn btn-primary">
                Enter
            </button>
        </div>
    );
}

export default Login;