import {HIDE_LOADING, SHOW_LOADING} from '../actions/types';

const initialState = {
    message: 'Loading...',
    loading: false
};

export const game = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return { ...state, loading: true };
        case HIDE_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
};