import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
import CardUploaded from "../components/cardUploaded";
import iconTrash from "../assets/icon-trash.svg";
import Posting1 from "./Posting1.png";
import Posting2 from "./Posting2.png";
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

class UploadPosting extends React.Component {
  constructor(props) {
    super(props);
    let status = props.status
      ? props.status
      : props.num > 0
      ? "Uploaded"
      : "Not completed";
    let num =
      props.location.state && props.location.state.num
        ? props.location.state.num
        : 0;
    this.state = {
      status: status,
      modal1IsOpen: false,
      modal2IsOpen: false,
      num: num
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.takePic = this.takePic.bind(this);

    //Modal
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(num) {
    switch (num) {
      case 1:
        this.setState({ modal1IsOpen: true });
        break;
      case 2:
        this.setState({ modal2IsOpen: true });
        break;
    }
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "$dark-grey";
  }

  closeModal(num) {
    switch (num) {
      case 1:
        this.setState({ modal1IsOpen: false });
        break;
      case 2:
        this.setState({ modal2IsOpen: false });
        break;
    }
  }

  takePic() {
    let target = {
      name: "pathFrom",
      value: process.env.PUBLIC_URL + "/uploadPosting"
    };
    this.props.save(target);
    let num =
      this.state.num > constants.numResPages - 1
        ? constants.numResPages
        : this.state.num + 1;
    this.props.save({
      name: "pageNum",
      value: num
    });
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + "/inCamera"
    });
  }

  next(event, path) {
    event.preventDefault();
    if (this.state.status === "Uploaded") {
      let target = {
        name: "Posting message",
        value: "Uploaded"
      };
      this.props.save(target);
      if (path === "/summary") {
        this.props.save({
          name: "Summary",
          value: false
        });
      } else {
        this.props.save({
          name: "pathFrom",
          value: "/uploadPosting"
        });
      }
      this.props.history.push(process.env.PUBLIC_URL + path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/hasAddress";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">11 / 23</div>
        <h2 className="sub-header">
          Please upload the military member’s posting message.
        </h2>
        <p className="caption">
          When relocating to Ontario, posting messages show your intent to move
          into the province. Please upload the full document.
        </p>
      </div>
    );

    let enableSummary =
      this.props.summary === true ? (
        this.state.status === "Uploaded" ? (
          <div>
            <input
              className="btn btn-general btn-right-align"
              type="submit"
              value="Save"
            />
            <button
              className="btn btn-general btn-invert"
              onClick={() => this.back()}
            >
              Back
            </button>
          </div>
        ) : (
          <div>
            <input
              className="btn btn-general btn-right-align btn-inactive"
              type="submit"
              value="Save"
            />
            <button
              className="btn btn-general btn-invert"
              onClick={() => this.back()}
            >
              Back
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

    let path = this.props.summary ? "/summary" : "/address";

    let cardUploaded = [],
      imageSrc,
      uploaded;

    let modal = [];
    switch (this.state.num) {
      case 2:
        uploaded = (
          <div className="upload-container">
            <a href="#" className="view-link" onClick={() => this.openModal(2)}>
              View
            </a>
            <div className="file-name">posting_message2.jpeg</div>
            <button className="delete-icon">
              <img src={iconTrash} />
            </button>
          </div>
        );
        cardUploaded.push(<CardUploaded content={uploaded} />);
        imageSrc = Posting2;
        modal.push(
          <Modal
            key={2}
            isOpen={this.state.modal2IsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={() => this.closeModal(2)}
            style={customStyles}
            contentLabel="upload modal"
          >
            <div className="modal-head">
              <div
                className="file-name"
                ref={subtitle => (this.subtitle = subtitle)}
              >
                posting_message2.jpeg
              </div>
              <a className="modal-close" onClick={() => this.closeModal(2)} />
            </div>
            <div className="modal-image">
              <img src={imageSrc} />
            </div>
          </Modal>
        );
      case 1:
        uploaded = (
          <div className="upload-container">
            <a href="#" className="view-link" onClick={() => this.openModal(1)}>
              View
            </a>
            <div className="file-name">posting_message1.jpeg</div>
            <button className="delete-icon">
              <img src={iconTrash} />
            </button>
          </div>
        );
        cardUploaded.push(<CardUploaded content={uploaded} />);
        imageSrc = Posting1;
        modal.push(
          <Modal
            key={1}
            isOpen={this.state.modal1IsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={() => this.closeModal(1)}
            style={customStyles}
            contentLabel="upload modal"
          >
            <div className="modal-head">
              <div
                className="file-name"
                ref={subtitle => (this.subtitle = subtitle)}
              >
                posting_message1.jpeg
              </div>
              <a className="modal-close" onClick={() => this.closeModal(1)} />
            </div>
            <div className="modal-image">
              <img src={imageSrc} />
            </div>
          </Modal>
        );
        break;
      default:
        cardUploaded = "";
    }

    return (
      <form onSubmit={event => this.next(event, path)}>
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
                className="icon-link icon-gallery"
                onClick={() => this.takePic()}
              >
                Browse gallery
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
          </div>
        </div>
        <div className="btn-container button-footer">{enableSummary}</div>
        {modal}
      </form>
    );
  }
}

export default UploadPosting;
