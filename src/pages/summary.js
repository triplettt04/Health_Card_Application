import React from "react";
import constants from "../constants";
import Card from "../components/card";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    //handle target and call this.props.save(event.target[i])
    let path = process.env.PUBLIC_URL + "/confirmation";
    this.props.history.push(path);
  }

  back() {
    let path = process.env.PUBLIC_URL + "/uploadSignature";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">15 / 15</div>
        <h2 className="sub-header">
          Please verify the information you have provided is complete and
          correct.
        </h2>
      </div>
    );

    let hasAddress =
      this.props.state["Military relation"] === "Yes" ? (
        <div className="summary-tab">
          <div className="summary-question">
            Are you a spouse or dependant of a Canadian military member?
          </div>
          <div className="response">{this.props.state["Ontario address"]}</div>
          <a href="#" className="edit">
            Edit
          </a>
        </div>
      ) : (
        ""
      );

    return (
      <form onSubmit={event => this.next(event)}>
        <nav className="navbar ontario-header-container">
          <a className="brand" href="#">
            OHIP application
          </a>
          <a className="french-toggle" href="#">
            FR
          </a>
        </nav>
        <div className="form-wrapper">
          <Card content={content} />
          <div className="summary-content">
            <div className="summary-tab">
              <div className="summary-question">
                Have you had OHIP in the past?
              </div>
              <div className="response">{this.props.state["Past OHIP"]}</div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Are you a spouse or dependant of a Canadian military member?
              </div>
              <div className="response">
                {this.props.state["Military relation"]}
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please indicate which Ontario base the military member has been
                posted to.
              </div>
              <div className="response">{this.props.state.baseIndex}</div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please select the document you wish to use to show military
                affiliation.
              </div>
              <div className="response">
                {this.props.state["Military proof"]}
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please upload photos or a scan of the military member's MPRR.
              </div>
              <div className="card-collection">
                <div className="card-uploaded small-card-uploaded">
                  <a href="#" className="view-link">
                    View
                  </a>
                  <div className="file-name">MPRR_1.jpeg</div>
                </div>
                <div className="card-uploaded small-card-uploaded">
                  <a href="#" className="view-link">
                    View
                  </a>
                  <div className="file-name">MPRR_2.jpeg</div>
                </div>
                <div className="card-uploaded small-card-uploaded">
                  <a href="#" className="view-link">
                    View
                  </a>
                  <div className="file-name">MPRR_3.jpeg</div>
                </div>
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            {hasAddress}
            <div className="summary-tab">
              <div className="summary-question">
                Please enter your Ontario residence address.
              </div>
              <div className="response">
                {this.props.state["Residence street"]},{" "}
                {this.props.state["Residence city"]},{" "}
                {this.props.state["Residence postal code"]}
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please enter your mailing address.
              </div>
              <div className="response">
                {this.props.state["Residence street"]},{" "}
                {this.props.state["Residence postal code"]},{" "}
                {this.props.state["Residence city"]}, Ontario, Canada"
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please select your immigration status in Ontario.
              </div>
              <div className="response">{this.props.state["Citizen type"]}</div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please select the document you wish to use as proof of your
                Canadian citizenship.
              </div>
              <div className="response">
                {this.props.state["Citizen proof"]}
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please upload photos or a scan of your Canadian passport.
              </div>
              <div className="card-collection">
                <div className="card-uploaded small-card-uploaded">
                  <a href="#" className="view-link">
                    View
                  </a>
                  <div className="file-name">mary_passport.jpeg</div>
                </div>
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please select one of the following documents you wish to use as
                proof of your identity.
              </div>
              <div className="response">
                {this.props.state["Identity proof type"]}
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please enter your full name.
              </div>
              <div className="response">
                {this.props.state["First name"]}{" "}
                {this.props.state["Middle name"]}{" "}
                {this.props.state["Last name"]}
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                What is your date of birth?
              </div>
              <div className="response">{this.props.state["birthday"]}</div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                What is your sex as in dicated on your birth certificate or
                passport?
              </div>
              <div className="response">{this.props.state["Sex"]}</div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please enter your contact information.
              </div>
              <div className="response">
                {this.props.state["Primary phone"]}, alt:
                {this.props.state["Alternate phone"]},{" "}
                {this.props.state["Email"]}
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please upload photos or a scan of your Canadian passport.
              </div>
              <div className="card-collection">
                <div className="card-uploaded small-card-uploaded">
                  <a href="#" className="view-link">
                    View
                  </a>
                  <div className="file-name">self-photo.jpeg</div>
                </div>
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
            <div className="summary-tab">
              <div className="summary-question">
                Please upload photos or a scan of your signature or sign on your
                device.
              </div>
              <div className="card-collection">
                <div className="card-uploaded small-card-uploaded">
                  <a href="#" className="view-link">
                    View
                  </a>
                  <div className="file-name">signature.jpeg</div>
                </div>
              </div>
              <a href="#" className="edit">
                Edit
              </a>
            </div>
          </div>
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
      </form>
    );
  }
}

export default Summary;
