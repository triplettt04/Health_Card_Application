import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card">
                {this.props.content}
            </div>
        );
    }
}

export default Card;