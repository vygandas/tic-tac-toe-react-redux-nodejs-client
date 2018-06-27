import React, { Component } from 'react';

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
                <h2 className="server-messages">Loading...</h2>
            </div>
        );
    }
}

export default App;