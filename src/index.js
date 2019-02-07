import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import constants from "./constants";

import Login from "./pages/login";
import Birthday from "./pages/birthday";
import NotFound from "./pages/notFound";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            entryNumber: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextPageUpdateEntries() {
        this.setState(state => ({
            entryNumber: state.entryNumber + 1,
        }));
    }

    previousPageUpdateEntries() {
        this.setState(state => ({
            entryNumber: state.entryNumber - 1,
        }));
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
        let currentPageEntries = constants.pageEntries[this.state.entryNumber];

        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() =>
                        <Login
                            currentPageEntries={currentPageEntries}
                            next={() => this.nextPageUpdateEntries()}
                        />} />
                    <Route path="/birthday" render={() =>
                        <Birthday
                            currentPageEntries={currentPageEntries}
                            numberOfPeople={constants.peopleToStart}
                            back={() => this.previousPageUpdateEntries()}
                        />} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
