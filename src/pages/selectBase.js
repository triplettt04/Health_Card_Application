import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Autocomplete from "react-autocomplete";

class SelectBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.baseLabel ? props.baseLabel : ""
    };

    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  next(event) {
    event.preventDefault();
    let notEntered = true;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type !== "submit" && event.target[i].value.length) {
        notEntered = false;
        let target = {
          name: "baseIndex",
          value: this.findIndex(event.target[i].value)
        };
        this.props.save(target);
      }
    }
    if (!notEntered) {
      let path = process.env.PUBLIC_URL + "/selectMilitaryProof";
      this.props.history.push(path);
    }
  }

  findIndex(label) {
    for (let i = 0; i < constants.militaryAddresses.length; i++) {
      if (constants.militaryAddresses[i].label === label) {
        return i;
      }
    }
    return null;
  }

  back() {
    let path = process.env.PUBLIC_URL + "/isMilitary";
    this.props.history.push(path);
  }

  render() {
    let content = (
      <div>
        <div className="progress-indicator">3 / 22</div>
        <h2 className="sub-header">
          Please indicate which Ontario base the military member has been posted
          to.
        </h2>
      </div>
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
          <div className="text-input one-line base-input">
            <label className="form-label" htmlFor="first-name-1">
              Enter your base
            </label>
            <Autocomplete
              className="auto-text-container"
              getItemValue={item => item.label}
              items={constants.militaryAddresses}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              renderItem={(item, isHighlighted) => (
                <div
                  className={
                    isHighlighted ? "auto-highlighted auto-text" : "auto-text"
                  }
                  key={item.label}
                >
                  {item.label}
                </div>
              )}
              value={this.state.value}
              onChange={event =>
                this.setState({
                  value: event.target.value
                })
              }
              onSelect={val =>
                this.setState({
                  value: val
                })
              }
              renderMenu={(items, value, style) => {
                let maxLength = 3;
                if (items.length > maxLength) {
                  items = items.slice(0, maxLength);
                }
                return (
                  <div
                    style={{ ...style, ...this.menuStyle }}
                    children={items}
                  />
                );
              }}
            />
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
      </form>
    );
  }
}

export default SelectBase;
