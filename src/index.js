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
import ScrollToTop from "react-router-scroll-top";

import constants from "./constants";

//Pages
//import Terms from "./pages/terms";
import GetStarted from "./pages/getStarted";
import Birthday from "./pages/birthday";
import Sex from "./pages/sex";
import InCamera from "./pages/inCamera";
import ConfirmPhoto from "./pages/confirmPhoto";
import NotFound from "./pages/notFound";
import Name from "./pages/name";
import Address from "./pages/address";
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
import UploadPosting from "./pages/uploadPosting";
import Contact from "./pages/contact";
//import AddressMail from "./pages/address";
import UploadPhoto from "./pages/uploadPhoto";
//import SelectSignature from "./pages/selectSignature";
import UploadSignature from "./pages/uploadSignature";
import Agreement from "./pages/agreement";
import Template from "./pages/template";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      baseIndex: null,
      pathFrom: null,
      pageNum: 0
      //["Military relation"]: "Yes" //Hard coded for testing
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    console.log(this.state);
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const RouterGetStarted = withRouter(GetStarted);
    //const RouterTerms = withRouter(Terms);
    const RouterTemplate = withRouter(Template);
    const RouterBirthday = withRouter(Birthday);
    const RouterName = withRouter(Name);
    const RouterAddress = withRouter(Address);
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
    const RouterUploadID = withRouter(UploadID);
    const RouterSummary = withRouter(Summary);
    const RouterConfirmation = withRouter(Confirmation);
    const RouterUploadPosting = withRouter(UploadPosting);
    const RouterContact = withRouter(Contact);
    //const RouterAddressMail = withRouter(AddressMail);
    const RouterUploadPhoto = withRouter(UploadPhoto);
    //const RouterSelectSignature = withRouter(SelectSignature);
    const RouterUploadSignature = withRouter(UploadSignature);
    const RouterAgreement = withRouter(Agreement);

    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              render={() => (
                <RouterGetStarted save={target => this.handleChange(target)} />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/template"}
              render={() => (
                <RouterTemplate save={target => this.handleChange(target)} />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/agreement"}
              render={() => (
                <RouterAgreement save={target => this.handleChange(target)} />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/birthday"}
              render={() => (
                <RouterBirthday save={target => this.handleChange(target)} />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/name"}
              render={() => (
                <RouterName
                  save={target => this.handleChange(target)}
                  firstName={this.state["First name"]}
                  middleName={this.state["Middle name(s)"]}
                  lastName={this.state["Last name"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/address"}
              render={() => (
                <RouterAddress
                  save={target => this.handleChange(target)}
                  addressRes={
                    this.state["Residence street"]
                      ? {
                          street: this.state["Residence street"],
                          city: this.state["Residence city"],
                          postalCode: this.state["Residence postal code"]
                        }
                      : this.state["Military relation"] === "Yes"
                      ? {
                          street:
                            constants.militaryAddresses[this.state.baseIndex]
                              .street,
                          city:
                            constants.militaryAddresses[this.state.baseIndex]
                              .city,
                          postalCode:
                            constants.militaryAddresses[this.state.baseIndex]
                              .postalCode
                        }
                      : null
                  }
                  addressMail={{
                    sameAsRes: this.state["Same as residence"],
                    street: this.state["Mailing street"],
                    city: this.state["Mailing city"],
                    postalCode: this.state["Mailing postal code"],
                    province: this.state["Mailing province"],
                    country: this.state["Mailing country"]
                  }}
                  pathFrom={this.state["Ontario address"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/sex"}
              render={() => (
                <RouterSex
                  save={target => this.handleChange(target)}
                  sex={this.state["Sex"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/inCamera"}
              render={() => (
                <RouterInCamera
                  save={() => this.handleChange()}
                  pathFrom={this.state.pathFrom}
                  num={this.state.pageNum}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/confirmPhoto"}
              render={() => (
                <RouterConfirmPhoto
                  save={target => this.handleChange(target)}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/pastOHIP"}
              render={() => (
                <RouterPastOHIP
                  save={target => this.handleChange(target)}
                  pastOHIP={this.state["Past OHIP"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/isMilitary"}
              render={() => (
                <RouterIsMilitary
                  save={target => this.handleChange(target)}
                  isMilitary={this.state["Military relation"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectBase"}
              render={() => (
                <RouterSelectBase
                  save={target => this.handleChange(target)}
                  baseLabel={
                    this.state.baseIndex
                      ? constants.militaryAddresses[this.state.baseIndex].label
                      : null
                  }
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectMilitaryProof"}
              render={() => (
                <RouterSelectMilitaryProof
                  save={target => this.handleChange(target)}
                  militaryProof={this.state["Military proof type"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadMilitary"}
              render={() => (
                <RouterUploadMilitary
                  save={target => this.handleChange(target)}
                  status={this.state["Military proof"]}
                  item={
                    this.state["Military proof type"]
                      ? this.state["Military proof type"]
                      : ""
                  }
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/hasAddress"}
              render={() => (
                <RouterHasAddress
                  save={target => this.handleChange(target)}
                  hasAddress={this.state["Residence address"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectResProof"}
              render={() => (
                <RouterSelectResProof
                  save={target => this.handleChange(target)}
                  pathFrom={this.state["Ontario address"]} //This is fine
                  resProof={this.state["Residence proof type"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadRes"}
              render={() => (
                <RouterUploadRes
                  save={target => this.handleChange(target)}
                  status={this.state["Residence proof"]}
                  item={
                    this.state["Residence proof type"]
                      ? this.state["Residence proof type"]
                      : ""
                  }
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectCitizen"}
              render={() => (
                <RouterSelectCitizen
                  save={target => this.handleChange(target)}
                  citizenType={this.state["Citizen type"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectCitizenProof"}
              render={() => (
                <RouterSelectCitizenProof
                  save={target => this.handleChange(target)}
                  citizenProof={this.state["Citizen proof"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadCitizen"}
              render={() => (
                <RouterUploadCitizen
                  save={target => this.handleChange(target)}
                  status={this.state["Citizenship proof"]}
                  item={
                    this.state["Citizen proof"]
                      ? this.state["Citizen proof"]
                      : ""
                  }
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectID"}
              render={() => (
                <RouterSelectID
                  save={target => this.handleChange(target)}
                  identityProof={this.state["Identity proof type"]}
                  resProof={this.state["Residence proof type"]}
                  citizenProof={this.state["Citizen proof"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadID"}
              render={() => (
                <RouterUploadID
                  save={target => this.handleChange(target)}
                  status={this.state["Identity proof"]}
                  item={
                    this.state["Identity proof type"]
                      ? this.state["Identity proof type"]
                      : ""
                  }
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/summary"}
              render={() => (
                <RouterSummary
                  save={target => this.handleChange(target)}
                  state={this.state}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/confirmation"}
              render={() => (
                <RouterConfirmation
                  save={target => this.handleChange(target)}
                  street={this.state["Residence street"]}
                  postalCode={this.state["Residence postal code"]}
                  city={this.state["Residence city"]}
                  province={"Ontario"}
                  country={"Canada"}
                  email={this.state["Email"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadPosting"}
              render={() => (
                <RouterUploadPosting
                  save={target => this.handleChange(target)}
                  baseIndex={this.state.baseIndex}
                  status={this.state["Posting message"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              render={() => (
                <RouterContact
                  save={target => this.handleChange(target)}
                  primaryPhone={this.state["Primary phone"]}
                  alternatePhone={this.state["Alternate phone"]}
                  email={this.state["Email"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadPhoto"}
              render={() => (
                <RouterUploadPhoto
                  save={target => this.handleChange(target)}
                  status={this.state["Photo proof"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadSignature"}
              render={() => (
                <RouterUploadSignature
                  save={target => this.handleChange(target)}
                  status={this.state["Signature"]}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
