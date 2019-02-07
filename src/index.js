import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

import constants from "./constants";

import Card from "./components/card";
import Entries from "./components/entries";

import Login from "./pages/login";
import Birthday from "./pages/birthday";
import NotFound from "./pages/notFound";

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
        let currentPageEntries = constants.pageEntries[this.state.entryNumber];

        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Login currentPageEntries={currentPageEntries} />} />
                    <Route path="/birthday" render={() => <Birthday currentPageEntries={currentPageEntries} />} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
