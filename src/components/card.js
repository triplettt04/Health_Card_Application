import React from "react";

class Card extends React.Component {
  render() {
    return <div className="Card">{this.props.content}</div>;
  }
}

export default Card;
