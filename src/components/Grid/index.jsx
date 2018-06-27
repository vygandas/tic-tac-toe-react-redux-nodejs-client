import React, { Component } from 'react';

import './style.scss';

export default class Grid extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='vp-grid'>

                <div className="grid">
                    <div className="cell"/>
                    <div className="cell"/>
                    <div className="cell"/>
                    <div className="cell"/>
                    <div className="cell"/>
                    <div className="cell"/>
                    <div className="cell"/>
                    <div className="cell"/>
                    <div className="cell"/>
                </div>

            </div>
        );
    }
}

// export default connect(
//     state => ({loading: state.loading}),
//     {increase, decrease}
// )(Loader);