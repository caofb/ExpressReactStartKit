import { combineReducers } from 'redux';
import auth from '../redux/modules/auth';
import {routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
auth,
routing:routerReducer,
form:formReducer
});

export default rootReducer;
