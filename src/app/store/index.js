/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//  reducer:
import firstReducer from './reducers/firstReducer';

const rootReducer = combineReducers({
    miReducer: firstReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));