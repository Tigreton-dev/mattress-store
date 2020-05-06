/* eslint-disable import/no-unresolved */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    MenuVisible: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU: {
            const toggle = !state.MenuVisible;
            return {
                state,
                MenuVisible: toggle,
            };
        }
        default:
            return state;
    }
};

export default reducer;