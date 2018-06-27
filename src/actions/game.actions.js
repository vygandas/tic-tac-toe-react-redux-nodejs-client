import {HIDE_LOADING, MARK, RESET, SHOW_LOADING} from './types';
import axios from 'axios';
import {API_URL} from '../config/api.config';

export function reset() {

    return dispatch => { // this is Thunk library feature

        const request = axios.get(`${API_URL}/reset`)
            .then(response => {
                console.log('response', response);
                dispatch({
                    type: RESET,
                    payload: response.data
                });
            })
            .catch(() => {

            });
    };
}

export function mark(x, y) {
    return dispatch => { // this is Thunk library feature

        const request = axios.get(`${API_URL}/mark?x=${x}&y=${y}`)
            .then(response => {
                console.log('response', response);
                dispatch({
                    type: MARK,
                    payload: response.data
                });
            })
            .catch(() => {

            });
    };
}

export function showLoading() {
    return {
        type: SHOW_LOADING
    };
}

export function hideLoading() {
    return {
        type: HIDE_LOADING
    };
}