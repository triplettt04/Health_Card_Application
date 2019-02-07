import React from "react";
import Card from "../components/card";
import Entries from "../components/entries";

function Birthday(props) {
    debugger;
    let currentPageEntries = props.currentPageEntries;
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
    for (let i = 0; i < currentPageEntries.entries.length; i++) {
        cards.push(<Card content={entries[i]} key={i} />);
    }
    return (
        <form onSubmit={this.handleSubmit}>
            {cards}
            <input
                type="submit"
                value="Next"
                className="btn btn-primary"
            />
        </form>);
}

export default Birthday;