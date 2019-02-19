import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
import CardUploaded from "../components/cardUploaded";
import iconTrash from "../assets/icon-trash.svg";
import MPRR1 from "./MPRR1.png";
import MPRR2 from "./MPRR2.png";
import MPRR3 from "./MPRR3.png";
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

class UploadMilitary extends React.Component {
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
      modal3IsOpen: false,
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
      case 3:
        this.setState({ modal3IsOpen: true });
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
      case 3:
        this.setState({ modal3IsOpen: false });
        break;
    }
  }

  takePic() {
    console.log(this.state.num);
    let target = {
      name: "pathFrom",
      value: process.env.PUBLIC_URL + "/uploadMilitary"
    };
    this.props.save(target);
    let num = this.state.num > 2 ? 3 : this.state.num + 1;
    this.props.save({
      name: "pageNum",
      value: num
    });
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + "/inCamera"
    });
  }

  next(event) {
    event.preventDefault();

    if (this.state.status === "Uploaded") {
      let target = {
        name: "Military proof",
        value: "Uploaded"
      };
      this.props.save(target);
      this.props.history.push({
        pathname: process.env.PUBLIC_URL + "/hasAddress"
      });
    }
  }

  back() {
    let path = process.env.PUBLIC_URL + "/selectMilitaryProof";
    this.props.history.push(path);
  }

  render() {
    let personalized =
      this.props.item === "MPRR"
        ? "the military member's Military Personal Record Resume (MPRR)"
        : "your " + this.props.item.toLowerCase();
    let content = (
      <div>
        <div className="progress-indicator">5 / 22</div>
        <h2 className="sub-header">
          Please upload photos or a scan of {personalized}.
        </h2>
      </div>
    );

    let cardUploaded = [],
      imageSrc,
      uploaded;

    let modal = [];
    switch (this.state.num) {
      case 3:
        uploaded = (
          <div className="upload-container">
            <a href="#" className="view-link" onClick={() => this.openModal(3)}>
              View
            </a>
            <div className="file-name">MPRR3.jpeg</div>
            <button className="delete-icon">
              <img src={iconTrash} />
            </button>
          </div>
        );
        cardUploaded.push(<CardUploaded content={uploaded} />);
        imageSrc = MPRR3;
        modal.push(
          <Modal
            key={3}
            isOpen={this.state.modal3IsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={() => this.closeModal(3)}
            style={customStyles}
            contentLabel="upload modal"
          >
            <div className="modal-head">
              <div
                className="file-name"
                ref={subtitle => (this.subtitle = subtitle)}
              >
                MPRR3.png
              </div>
              <a className="modal-close" onClick={() => this.closeModal(3)} />
            </div>
            <div className="modal-image">
              <img src={imageSrc} />
            </div>
          </Modal>
        );
      case 2:
        uploaded = (
          <div className="upload-container">
            <a href="#" className="view-link" onClick={() => this.openModal(2)}>
              View
            </a>
            <div className="file-name">MPRR2.jpeg</div>
            <button className="delete-icon">
              <img src={iconTrash} />
            </button>
          </div>
        );
        cardUploaded.push(<CardUploaded content={uploaded} />);
        imageSrc = MPRR2;
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
                MPRR2.png
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
            <div className="file-name">MPRR1.jpeg</div>
            <button className="delete-icon">
              <img src={iconTrash} />
            </button>
          </div>
        );
        cardUploaded.push(<CardUploaded content={uploaded} />);
        imageSrc = MPRR1;
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
                MPRR1.png
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

export default UploadMilitary;
