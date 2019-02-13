import React from "react";
import constants from "../constants";
import Card from "../components/card";
import Autocomplete from "react-autocomplete";

class SelectBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
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
    let content = <div>Enter which base the military member serves at?</div>;
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
          <div className="text-input one-line">
            <label className="form-label" htmlFor="first-name-1">
              Enter your base
            </label>
            <div className="row">
              <Autocomplete
                className="form-control"
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
              />
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
      </form>
    );
  }
}

export default SelectBase;
