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
import HowSignature from "./pages/howSignature";
import InCamera from "./pages/inCamera";
import ConfirmPhoto from "./pages/confirmPhoto";
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
    const RouterHowSignature = withRouter(HowSignature);
    const RouterSex = withRouter(Sex);
    const RouterInCamera = withRouter(InCamera);
    const RouterConfirmPhoto = withRouter(ConfirmPhoto);
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
          <Route
            path="/howSignature"
            render={() => (
              <RouterHowSignature save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/inCamera"
            render={() => <RouterInCamera save={() => this.handleChange()} />}
          />
          <Route
            path="/confirmPhoto"
            render={() => (
              <RouterConfirmPhoto save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/pastOHIP"
            render={() => <RouterPastOHIP save={() => this.handleChange()} />}
          />
          <Route
            path="/isMilitary"
            render={() => <RouterIsMilitary save={() => this.handleChange()} />}
          />
          <Route
            path="/selectBase"
            render={() => <RouterSelectBase save={() => this.handleChange()} />}
          />
          <Route
            path="/selectMilitaryProof"
            render={() => (
              <RouterSelectMilitaryProof save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/uploadMilitary"
            render={() => (
              <RouterUploadMilitary save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/hasAddress"
            render={() => <RouterHasAddress save={() => this.handleChange()} />}
          />
          <Route
            path="/selectResProof"
            render={() => (
              <RouterSelectResProof save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/uploadRes"
            render={() => <RouterUploadRes save={() => this.handleChange()} />}
          />
          <Route
            path="/selectCitizen"
            render={() => (
              <RouterSelectCitizen save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/selectCitizenProof"
            render={() => (
              <RouterSelectCitizenProof save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/uploadCitizen"
            render={() => (
              <RouterUploadCitizen save={() => this.handleChange()} />
            )}
          />
          <Route
            path="/selectID"
            render={() => <RouterSelectID save={() => this.handleChange()} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
