import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";
import NavigateButton from "../components/navigateButton";

function Login(props) {
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
            <NavigateButton
                path="/birthday"
                text="Enter"
                onClick={props.next}
            />
        </div>
    );
}

export default Login;