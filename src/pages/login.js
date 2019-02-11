import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";
import constants from "../constants";

class Login extends React.Component {
    authenticate(event) {
        event.preventDefault();
        let isValid = true;
        if (isValid) {
            for (let i = 0; i < event.target.length; i++) {
                if (event.target[i].type !== "submit") {
                    this.props.save(event.target[i]);
                }
            }
            this.props.history.push("/birthday");
        }
    }
    render() {
        let entries = (
            <Entries
                entries={this.props.currentPageEntries.entries}
                entryClass={this.props.currentPageEntries.entryClass}
            />);
        return (
            <form onSubmit={(event) => this.authenticate(event)}>
                <h1>Login</h1>
                <Card content={entries} />
                <input
                    className={constants.buttonClasses}
                    type="submit"
                    value="Enter"
                />
            </form>
        );
    }
}

export default Login;