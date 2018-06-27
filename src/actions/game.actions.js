import {HIDE_LOADING, MARK, RESET, SHOW_LOADING} from './types';

export function reset() {
    return {
        type: RESET
    };
}

export function mark() {
    return {
        type: MARK
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