import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import ToDoPage from './containers/ToDoPage';
import { isLoaded as isAuthLoaded, loadAuth as loadAuth,loadSuccess,loadFail } from './redux/modules/auth';

export default (store) => {
  
function checkAuth(nextState, replace,cb) {
      const { auth: { user }} = store.getState();
      if (!user) {
        replace('/login');      
      }
      cb();
    }  
function requireLogin(nextState, replace,cb) {
  
  if (!isAuthLoaded(store.getState())) {   
    loadAuth().then(function(result) {
          store.dispatch(loadSuccess(result));
          checkAuth(nextState,replace,cb);
     }).catch(function(ex) {
        store.dispatch(loadFail(ex));
        replace('/login');
        cb();
    });
    
  }
  else{
    cb();
  }
}
 return (
  <Route path="/" component={App}>
   <IndexRoute component={HomePage} />
   <Route path="/about" component={AboutPage} />
   <Route path="/login" component={LoginPage} />
   <Route onEnter={requireLogin}>
     <Route path="/todo" component={ToDoPage}/>
   </Route>
  </Route>
 );
}
