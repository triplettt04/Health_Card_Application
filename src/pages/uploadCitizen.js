import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
import CardUploaded from "../components/cardUploaded";
import iconTrash from "../assets/icon-trash.svg";
import postingLetter from "../assets/passport.png";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "80px",
    left: "25px",
    right: "25px",
    padding: "0",
    bottom: "unset"
  }
};

const padded = {
  paddingBottom: "50px"
};

Modal.defaultStyles.overlay.backgroundColor = "rgb(58, 58, 58, 0.75)";

class UploadCitizen extends React.Component {
  constructor(props) {
    super(props);
    let status =
      props.status && !(props.summaryUploaded === false)
        ? props.status
        : props.location.state &&
          props.location.state.uploaded &&
          !(props.summaryUploaded === false)
        ? "Uploaded"
        : "Not completed";
    this.state = {
      status: status,
      modalIsOpen: false
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.takePic = this.takePic.bind(this);

    //Modal
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  cancel() {
    this.props.history.push(process.env.PUBLIC_URL + "/summary");
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "$dark-grey";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  takePic() {
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + "/inCamera"
    });
    let target = {
      name: "pathFrom",
      value: process.env.PUBLIC_URL + "/uploadCitizen"
    };
    this.props.save(target);
  }

  next(event, path) {
    event.preventDefault();
    if (this.state.status === "Uploaded") {
      let target = {
        name: "Citizenship proof",
        value: "Uploaded"
      };
      this.props.save(target);
      if (path === "/summary") {
        this.props.save({
          name: "Summary",
          value: false
        });
      }
      this.props.history.push(process.env.PUBLIC_URL + path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectCitizenProof";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">12 / 22</div>
        <h2 className="sub-header">
          Please upload a photo or a scan of your{" "}
          {this.props.item.toLowerCase()}.
        </h2>
      </div>
    );

    let enableSummary =
      this.props.summary === true ? (
        this.state.status === "Uploaded" ? (
          <div>
            <input
              className="btn btn-general btn-wide"
              type="submit"
              value="Save and go back"
            />
            <button
              className="btn btn-general btn-wide btn-cancel"
              onClick={() => this.cancel()}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-general btn-wide"
              onClick={() => this.back()}
            >
              Back
            </button>
            <button
              className="btn btn-general btn-wide btn-cancel"
              onClick={() => this.cancel()}
            >
              Cancel
            </button>
          </div>
        )
      ) : (
        <div>
          <input
            type="submit"
            value="Next"
            className="btn btn-general btn-right-align"
          />
          <button
            className="btn btn-general btn-invert"
            onClick={() => this.back()}
          >
            Back
          </button>
        </div>
      );

    let path = this.props.summary ? "/summary" : "/selectID";

    let uploaded = (
      <div className="upload-container">
        <a href="#" className="view-link" onClick={this.openModal}>
          View
        </a>
        <div className="file-name">mary_passport.jpeg</div>
        <button className="delete-icon">
          <img src={iconTrash} />
        </button>
      </div>
    );

    let cardUploaded =
      this.state.status === "Uploaded" ? (
        <CardUploaded content={uploaded} />
      ) : (
        ""
      );

    let modal =
      this.state.status === "Uploaded" ? (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="upload modal"
        >
          <div className="modal-head">
            <div
              className="file-name"
              ref={subtitle => (this.subtitle = subtitle)}
            >
              mary_passport.jpeg
            </div>
            <a className="modal-close" onClick={this.closeModal} />
          </div>
          <div className="modal-image">
            <img src={postingLetter} />
          </div>
        </Modal>
      ) : (
        ""
      );

    return (
      <form onSubmit={event => this.next(event, path)}>
        <Nav />
        <div className="form-wrapper" style={this.props.summary ? padded : {}}>
          <Card content={content} />
          {cardUploaded}
          <div className="links-container">
            <div className="icon-link-container">
              <a
                href="#"
                className="icon-link icon-photo"
                onClick={() => this.takePic()}
              >
                Take a photo
              </a>
            </div>
            <div className="icon-link-container">
              <a
                href="#"
                className="icon-link icon-folder"
                onClick={() => this.takePic()}
              >
                Browse files
              </a>
            </div>
            <div className="icon-link-container">
              <a
                href="#"
                className="icon-link icon-gallery"
                onClick={() => this.takePic()}
              >
                Browse gallery
              </a>
            </div>
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
        {modal}
      </form>
    );
  }
}

export default UploadCitizen;
