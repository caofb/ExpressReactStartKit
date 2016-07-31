import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
const routeMiddleware = routerMiddleware(browserHistory)
const finalCreateStore = compose(
  applyMiddleware(thunk,routeMiddleware)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
