import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Nav from "../components/nav";
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
    let noneChecked = true;
    let value;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        noneChecked = false;
        value = event.target[i].value;
      }
    }
    if (!noneChecked) {
      let target = {
        name: "baseIndex",
        value: value
      };
      this.props.save(target);
      let path = process.env.PUBLIC_URL + "/selectMilitaryProof";
      this.props.history.push(path);
    }
    /*     let notEntered = true;
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
    } */
  }
  /* 
  findIndex(label) {
    for (let i = 0; i < constants.militaryAddresses.length; i++) {
      if (constants.militaryAddresses[i].label === label) {
        return i;
      }
    }
    return null;
  }
 */
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
        <Nav />
        <div className="form-wrapper">
          <Card content={content} />
          <div className="radio-field small-font">
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Base 1"
                checked={this.state.base === "Base 1"}
                onChange={() =>
                  this.setState({
                    base: "Base 1"
                  })
                }
              />
              <div className="label-text">Base 1</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Base 2"
                checked={this.state.base === "Base 2"}
                onChange={() =>
                  this.setState({
                    base: "Base 2"
                  })
                }
              />
              <div className="label-text">Base 2</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Base 3"
                checked={this.state.base === "Base 3"}
                onChange={() =>
                  this.setState({
                    base: "Base 3"
                  })
                }
              />
              <div className="label-text">Base 3</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Base 4"
                checked={this.state.base === "Base 4"}
                onChange={() =>
                  this.setState({
                    base: "Base 4"
                  })
                }
              />
              <div className="label-text">Base 4</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Base 5"
                checked={this.state.base === "Base 5"}
                onChange={() =>
                  this.setState({
                    base: "Base 5"
                  })
                }
              />
              <div className="label-text">Base 5</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Base 6"
                checked={this.state.base === "Base 6"}
                onChange={() =>
                  this.setState({
                    base: "Base 6"
                  })
                }
              />
              <div className="label-text">Base 6</div>
            </label>
            <label className="radio-style block">
              <input
                type="radio"
                className="radio-input radio"
                name="example"
                value="Base 7"
                checked={this.state.base === "Base 7"}
                onChange={() =>
                  this.setState({
                    base: "Base 7"
                  })
                }
              />
              <div className="label-text">Base 7</div>
            </label>
          </div>
          {/*           <div className="text-input one-line base-input">
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
          </div> */}
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
      </form>
    );
  }
}

export default SelectBase;
