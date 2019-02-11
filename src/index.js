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

  handleChange(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    //Entry indexes:
    //  0 - login
    //  1 - birthday
    //  2 - name
    //  3 - address
    //  4 - contact

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
              <RouterLogin
                currentPageEntries={constants.pageEntries[0]}
                save={target => this.handleChange(target)}
              />
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
