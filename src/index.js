import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import constants from "./constants";

import Login from "./pages/login";
import Birthday from "./pages/birthday";
import Sex from "./pages/sex";
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
      entryNumber: state.entryNumber + 1
    }));
  }

  previousPageUpdateEntries() {
    this.setState(state => ({
      entryNumber: state.entryNumber - 1
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
    const RouterLogin = withRouter(Login);
    const RouterBirthday = withRouter(Birthday);
    const RouterSex = withRouter(Sex);

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <RouterLogin currentPageEntries={constants.pageEntries[0]} />
            )}
          />
          <Route
            path="/birthday"
            render={() => (
              <RouterBirthday
                currentPageEntries={constants.pageEntries[1]}
                numberOfPeople={constants.peopleToStart}
                onChange={() => this.handleChange()}
              />
            )}
          />
          <Route
            path="/sex"
            render={() => <RouterSex onChange={() => this.handleChange()} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
