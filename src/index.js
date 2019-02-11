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
import PastOHIP from "./pages/pastOHIP";
import IsMilitary from "./pages/isMilitary";
import SelectBase from "./pages/selectBase";
import SelectMilitaryProof from "./pages/selectMilitaryProof";
import UploadMilitary from "./pages/uploadMilitary";
import HasAddress from "./pages/hasAddress";
import SelectResProof from "./pages/selectResProof";
import UploadRes from "./pages/uploadRes";
import SelectCitizen from "./pages/selectCitizen";
import SelectCitizenProof from "./pages/selectCitizenProof";
import UploadCitizen from "./pages/uploadCitizen";
import SelectID from "./pages/selectID";
import UploadID from "./pages/uploadID";
import Summary from "./pages/summary";
import Confirmation from "./pages/confirmation";

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const RouterTerms = withRouter(Terms);
    const RouterBirthday = withRouter(Birthday);
    const RouterName = withRouter(Name);
    const RouterAddressRes = withRouter(AddressRes);
    const RouterSex = withRouter(Sex);
    const RouterPastOHIP = withRouter(PastOHIP);
    const RouterIsMilitary = withRouter(IsMilitary);
    const RouterSelectBase = withRouter(SelectBase);
    const RouterSelectMilitaryProof = withRouter(SelectMilitaryProof);
    const RouterUploadMilitary = withRouter(UploadMilitary);
    const RouterHasAddress = withRouter(HasAddress);
    const RouterSelectResProof = withRouter(SelectResProof);
    const RouterUploadRes = withRouter(UploadRes);
    const RouterSelectCitizen = withRouter(SelectCitizen);
    const RouterSelectCitizenProof = withRouter(SelectCitizenProof);
    const RouterUploadCitizen = withRouter(UploadCitizen);
    const RouterSelectID = withRouter(SelectID);
    const RouterUploadID = withRouter(UploadID);
    const RouterSummary = withRouter(Summary);
    const RouterConfirmation = withRouter(Confirmation);

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
              <RouterBirthday save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/name"
            render={() => (
              <RouterName save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/addressRes"
            render={() => (
              <RouterAddressRes save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/sex"
            render={() => (
              <RouterSex save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/pastOHIP"
            render={() => (
              <RouterPastOHIP save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/isMilitary"
            render={() => (
              <RouterIsMilitary save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/selectBase"
            render={() => (
              <RouterSelectBase save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/selectMilitaryProof"
            render={() => (
              <RouterSelectMilitaryProof
                save={target => this.handleChange(target)}
              />
            )}
          />
          <Route
            path="/uploadMilitary"
            render={() => (
              <RouterUploadMilitary
                save={target => this.handleChange(target)}
              />
            )}
          />
          <Route
            path="/hasAddress"
            render={() => (
              <RouterHasAddress save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/selectResProof"
            render={() => (
              <RouterSelectResProof
                save={target => this.handleChange(target)}
              />
            )}
          />
          <Route
            path="/uploadRes"
            render={() => (
              <RouterUploadRes save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/selectCitizen"
            render={() => (
              <RouterSelectCitizen save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/selectCitizenProof"
            render={() => (
              <RouterSelectCitizenProof
                save={target => this.handleChange(target)}
              />
            )}
          />
          <Route
            path="/uploadCitizen"
            render={() => (
              <RouterUploadCitizen save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/selectID"
            render={() => (
              <RouterSelectID save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/uploadID"
            render={() => (
              <RouterUploadID save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/summary"
            render={() => (
              <RouterSummary save={target => this.handleChange(target)} />
            )}
          />
          <Route
            path="/confirmation"
            render={() => (
              <RouterConfirmation save={target => this.handleChange(target)} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
