/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//  reducer:
import ToggleMenu from './reducers/ToggleMenu';

const rootReducer = combineReducers({
    MenuToggle: ToggleMenu,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));