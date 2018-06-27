import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';
import Grid from './Grid/index';

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>
                <Loader>
                    <Grid/>
                </Loader>

                <h1 className='title'>TIC TAC TOE</h1>
                <h2 className="server-messages">{this.props.message}</h2>
            </div>
        );
    }
}

export default connect(
    state => ({ message: state.game.message })
)(App);