import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";
import NavigateButton from "../components/navigateButton";

class Birthday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfPeople: props.numberOfPeople
        }
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
        let currentPageEntries = this.props.currentPageEntries;
        let entries = [];
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
        return (
            <form onSubmit={this.handleSubmit}>
                {cards}
                <NavigateButton
                    path="/"
                    text="Back to login"
                    onClick={this.props.back}
                />
                <input
                    type="submit"
                    value="Next"
                    className="btn btn-primary"
                />
            </form>);
    }
}

export default Birthday;