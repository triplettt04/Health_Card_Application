import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";
import NavigateButton from "../components/navigateButton";

class Login extends React.Component {
    authenticate() {
        let isValid = true;
        if (isValid) {
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
            <div>
                <h1>Login</h1>
                <Card content={entries} />
                <button
                    className="btn btn-primary"
                    onClick={() => this.authenticate()}>
                    Enter
                </button>
            </div>
        );
    }
}

export default Login;