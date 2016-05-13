import fetch from '../../helpers/ApiClient';
const LOAD = '/auth/LOAD';
const LOAD_SUCCESS = '/auth/LOAD_SUCCESS';
const LOAD_FAIL = '/auth/LOAD_FAIL';
const LOGIN = '/auth/LOGIN';
const LOGIN_SUCCESS = '/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = '/auth/LOGIN_FAIL';
const LOGOUT = '/auth/LOGOUT';
const LOGOUT_SUCCESS = '/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = '/auth/LOGOUT_FAIL';

const initialState = {
  loggingIn: false,
  user: null,
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state,{
        loading: true
      });
    case LOAD_SUCCESS:
      return Object.assign({}, state,{
        loading: false,
        loaded: true,
        user: action.user
      });
    case LOAD_FAIL:
      return Object.assign({}, state,{
        loading: false,
        loaded: false,
        error: action.error
      })
    case LOGIN:
      return Object.assign({}, state,{
        loggingIn: true
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state,{
        loggingIn: false,
        user: action.result
      });
    case LOGIN_FAIL:
      return Object.assign({}, state,{
        loggingIn: false,
        user: null,
        loginError: action.error
      });
    case LOGOUT:
      return Object.assign({}, state,{
        loggingOut: true
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state,{
        loggingOut: false,
        user: null
      });
    case LOGOUT_FAIL:
      return Object.assign({}, state,{
        loggingOut: false,
        logoutError: action.error
      });
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}
export function  loadFail(error) {
    return {
        type: LOAD_FAIL,
        error
    };
}
export function  loadSuccess(user) {
    return {
        type: LOAD_SUCCESS,
        user
    };
}
export function loadAuth() {
  return fetch('/account/loadAuth');        
}
export function load() {
  return (dispatch,getState) => {
        fetch('/account/loadAuth').then(function(result) {
          dispatch(loadSuccess(result));
        }).catch(function(ex) {
           dispatch(loadFail(ex));
        })
        
   };
}
function  loginFail(error) {
    return {
        type: LOGIN_FAIL,
        error
    };
}
function  loginSuccess(user) {
    return {
        type: LOAD_SUCCESS,
        user
    };
}
export function login(email,password) {
  return (dispatch,getState) => {
        fetch('/account/login', {
           method: 'POST',
           body: {
            email:email,
            password:password
           }
        }).then(function(result) {
          dispatch(loginSuccess(result));
        }).catch(function(ex) {
           dispatch(loginFail(ex));
        })
        
   };
}
export function uploadFile(formData) {
  return (dispatch,getState) => {
        fetch('/account/file/upload', {
           method: 'POST',
           rawbody: formData
        }).then(function(result) {
         
        }).catch(function(ex) {
           
        })
        
   };
}
function  logoutFail(error) {
    return {
        type: LOGOUT_FAIL,
        error
    };
}
function  logoutSuccess(error) {
    return {
        type: LOGOUT_SUCCESS,
        error
    };
}
export function logout() {
  return (dispatch,getState) => {
        fetch('/account/logout').then(function(result) {
          dispatch(logoutSuccess(result));
        }).catch(function(ex) {
           dispatch(logoutFail(ex));
        })
        
   };
}
