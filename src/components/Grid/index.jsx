import React, { Component } from 'react';
import { connect } from 'react-redux';

import { reset, mark } from '../../actions/game.actions';

import Cell from '../Cell';

import './style.scss';

class Grid extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.reset();
    }

    render() {
        return (
            <div className='vp-grid'>

                {!this.props.gameOver &&
                    <div className="grid">
                        <Cell x={0} y={0} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={1} y={0} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={2} y={0} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={0} y={1} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={1} y={1} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={2} y={1} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={0} y={2} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={1} y={2} owner={this.props.owner} click={this.props.mark} />
                        <Cell x={2} y={2} owner={this.props.owner} click={this.props.mark} />
                    </div>
                }

            </div>
        );
    }
}

export default connect(
    state => ({
        loading: state.game.loading,
        owner: state.game.turnFor,
        gameOver: state.game.gameOver
    }),
    { reset, mark }
)(Grid);