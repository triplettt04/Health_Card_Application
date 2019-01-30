import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Entries from './entries';
import pageEntries from './constants';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: pageEntries[0].entries,
            tableClass: pageEntries[0].tableClass,
        };
    }

    render() {
        return (
            <div>
                <Entries
                    entries={this.state.entries}
                    tableClass={this.state.tableClass}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));