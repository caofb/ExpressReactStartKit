import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import ToDoPage from './containers/ToDoPage';
import { isLoaded as isAuthLoaded, load as loadAuth } from './redux/modules/auth';

export default (store) => {
    const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/login');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

 return (
  <Route path="/" component={App}>
   <IndexRoute component={HomePage} />
   <Route path="/about" component={AboutPage} />
   <Route path="/login" component={LoginPage} />
   <Route onEnter={requireLogin}>
     <Route path="/todo" component={ToDoPage} onEnter={requireLogin}/>
   </Route>
  </Route>
 );
}
