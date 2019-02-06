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
            entries: constants.pageEntries[0].entries,
            entryClass: constants.pageEntries[0].tableClass,
            page: 1,
            numberOfPeople: 2,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextPage() {
        this.setState(state => ({
            page: state.page + 1,
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
        let content = [];
        switch (this.state.page) {
            case 1:
                for (let i = 0; i < this.state.numberOfPeople; i++) {
                    content.push(
                        <Entries
                            entries={this.state.entries}
                            entryClass={this.state.entryClass}
                            cardNumber={i}
                            onChange={this.handleChange}
                        />
                    );
                }
                break;
            default:
                content.push(
                    <div>
                        ERROR - Unknown page number! - ERROR
                </div>
                );
        }

        let cards = [];
        for (let i = 0; i < content.length; i++) {
            cards.push(<Card content={content[i]} key={i} />);
        }

        let wrapper;
        if (this.state.page === constants.formPage) {
            wrapper = (
                <form onSubmit={this.handleSubmit}>
                    {cards}
                    <input type="submit" value="Next" />
                </form>);
        }
        else {
            wrapper = (
                <div>
                    {cards}
                </div>
            );
        }

        return (
            <div>
                {wrapper}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
