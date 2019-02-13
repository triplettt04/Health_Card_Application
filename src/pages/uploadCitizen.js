import React from "react";
import constants from "../constants";
import Card from "../components/card";
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

Modal.defaultStyles.overlay.backgroundColor = "rgb(58, 58, 58, 0.75)";

class UploadCitizen extends React.Component {
  constructor(props) {
    super(props);
    let status =
      props.location.state && props.location.state.uploaded
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
    this.subtitle.style.color = "#000";
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

  next(event) {
    event.preventDefault();
    if (this.state.status === "Uploaded") {
      let target = {
        name: "Citizenship proof",
        value: "Uploaded"
      };
      this.props.save(target);
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/selectID"
      });
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectCitizenProof";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">2 / 15</div>
        <h2 className="sub-header">
          Please upload photos or a scan of your Canadian passport.
        </h2>
        <p className="caption">
          A Canadian passport proves that you are a resident of Canada.
        </p>
      </div>
    );
    let uploaded = (
      <div>
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
                View gallery
              </a>
            </div>
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
        {modal}
      </form>
    );
  }
}

export default UploadCitizen;
