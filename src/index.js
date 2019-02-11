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

//Pages
import Terms from "./pages/terms";
import Birthday from "./pages/birthday";
import Sex from "./pages/sex";
import NotFound from "./pages/notFound";
import Name from "./pages/name";
import AddressRes from "./pages/addressRes";

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
    //  0 - address
    //  1 - birthday
    //  2 - name
    //  3 - contact
    //  4 - sex

    const RouterTerms = withRouter(Terms);
    const RouterBirthday = withRouter(Birthday);
    const RouterName = withRouter(Name);
    const RouterAddressRes = withRouter(AddressRes);
    const RouterSex = withRouter(Sex);

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <RouterTerms save={target => this.handleChange(target)} />
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
            path="/name"
            render={() => (
              <RouterName
                currentPageEntries={constants.pageEntries[2]}
                save={target => this.handleChange(target)}
              />
            )}
          />
          <Route
            path="/addressRes"
            render={() => (
              <RouterAddressRes
                currentPageEntries={constants.pageEntries[0]}
                save={target => this.handleChange(target)}
              />
            )}
          />
          <Route
            path="/sex"
            render={() => <RouterSex save={() => this.handleChange()} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
