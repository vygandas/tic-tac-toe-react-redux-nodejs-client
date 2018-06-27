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
    }

    render() {
        return (
            <div className="cell" onClick={() => !this.state.isMarked && this.markHandler(this.props.x, this.props.y, this.props.owner)}>
                {this.state.isMarked && <span className="owner">{this.state.owner}</span>}
            </div>
        );
    }
}

export default Cell;