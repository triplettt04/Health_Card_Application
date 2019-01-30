import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import pageEntries from './constants';

import Page from './page';
import Card from './card';
import Entries from './entries';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: pageEntries[0].entries,
            tableClass: pageEntries[0].tableClass,
        };
    }

    render() {
        let entries = <Entries
            entries={this.state.entries}
            tableClass={this.state.tableClass}
        />;
        let card = <Card content={entries} />;
        return (
            <div>
                <Page content={card} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));