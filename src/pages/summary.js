import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let path = process.env.PUBLIC_URL + "/agreement";
    this.props.history.push(path);
  }

  handleClick(event, path) {
    event.preventDefault();
    this.props.save({
      name: "Summary",
      value: true
    });
    this.props.history.push(process.env.PUBLIC_URL + "/" + path);
  }

  back() {
    let path = process.env.PUBLIC_URL + "/uploadSignature";
    if (this.props.state["pathFrom"] === "/contact") {
      path = process.env.PUBLIC_URL + "/contact";
    }
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">22 / 23</div>
        <h2 className="sub-header">
          Please verify the information you have provided is complete and
          correct.
        </h2>
      </div>
    );

    let name = this.props.firstName[this.props.personNum]
      ? this.props.firstName[this.props.personNum]
      : this.props.lastName[this.props.personNum];

    let hasAddress = this.props.isMilitary() ? ( //Military relation
      <div className="summary-tab">
        <div className="summary-question">
          Do you currently have an address in Ontario?
        </div>
        <div className="response">
          {this.props.state["Residence address"] ? "Yes" : "No"}
        </div>
        <a
          href="#"
          onClick={event => this.handleClick(event, "hasAddress")}
          className="edit"
        >
          Edit
        </a>
      </div>
    ) : (
      ""
    );

    let specialNames = [];
    for (let i = 0; i < this.props.state["Special case"].length; i++) {
      specialNames.push(
        <div key={i}>
          {
            constants.specialCaseChecks[this.props.state["Special case"][i]]
              .value
          }
        </div>
      );
    }

    let groups =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Are you part of any groups that have a modified application process?
          </div>
          <div className="response">{specialNames} </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "specialCase")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Is {name} part of any groups that have a modified application
            process?
          </div>
          <div className="response">{specialNames} </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "specialCase")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let hasResidence =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please select one of the following documents you wish to use as
            proof of your residency in Ontario.
          </div>
          <div className="card-collection">
            <div className="response">
              {this.props.state["Residence proof type"]}
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectResProof")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please select one of the following documents you wish to use as
            proof of {name}'s residency in Ontario.
          </div>
          <div className="card-collection">
            <div className="response">
              {this.props.state["Residence proof type"]}
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectResProof")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let resAddress =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please enter your Ontario residence address.
          </div>
          <div className="response">
            {this.props.state["Residence street"]},{" "}
            {this.props.state["Residence city"]}, Ontario, Canada,{" "}
            {this.props.state["Residence postal code"]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "address")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please enter {name}'s Ontario residence address.
          </div>
          <div className="response">
            {this.props.state["Residence street"]},{" "}
            {this.props.state["Residence city"]}, Ontario, Canada,{" "}
            {this.props.state["Residence postal code"]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "address")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let mailingAddress =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please enter your mailing address.
          </div>
          <div className="response">
            {this.props.state["Mailing street"]},{" "}
            {this.props.state["Mailing city"]}, Ontario, Canada,{" "}
            {this.props.state["Mailing postal code"]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "address")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please enter {name}'s mailing address.
          </div>
          <div className="response">
            {this.props.state["Mailing street"]},{" "}
            {this.props.state["Mailing city"]}, Ontario, Canada,{" "}
            {this.props.state["Mailing postal code"]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "address")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let immigrationStatus =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please select your immigration status.
          </div>
          <div className="response">{this.props.state["Citizen type"]}</div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectCitizen")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please select {name}'s immigration status.
          </div>
          <div className="response">{this.props.state["Citizen type"]}</div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectCitizen")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let citizen =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please select the document you wish to use as proof of your Canadian
            citizenship.
          </div>
          <div className="response">{this.props.state["Citizen proof"]}</div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectCitizenProof")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please select the document you wish to use as proof of {name}'s
            Canadian citizenship.
          </div>
          <div className="response">{this.props.state["Citizen proof"]}</div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectCitizenProof")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let citizenUpload =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload photos or a scan of your Canadian passport.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">mary_passport.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadCitizen")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload photos or a scan of {name}'s Canadian passport.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">mary_passport.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadCitizen")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let identityProof =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please select one of the following documents you wish to use as
            proof of your identity.
          </div>
          <div className="response">
            {this.props.state["Identity proof type"]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectID")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please select one of the following documents you wish to use as
            proof of {name}'s identity.
          </div>
          <div className="response">
            {this.props.state["Identity proof type"]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "selectID")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let identityUpload =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload a photo or scan of your identity document with your
            full name and signature.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">drivers_license.png</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadID")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload a photo or scan of {name}'s identity document with{" "}
            {name}'s full name and signature.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">drivers_license.png</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadID")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let fullName =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">Please enter your full name.</div>
          <div className="response">
            {this.props.state["First name"][this.props.state["Person num"]]}{" "}
            {this.props.state["Middle name(s)"][this.props.state["Person num"]]}{" "}
            {this.props.state["Last name"][this.props.state["Person num"]]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "name")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please enter {name}'s full name.
          </div>
          <div className="response">
            {this.props.state["First name"][this.props.state["Person num"]]}{" "}
            {this.props.state["Middle name(s)"][this.props.state["Person num"]]}{" "}
            {this.props.state["Last name"][this.props.state["Person num"]]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "name")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let birthday =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">What is your date of birth?</div>
          <div className="response">
            {this.props.state["Birthday"][this.props.state["Person num"]]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "birthday")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            What is {name}'s date of birth?
          </div>
          <div className="response">
            {this.props.state["Birthday"][this.props.state["Person num"]]}
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "birthday")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let sex =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            What is your sex on your passport or birth certificate?
          </div>
          <div className="response">{this.props.state["Sex"]}</div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "sex")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            What is {name}'s sex as indicated on their passport or birth
            certificate?
          </div>
          <div className="response">{this.props.state["Sex"]}</div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "sex")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let contactInfo =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please enter your contact information.
          </div>
          <div className="response">
            <div className="one-line">
              <label className="form-label">
                {this.props.state["Primary phone"]
                  ? "Primary phone: " + this.props.state["Primary phone"]
                  : ""}
              </label>
              <br />
              <label className="form-label">
                {this.props.state["Alternate phone"]
                  ? "Alternate phone: " + this.props.state["Alternate phone"]
                  : ""}
              </label>
              <br />
              <label className="form-label">
                {this.props.state["Email"]
                  ? "Email: " + this.props.state["Email"]
                  : ""}
              </label>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "contact")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please enter {name}'s contact information.
          </div>
          <div className="response">
            <div className="one-line">
              <label className="form-label">
                {this.props.state["Primary phone"]
                  ? "Primary phone: " + this.props.state["Primary phone"]
                  : ""}
              </label>
              <br />
              <label className="form-label">
                {this.props.state["Alternate phone"]
                  ? "Alternate phone: " + this.props.state["Alternate phone"]
                  : ""}
              </label>
              <br />
              <label className="form-label">
                {this.props.state["Email"]
                  ? "Email: " + this.props.state["Email"]
                  : ""}
              </label>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "contact")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let selfie =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload the front and back of a certified passport photo of
            yourself.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">self-photo.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadPhoto")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload the front and back of a certified passport photo of{" "}
            {name}.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">self-photo.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadPhoto")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let signatureUpload =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload a photo or scan of your signature or sign on your
            device.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">signature.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadSignature")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload a photo or scan of {name}'s signature or sign on your
            device.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">signature.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadSignature")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    let uploadResidence =
      this.props.personNum === 0 ? (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload a photo or scan of your bank account statements.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">residence_proof1.jpeg</div>
              </div>
            </div>
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">residence_proof2.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadRes")}
            className="edit"
          >
            Edit
          </a>
        </div>
      ) : (
        <div className="summary-tab">
          <div className="summary-question">
            Please upload a photo or scan of {name}'s bank account statements.
          </div>
          <div className="card-collection">
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">residence_proof1.jpeg</div>
              </div>
            </div>
            <div className="card-uploaded small-card-uploaded">
              <div className="upload-container">
                <a href="#" className="view-link">
                  View
                </a>
                <div className="file-name">residence_proof2.jpeg</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={event => this.handleClick(event, "uploadRes")}
            className="edit"
          >
            Edit
          </a>
        </div>
      );

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="summary-content">
            {groups}
            <div className="summary-tab">
              <div className="summary-question">
                Please indicate which Ontario base the military member has been
                posted to.
              </div>
              <div className="response">
                {this.props.state && this.props.state.baseIndex
                  ? constants.militaryAddresses[this.props.state.baseIndex]
                      .label
                  : ""}
              </div>
              <a
                href="#"
                onClick={event => this.handleClick(event, "selectBase")}
                className="edit"
              >
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please select the document you wish to use to show military
                affiliation.
              </div>
              <div className="response">
                {this.props.state["Military proof type"]}
              </div>
              <a
                href="#"
                onClick={event =>
                  this.handleClick(event, "selectMilitaryProof")
                }
                className="edit"
              >
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please upload photos or a scan of the military member's MPRR.
              </div>
              <div className="card-collection">
                <div className="card-uploaded small-card-uploaded">
                  <div className="upload-container">
                    <a href="#" className="view-link">
                      View
                    </a>
                    <div className="file-name">MPRR_1.jpeg</div>
                  </div>
                </div>
                <div className="card-uploaded small-card-uploaded">
                  <div className="upload-container">
                    <a href="#" className="view-link">
                      View
                    </a>
                    <div className="file-name">MPRR_2.jpeg</div>
                  </div>
                </div>
                <div className="card-uploaded small-card-uploaded">
                  <div className="upload-container">
                    <a href="#" className="view-link">
                      View
                    </a>
                    <div className="file-name">MPRR_3.jpeg</div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                onClick={event => this.handleClick(event, "uploadMilitary")}
                className="edit"
              >
                Edit
              </a>
            </div>
            {hasAddress}
            {hasResidence}
            {uploadResidence}
            <div className="summary-tab">
              <div className="summary-question">
                Please upload photos or a scan of the military member's posting
                message to prove your intent to move to Ontario.
              </div>
              <div className="card-collection">
                <div className="card-uploaded small-card-uploaded">
                  <div className="upload-container">
                    <a href="#" className="view-link">
                      View
                    </a>
                    <div className="file-name">posting_message1.jpeg</div>
                  </div>
                </div>
                <div className="card-uploaded small-card-uploaded">
                  <div className="upload-container">
                    <a href="#" className="view-link">
                      View
                    </a>
                    <div className="file-name">posting_message2.jpeg</div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                onClick={event => this.handleClick(event, "uploadPosting")}
                className="edit"
              >
                Edit
              </a>
            </div>
            {resAddress}
            {mailingAddress}
            {immigrationStatus}
            {citizen}
            {citizenUpload}
            {identityProof}
            {identityUpload}
            {fullName}
            {birthday}
            {sex}
            {contactInfo}
            {selfie}
            {signatureUpload}
            <div className="btn-container button-footer">
              <button
                className="btn btn-general btn-invert"
                onClick={() => this.back()}
              >
                Back
              </button>
              <input
                type="submit"
                value="Next"
                className="btn btn-general btn-right-align"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Summary;
