import { AsyncStorage } from 'react-native';
import Relay from 'react-relay';
import conf from 'sportunity/conf/constants.json';

import * as types from './actionNames';
/**
 * Triggered when email form text changes
 */
export function updateEmail(text) {
  return {
    type: types.UPDATE_EMAIL,
    text
  };
}

/**
 * Triggered when password form text changes
 */
export function updatePassword(text) {
  return {
    type: types.UPDATE_PASSWORD,
    text
  };
}

/**
 * Triggered when network request is active
 * Used for activity indicator
 */
export function fetchingData() {
  return {
    type: types.FETCHING_DATA
  };
}

/**
 * Triggered when login is succesfull
 */
export function loginSuccess(userData) {
  return {
    type: types.LOGIN_SUCCESS,
    userData
  };
}
/**
 * Triggered when login is succesfull (updating drawer)
 */
export function isLoggedIn(value) {
  return {
    type: types.IS_LOGGED_IN,
    value
  };
}

/**
 * Triggered when login has failed
 */
export function loginError(errorMessage) {
  return {
    type: types.LOGIN_ERROR,
    errorMessage
  };
}

/**
 * ASYNC LOGIN
 * Triggered when login button is pressed
 */
export const login = (email, pass) => (
  (dispatch) => {
    // start loading
    dispatch(fetchingData());
    // Request to server...
    return fetch('http://vps298636.ovh.net/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pseudo: email,
        password: pass,
      })
    })
      .then((response) => response.json())
      .then((userData) => {

        console.log('userData', userData);
        // Inject network layer with authorization headers...
        if (userData.success){
          Relay.injectNetworkLayer(
            new Relay.DefaultNetworkLayer(conf.backendUrl, {
              headers: {
                token: userData.token
              }
            })
          );
          // Save token to asyncStorage and dispatch success actions
          // You can get token with the following code:
          // AsyncStorage.getItem('authToken').then((token) => {
          //   console.log(token);
          // });
          AsyncStorage.setItem('authToken', userData.token);
          dispatch(loginSuccess(userData));
          dispatch(isLoggedIn(true));
        } else {
          let errorMessage = userData.msg
          dispatch(loginError(errorMessage));
        }
      })
      .catch(() => {
        dispatch(loginError('Network request failed!'));
      })
      .done();
  }
);

/**
 * ASYNC LOGIN
 * Triggered when login button is pressed
 */
export const loginFacebook = (facebookToken) => (
  (dispatch) => {
    // start loading
    dispatch(fetchingData());
    // Request to server...
    return fetch('http://vps298636.ovh.net/auth/facebook', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: facebookToken
      })
    })
      .then((response) => response.json())
      .then((userData) => {

        console.log('facebookData', userData);
        // Inject network layer with authorization headers...
        if (userData.success){
          Relay.injectNetworkLayer(
            new Relay.DefaultNetworkLayer(conf.backendUrl, {
              headers: {
                token: userData.token
              }
            })
          );
          // Save token to asyncStorage and dispatch success actions
          // You can get token with the following code:
          // AsyncStorage.getItem('authToken').then((token) => {
          //   console.log(token);
          // });
          AsyncStorage.setItem('authToken', userData.token);
          dispatch(loginSuccess(userData));
          dispatch(isLoggedIn(true));
        } else {
          let errorMessage = userData.msg
          dispatch(loginError(errorMessage));
        }
      })
      .catch((err) => {
        dispatch(loginError(err));
      })
      .done();
  }
);
