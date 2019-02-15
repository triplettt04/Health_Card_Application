import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
import CardUploaded from "../components/cardUploaded";
import iconTrash from "../assets/icon-trash.svg";
import Modal from "react-modal";
import DriverLicense from "./driverLicense.png";

const customStyles = {
  content: {
    top: "80px",
    left: "25px",
    right: "25px",
    padding: "0",
    bottom: "unset"
  }
};

Modal.defaultStyles.overlay.backgroundColor = "rgb(58, 58, 58, 0.75)";

class UploadID extends React.Component {
  constructor(props) {
    super(props);
    let status = props.status
      ? props.status
      : props.location.state && props.location.state.uploaded
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
      pathname: process.env.PUBLIC_URL + "/inCamera",
      state: { pathFrom: process.env.PUBLIC_URL + "/uploadID" }
    });
    let target = {
      name: "pathFrom",
      value: process.env.PUBLIC_URL + "/uploadID"
    };
    this.props.save(target);
  }

  next(event) {
    event.preventDefault();
    if (this.state.status === "Uploaded") {
      let target = {
        name: "Identity proof",
        value: "Uploaded"
      };
      this.props.save(target);
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/name"
      });
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectID";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">14 / 22</div>
        <h2 className="sub-header">
          Please upload a photo or scan of your identity document with your full
          name and signature.
        </h2>
      </div>
    );
    let uploaded = (
      <div>
        <a href="#" className="view-link" onClick={this.openModal}>
          View
        </a>
        <div className="file-name">drivers_license.png</div>
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
              drivers_license.png
            </div>
            <a className="modal-close" onClick={this.closeModal} />
          </div>
          <div className="modal-image">
            <img src={DriverLicense} />
          </div>
        </Modal>
      ) : (
        ""
      );

    return (
      <form onSubmit={event => this.next(event)}>
        <Nav />
        <div className="form-wrapper">
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
        <div className="btn-container button-footer">
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
        {modal}
      </form>
    );
  }
}

export default UploadID;
