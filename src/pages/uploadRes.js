import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
import CardUploaded from "../components/cardUploaded";
import iconTrash from "../assets/icon-trash.svg";
import Residence1 from "./MPRR1.png"; //TO CHANGE
import Residence2 from "./MPRR2.png"; //TO CHANGE
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

class UploadRes extends React.Component {
  constructor(props) {
    super(props);

    let status =
      props.status && !(props.summaryUploaded === false)
        ? props.status
        : props.num > 0 && !(props.summaryUploaded === false)
        ? "Uploaded"
        : "Not completed";
    let num =
      props.location.state && props.location.state.num
        ? props.location.state.num
        : 0;
    let modalIsOpen = [];
    for (let i = 0; i < constants.numResPages; i++) {
      modalIsOpen.push(false);
    }
    this.state = {
      status: status,
      num: num,
      modalIsOpen: modalIsOpen
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

  openModal(num) {
    let curModal = this.state.modalIsOpen;
    curModal[num] = true;
    this.setState({ modalIsOpen: curModal });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "$dark-grey";
  }

  closeModal(num) {
    let curModal = this.state.modalIsOpen;
    curModal[num] = false;
    this.setState({ modalIsOpen: curModal });
  }

  getSrc(num) {
    switch (num) {
      case 0:
        return Residence1;
      case 1:
        return Residence2;
      default:
        return null;
    }
  }

  takePic() {
    let target = {
      name: "pathFrom",
      value: process.env.PUBLIC_URL + "/uploadRes"
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
        name: "Residence proof",
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
          value: "/uploadRes"
        });
      }
      this.props.history.push(process.env.PUBLIC_URL + path);
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectResProof";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">11 / 23</div>
        <h2 className="sub-header">
          Please upload a photo or scan of your {this.props.item.toLowerCase()}.
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

    let path = this.props.summary ? "/summary" : "/address";

    let cardUploaded = [],
      imageSrc,
      uploaded;

    let imageNameStart = "residence_proof";
    let imageEnding = ".jpeg";

    let modal = [];
    for (let i = 0; i < this.state.num; i++) {
      uploaded = (
        <div className="upload-container">
          <a href="#" className="view-link" onClick={() => this.openModal(i)}>
            View
          </a>
          <div className="file-name">
            {imageNameStart + (i + 1).toString() + imageEnding}
          </div>
          <button className="delete-icon">
            <img src={iconTrash} />
          </button>
        </div>
      );
      cardUploaded.push(<CardUploaded key={i} content={uploaded} />);
      imageSrc = this.getSrc(i);
      modal.push(
        <Modal
          key={i}
          isOpen={this.state.modalIsOpen[i]}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={() => this.closeModal(i)}
          style={customStyles}
          contentLabel="upload modal"
        >
          <div className="modal-head">
            <div
              className="file-name"
              ref={subtitle => (this.subtitle = subtitle)}
            >
              {imageNameStart + (i + 1).toString() + imageEnding}
            </div>
            <a className="modal-close" onClick={() => this.closeModal(i)} />
          </div>
          <div className="modal-image">
            <img src={imageSrc} />
          </div>
        </Modal>
      );
    }

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

export default UploadRes;
