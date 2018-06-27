// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import './styles/app.scss';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));