import { combineReducers } from 'redux';
import environment from './environment';
import {routerReducer } from 'react-router-redux';
const rootReducer = combineReducers({
environment,
routing:routerReducer
});

export default rootReducer;
