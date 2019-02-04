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
            numberOfPeople: 1,
        };
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

        return (
            <div>
                {cards}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
