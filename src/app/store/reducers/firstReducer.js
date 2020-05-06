/* eslint-disable import/no-unresolved */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    miFestState: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU: {
            return {
                state,
            };
        }
        default:
            return state;
    }
};

export default reducer;