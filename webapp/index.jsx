import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import routes from './routes';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHashHistory } from 'history';

const store = configureStore();
const history = createHashHistory();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);