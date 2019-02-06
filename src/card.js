import React from 'react';
import constants from './constants';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Card">
                <div>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Card;