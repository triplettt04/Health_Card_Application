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
import { CookiesProvider, withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

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
//import PastOHIP from "./pages/pastOHIP";
import SpecialCase from "./pages/specialCase";
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
import SameHouse from "./pages/sameHouse";
import MoveWhen from "./pages/moveWhen";
import ForWho from "./pages/forWho";
import ConfirmChoose from "./pages/confirmChoose";
import SelectWho from "./pages/selectWho";
import Template from "./pages/template";

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;

    let stateValues = {};

    for (let i = 0; i < 3; i++) {
      let values;
      switch (i) {
        case 0:
          values = constants.softResetValues;
          break;
        case 1:
          values = constants.hardResetValues;
          break;
        case 2:
          values = constants.addressValues;
          break;
      }

      for (let j = 0; j < values.length; j++) {
        let val = null;
        if (
          values[j] === "pageNum" ||
          values[j] === "Person num" ||
          values[j] === "Dependant count"
        ) {
          val = 0;
        } else if (
          values[j] === "Birthday" ||
          values[j] === "First name" ||
          values[j] === "Middle name(s)" ||
          values[j] === "Last name" ||
          values[j] === "Done"
        ) {
          val = [];
        }

        let cookie = cookies.get(values[j]) || val;
        if (cookie === "true" || cookie === "false") {
          stateValues[values[j]] = cookie === "true";
        } else if (
          (!isNaN(cookie) &&
            (values[j] === "pageNum" || values[j] === "baseIndex")) ||
          values[j] === "Person num" ||
          values[j] === "Dependant count"
        ) {
          stateValues[values[j]] = parseInt(cookie);
        } else {
          stateValues[values[j]] = cookie;
        }
      }
    }

    this.state = stateValues;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    console.log(this.state);
    this.setState({
      [target.name]: target.value
    });
    const { cookies } = this.props;
    cookies.set(target.name, target.value);
  }

  deleteCookie(name) {
    const { cookies } = this.props;
    cookies.remove(name);
  }

  deleteValue(name) {
    this.deleteCookie(name);
    this.handleChange({
      name: name,
      value: null
    });
  }

  reset(type) {
    let values;
    switch (type) {
      case "Hard":
        values = constants.hardResetValues;
        break;
      case "Soft":
        values = constants.softResetValues;
        break;
      case "Address":
        values = constants.addressValues;
        break;
      default:
        values = [];
        console.log("Error - value=" + type);
    }
    const { cookies } = this.props;
    for (let i = 0; i < values.length; i++) {
      cookies.remove(values[i]);
      let val = null;
      if (
        values[i] === "pageNum" ||
        values[i] === "Person num" ||
        values[i] === "Dependant count"
      ) {
        val = 0;
      } else if (
        values[i] === "Birthday" ||
        values[i] === "First name" ||
        values[i] === "Middle name(s)" ||
        values[i] === "Last name" ||
        values[i] === "Done"
      ) {
        val = [];
      }
      this.setState({
        [values[i]]: val
      });
    }
  }

  resetAll() {
    this.reset("Soft");
    this.reset("Hard");
    this.reset("Address");
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
    //const RouterPastOHIP = withRouter(PastOHIP);
    const RouterSpecialCase = withRouter(SpecialCase);
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
    const RouterSameHouse = withRouter(SameHouse);
    const RouterMoveWhen = withRouter(MoveWhen);
    const RouterForWho = withRouter(ForWho);
    const RouterConfirmChoose = withRouter(ConfirmChoose);
    const RouterSelectWho = withRouter(SelectWho);

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
                <RouterAgreement
                  save={target => this.handleChange(target)}
                  personNum={this.state["Person num"]}
                  done={this.state["Done"]}
                  softReset={() => this.reset("Soft")}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/birthday"}
              render={() => (
                <RouterBirthday
                  save={target => this.handleChange(target)}
                  birthday={this.state["Birthday"]}
                  summary={this.state["Summary"]}
                  personNum={this.state["Person num"]}
                  forWhoUser={this.state["For who user"]}
                  forWhoSpouse={this.state["For who spouse"]}
                  dependantCount={
                    this.state["For who dependant"]
                      ? this.state["Dependant count"]
                      : 0
                  }
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/name"}
              render={() => (
                <RouterName
                  save={target => this.handleChange(target)}
                  summary={this.state["Summary"]}
                  firstName={this.state["First name"]}
                  middleName={this.state["Middle name(s)"]}
                  lastName={this.state["Last name"]}
                  personNum={this.state["Person num"]}
                  pathFrom={this.state["pathFrom"]}
                  forWhoSpouse={this.state["For who spouse"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/address"}
              render={() => (
                <RouterAddress
                  save={target => this.handleChange(target)}
                  summary={this.state["Summary"]}
                  addressRes={
                    this.state["Residence street"]
                      ? {
                          street: this.state["Residence street"],
                          city: this.state["Residence city"],
                          postalCode: this.state["Residence postal code"]
                        }
                      : this.state["Special case"] &&
                        this.state["Residence address"] === false
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
                  pathFrom={this.state["Residence address"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/sex"}
              render={() => (
                <RouterSex
                  save={target => this.handleChange(target)}
                  summary={this.state["Summary"]}
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
              path={process.env.PUBLIC_URL + "/specialCase"}
              render={() => (
                <RouterSpecialCase
                  save={target => this.handleChange(target)}
                  summary={this.state["Summary"]}
                  specialCase={this.state["Special case"]}
                  firstName={this.state["First name"][this.state["Person num"]]}
                  lastName={this.state["Last name"][this.state["Person num"]]}
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
                  summary={this.state["Summary"]}
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
                  summary={this.state["Summary"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/hasAddress"}
              render={() => (
                <RouterHasAddress
                  save={target => this.handleChange(target)}
                  summary={this.state["Summary"]}
                  hasAddress={this.state["Residence address"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectResProof"}
              render={() => (
                <RouterSelectResProof
                  save={target => this.handleChange(target)}
                  hasAddress={this.state["Residence address"]}
                  resProof={this.state["Residence proof type"]}
                  summary={this.state["Summary"]}
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
                  summary={this.state["Summary"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectCitizen"}
              render={() => (
                <RouterSelectCitizen
                  summary={this.state["Summary"]}
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
                  summary={this.state["Summary"]}
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
                  summary={this.state["Summary"]}
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
                  citizenType={this.state["Citizen type"]}
                  summary={this.state["Summary"]}
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
                  summary={this.state["Summary"]}
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
                  summary={this.state["Summary"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              render={() => (
                <RouterContact
                  save={target => this.handleChange(target)}
                  summary={this.state["Summary"]}
                  primaryPhone={this.state["Primary phone"]}
                  alternatePhone={this.state["Alternate phone"]}
                  email={this.state["Email"]}
                  curBirthday={this.state["Birthday"][this.state["Person num"]]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadPhoto"}
              render={() => (
                <RouterUploadPhoto
                  save={target => this.handleChange(target)}
                  status={this.state["Photo proof"]}
                  summary={this.state["Summary"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/uploadSignature"}
              render={() => (
                <RouterUploadSignature
                  save={target => this.handleChange(target)}
                  status={this.state["Signature"]}
                  summary={this.state["Summary"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/sameHouse"}
              render={() => (
                <RouterSameHouse
                  save={target => this.handleChange(target)}
                  sameHouse={this.state["Same house"]}
                  resetAddress={() => this.reset("Address")}
                  firstName={this.state["First name"][this.state["Person num"]]}
                  lastName={this.state["Last name"][this.state["Person num"]]}
                  specialCase={this.state["Special case"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/moveWhen"}
              render={() => (
                <RouterMoveWhen
                  save={target => this.handleChange(target)}
                  moveWhen={this.state["Move when"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/forWho"}
              render={() => (
                <RouterForWho
                  save={target => this.handleChange(target)}
                  forWhoUser={this.state["For who user"]}
                  forWhoSpouse={this.state["For who spouse"]}
                  forWhoDependant={this.state["For who dependant"]}
                  dependantCount={this.state["Dependant count"]}
                  firstName={this.state["First name"][this.state["Person num"]]}
                  lastName={this.state["Last name"][this.state["Person num"]]}
                  personNum={this.state["Person num"]}
                  done={this.state["Done"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/selectWho"}
              render={() => (
                <RouterSelectWho
                  save={target => this.handleChange(target)}
                  forWhoUser={this.state["For who user"]}
                  firstName={this.state["First name"]}
                  lastName={this.state["Last name"]}
                  personNum={this.state["Person num"]}
                  done={this.state["Done"]}
                />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/confirmChoose"}
              render={() => (
                <RouterConfirmChoose
                  save={target => this.handleChange(target)}
                  forWhoUser={this.state["For who user"]}
                  firstName={this.state["First name"]}
                  lastName={this.state["Last name"]}
                  done={this.state["Done"]}
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

function Root() {
  let CookieApp = withCookies(App);
  return (
    <CookiesProvider>
      <CookieApp />
    </CookiesProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
