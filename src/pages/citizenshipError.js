import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";

class CitizenshipError extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }
  back() {
    this.props.history.push(process.env.PUBLIC_URL + "/selectCitizen");
  }
  render() {
    let content = (
      <div>
        <div className="img-container">
          <img src={require("../assets/icon-warning.svg")} />
        </div>
        <h2 className="sub-header">
          You must provide proof of Canadian citizenship or immigration status
          to get a health card.
        </h2>
        <p className="caption">
          If you are not able to supply any of the previously listed documents,
          you will not be able to apply online. <br />
          <br />
          Please refer to the <a href="#">eligibility criteria</a> or contact
          your local
          <a href="#">ServiceOntario</a> centre. <br />
          <br />
          You may go back and change your selection, cancel [firstName]’s
          application but continue applying for another family member, or exit
          the application process for everyone.
        </p>
      </div>
    );
    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <button
            className="btn btn-general btn-invert btn-wide"
            onClick={() => this.back()}
          >
            Back
          </button>
          <a href="#" className="block-link footer-link">
            Cancel application for [firstName]
          </a>
          <a href="#" className="block-link footer-link">
            Exit application process for everyone
          </a>
        </div>
      </form>
    );
  }
}

export default CitizenshipError;
