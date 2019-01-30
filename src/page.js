import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Page">
                {this.props.content}
            </div>
        );
    }
}

export default Page;