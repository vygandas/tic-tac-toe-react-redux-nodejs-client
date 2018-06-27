import {HIDE_LOADING, MARK, RESET, SHOW_LOADING} from '../actions/types';

const initialState = {
    message: 'Loading...',
    loading: false,
    gameOver: false,
    grid: null,
    turnFor: 'X'
};

export const game = (state = initialState, action) => {
    switch (action.type) {
    case SHOW_LOADING:
        return { ...state, loading: true };
    case HIDE_LOADING:
        return { ...state, loading: false };
    case RESET:
        return { ...state, ...action.payload };
    case MARK:
        return { ...state, ...action.payload, ...{ turnFor: state.turnFor === 'X' ? 'O' : 'X' } };
    default:
        return state;
    }
};
