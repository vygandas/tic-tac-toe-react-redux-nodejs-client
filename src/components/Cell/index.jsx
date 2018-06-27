import React, { Component } from 'react';

import './style.scss';

class Cell extends Component {

    constructor() {
        super();
        this.state = {
            isMarked: false,
            owner: null
        };
        this.markHandler = this.markHandler.bind(this);
    }

    markHandler(x, y, owner) {
        this.setState({
            isMarked: true,
            owner
        });
        this.props.click(x, y);
        console.log(x, y);
    }

    render() {
        return (
            <div className="cell" onClick={() => this.markHandler(this.props.x, this.props.y, this.props.owner)}>
                {this.state.isMarked && this.state.owner}
            </div>
        );
    }
}

export default Cell;