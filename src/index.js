import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import constants from './constants';

import Card from './card';
import Entries from './entries';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: constants.pageEntries[0].entries,
            tableClass: constants.pageEntries[0].tableClass,
        };
    }

    render() {
        let entries = <Entries
            entries={this.state.entries}
            tableClass={this.state.tableClass}
        />;

        return (
            <div>
                <Card content={entries} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));