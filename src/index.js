import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

import constants from "./constants";

import Card from "./card";
import Entries from "./entries";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            entryNumber: 0,
            page: 1,
            numberOfPeople: 1,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextPage() {
        this.setState(state => ({
            page: state.page + 1,
        }));
    }

    nextPageUpdateEntries() {
        this.setState(state => ({
            page: state.page + 1,
            entryNumber: state.entryNumber + 1,
        }));
    }

    addPerson() {
        this.setState(state => ({
            numberOfPeople: state.numberOfPeople + 1,
        }));
    }

    deletePerson() {
        if (this.state.numberOfPeople > 1) {
            this.setState(state => ({
                numberOfPeople: state.numberOfPeople - 1,
            }));
        }
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //Add validation
        event.preventDefault();
    }

    render() {
        //Determine which cards to show based on page
        let content, entries;
        let currentPageEntries = constants.pageEntries[this.state.entryNumber];

        switch (this.state.page) {
            case constants.loginPage:
                entries = (
                    <Entries
                        entries={currentPageEntries.entries}
                        entryClass={currentPageEntries.entryClass}
                    />);
                content = (
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
                break;
            case constants.formPage:
                entries = [];
                for (let i = 0; i < this.state.numberOfPeople; i++) {
                    entries.push(
                        <Entries
                            entries={currentPageEntries.entries}
                            entryClass={currentPageEntries.entryClass}
                            cardNumber={i}
                            onChange={this.handleChange}
                        />
                    );
                }
                let cards = [];
                for (let i = 0; i < entries.length; i++) {
                    cards.push(<Card content={entries[i]} key={i} />);
                }
                content = (
                    <form onSubmit={this.handleSubmit}>
                        {cards}
                        <input
                            type="submit"
                            value="Next"
                            className="btn btn-primary"
                        />
                    </form>);
                break;
            default:
                content.push(
                    <div>
                        ERROR - Unknown page number! - ERROR
                </div>
                );
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
